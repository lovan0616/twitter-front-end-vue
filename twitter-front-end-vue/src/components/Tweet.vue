<template>
  <div class="tweet d-flex p-2">
    <div class="image-area mr-3">
      <a>
        <div class="image-cropper">
          <img :src="tweet.userAvatar" class="avatar" />
        </div>
      </a>
    </div>
    <div class="content-area">
      <div class="post-info d-flex">
        <strong class="name">{{ tweet.userName }}</strong>
        <p class="account ml-1">{{ tweet.userAccount }}</p>
        <p class="created-at">・{{ tweet.createdAt | fromNow }}</p>
      </div>
      <div class="post-content">
        <p style="word-wrap: break-word">{{ tweet.description }}</p>
      </div>
      <div class="post-engage d-flex">
        <div class="reply-control d-flex mr-3">
         <!-- Todo:修改成router-link 導reply-list -->
          <a>
            <img src="../assets/Reply.svg" />
          </a>
          <p class="reply-counts mb-0 ml-2">{{ tweet.repliedCount }}</p>
        </div>

        <div class="like-control d-flex ml-3">
          <img class="like-icon" src="../assets/Like.svg"  v-if="!tweet.isLiked" @click.stop.prevent="addLike"/>
          <img class="like-icon" src="../assets/Like-liked.svg"  v-else @click.stop.prevent="deleteLike"/>
          <p class="like-counts mb-0 ml-2" v-if="!tweet.isLiked">{{ tweet.likedCount }}</p>
          <p class="red like-counts mb-0 ml-2" v-else>{{ tweet.likedCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'
export default {
  name: "Tweet",
  props: {
    initialTweet: {
      type: Object,
      required: true
    }
  },
  mixins: [fromNowFilter],
  data() {
    return {
      tweet: {
        id: -1,
        userId: -1,
        description: "",
        createdAt: "",
        userName: "",
        userAccount: "",
        userAvatar: "",
        repliedCount: -1,
        likedCount: -1,
        isLiked: false
      }
    }
  },
  methods: {
    fetchData() {
      const {id, UserId: userId, description, createdAt, User: user, repliedCount, LikeCount: likedCount, isLiked } = this.initialTweet
      const {name: userName, account: userAccount, avatar: userAvatar} = user

      this.tweet = {
        ...this.tweet,
        id,
        userId,
        description,
        createdAt,
        userName,
        userAccount,
        userAvatar,
        repliedCount,
        likedCount,
        isLiked
      }
    },
    addLike() {
      this.tweet = {
        ...this.tweet,
        isLiked: true,
        likedCount: this.tweet.likedCount + 1
      }
    },
    deleteLike() {
      this.tweet = {
        ...this.tweet,
        isLiked: false,
        likedCount: this.tweet.likedCount - 1
      }
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<style scoped>
.tweet {
  border-bottom: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
  border-left: 1px solid #E6ECF0;
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

.account, .created-at {
  color: #657786;
}

.like-icon {
  cursor: pointer;
}

.red.like-counts {
  color: #E0245E;
}
</style>