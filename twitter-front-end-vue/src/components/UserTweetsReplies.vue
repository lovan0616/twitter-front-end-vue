<template>
  <div>
    <div class="tweet-wrapper">
      <router-link
        class="router-link"
        :to="{
  name: 'reply-list',
  params: {id: presentTweet.id}
}"
      >
        <div class="tweet d-flex p-2">
          <div class="image-area mr-3">
            <router-link
              :to="{
            name: 'user-profile',
            params: {id: presentTweet.User.id}
          }"
            >
              <div class="image-cropper">
                <img :src="presentTweet.User.avatar | emptyImage" class="avatar" />
              </div>
            </router-link>
          </div>
<<<<<<< HEAD
          <div class="content-area">
=======
          <div class="content-area w-100">
>>>>>>> a0c9e063de7ff632e142c2d9623af01c9012bedd
            <div class="post-info d-flex">
              <router-link
                :to="{
            name: 'user-profile',
            params: {id: presentTweet.User.id}
          }"
              >
                <strong class="name">{{ presentTweet.User.name }}</strong>
              </router-link>

              <p class="account ml-1">{{ presentTweet.User.account }}</p>
              <p class="created-at">・{{ presentTweet.createdAt | fromNow }}</p>
            </div>
            <div class="post-content">
              <p style="word-wrap: break-word">{{ presentTweet.description }}</p>
            </div>
            <div class="post-engage d-flex">
              <div class="reply-control d-flex mr-3">
                <router-link
                  :to="{
            name: 'reply-list',
            params: {id: presentTweet.id}
          }"
                >
                  <img src="../assets/Reply.svg" />
                </router-link>
                <p class="reply-counts mb-0 ml-2">{{ presentTweet.repliesCount }}</p>
              </div>

              <div class="like-control d-flex ml-3" v-if="!isSelfTweet()">
                <img
                  class="like-icon"
                  src="../assets/Like.svg"
                  v-if="!presentTweet.isLike"
                  @click.stop.prevent="addLike(presentTweet.id)"
                />
                <img
                  class="like-icon"
                  src="../assets/Like-liked.svg"
                  v-else
                  @click.stop.prevent="deleteLike(presentTweet.id)"
                />
                <p
                  class="like-counts mb-0 ml-2"
                  v-if="!presentTweet.isLike"
                >{{ presentTweet.likesCount }}</p>
                <p class="red like-counts mb-0 ml-2" v-else>{{ presentTweet.likesCount }}</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="reply-container">
      <div class="reply-template d-flex p-2">
        <div class="image-cropper">
          <img :src="user.avatar | emptyImage" class="avatar" />
        </div>
        <div class="reply-all ml-3">
          <div class="user-profile d-flex">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-account">{{ user.account }}</div>
            <div class="dot">・</div>
            <div class="createdAt">{{ initialReply.createdAt | fromNow }}</div>
          </div>
          <div class="user-reply d-flex">
            <div class="reply-literal">回覆</div>
            <router-link
              :to="{
            name: 'user-profile',
            params: {id: presentTweet.User.id}
          }"
            >
              <div class="reply-account">{{ presentTweet.User.account }}</div>
            </router-link>
          </div>
          <div class="reply-content">{{ initialReply.comment }}</div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script>
import { fromNowFilter, emptyImageFilter } from "../utils/mixins";
import likesAPI from "../apis/likes";
import { Toast } from "../utils/helpers";
export default {
  name: "UserTweetsReplies",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initialReply: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      presentTweet: {},
      isSelfTweet() {
        return this.currentUser.id === this.presentTweet.UserId
      }
    };
  },
  methods: {
    fetchTweet() {
      const { Tweet } = this.initialReply;
      this.presentTweet = {
        ...Tweet
      };
    },
    async addLike(tweetId) {
      try {
        const response = await likesAPI.like({ tweetId });
        console.log(response);

        this.presentTweet = {
          ...this.presentTweet,
          isLike: true,
          likesCount: this.presentTweet.likesCount + 1
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法點擊愛心，請稍後再試"
        });
      }
    },
    async deleteLike(tweetId) {
      try {
        const response = await likesAPI.unlike({ tweetId });
        console.log(response);

        this.presentTweet = {
          ...this.presentTweet,
          isLike: false,
          likesCount: this.presentTweet.likesCount - 1
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法收回愛心，請稍後再試"
        });
      }
    }
  },
  watch: {
    initialReply(newValue) {
      const { Tweet } = newValue
      this.presentTweet = {
        ...this.presentTweet,
        ...Tweet
      }
    }
  },
  created() {
    this.fetchTweet();
  },
};
</script>

<style scoped>
.tweet-wrapper a,
.tweet-wrapper a:hover {
  text-decoration: none;
  color: #000000;
}

.tweet {
  border-bottom: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}

.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}

.account,
.created-at {
  color: #657786;
}

.like-icon {
  cursor: pointer;
}

.red.like-counts {
  color: #e0245e;
}

.reply-template {
  border-bottom: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}
.reply-all {
  width: 80%;
}
.user-account,
.dot,
.createdAt,
.reply-literal {
  color: #657786;
}
.user-name,
.dot {
  font-weight: 700;
}
.user-account {
  margin-left: 5px;
}
.reply-account {
  color: #ff6600;
  margin-left: 5px;
}
.reply-content {
  font-size: 15px;
}
.divider {
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
}
</style>