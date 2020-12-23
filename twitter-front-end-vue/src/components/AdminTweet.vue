<template>
  <div class="tweetscontainer">
    <div class="tweetscard d-flex">
      <div class="userphoto mx-2 ml-3">
        <img :src="tweet.User.avatar" alt="userpic" class="userpic" />
      </div>
      <div class="contentcontainer d-flex">
        <div class="userinfo d-flex">
          <div class="username">{{ tweet.User.name }}</div>
          <div class="useraccount">{{ tweet.User.account }}</div>
          <div class="dot">·</div>
          <div class="tweettime">{{ tweet.createdAt | fromNow }}</div>
        </div>
        <div class="tweetcontent" v-if="overFifty">
          {{ tweet.trimmedTweet }} ...
        </div>
        <button class="btn-primary" v-if="overFifty" @click="showMore">
          Show All
        </button>
        <div class="tweetcontent" v-else>
          {{ tweet.description }}
        </div>
      </div>
      <div class="delete">
        <img
          src="../assets/Close.svg"
          alt="delete"
          class="delete-img"
          @click="deleteTweet(tweet.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      tweet: {},
      overFifty: false,
    };
  },
  methods: {
    fetchTweet() {
      this.tweet = this.initialTweet;
      const { description } = this.tweet;
      if (description.length > 50) {
        this.overFifty = true;
        const fifty = description.substr(0, 50);
        this.tweet.trimmedTweet = fifty;
      }
      return;
    },
    deleteTweet() {
      this.$emit("delete-tweet", this.tweet.id);
    },
    showMore() {
      this.overFifty = !this.overFifty;
    },
  },
  created() {
    this.fetchTweet();
  },
};
</script>

<style scoped>
.tweetscontainer {
  width: 100%;
}
.tweetscard {
  border-bottom: 1px solid #e6ecf0;
  margin-top: 1rem;
}
.contentcontainer {
  flex-direction: column;
  width: 80%;
  margin: 0 0 10px 0;
  padding: 0 0 2rem 5px;
}
.userphoto {
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  background-color: #c4c4c4;
  overflow: hidden;
}
.userpic {
  width: 100%;
  height: 100%;
  display: inline;
  object-fit: cover;
}

.userinfo {
  margin: 0 0 5px 0;
}
.username,
.dot {
  font-weight: 700;
}
.username {
  margin-right: 5px;
}
.useraccount,
.tweettime,
.dot {
  margin: 0 3px;
  color: #657786;
}
.useraccount,
.tweettime {
  font-weight: 500;
}
.delete {
  margin-left: 20px;
  margin-right: 10px;
}

.delete-img {
  cursor: pointer;
}

.btn-primary {
  position: absolute;
  right: 10%;
  border-radius: 100px;
  height: 2rem;
  margin: 0;
  padding: 0 1rem;
}
</style>