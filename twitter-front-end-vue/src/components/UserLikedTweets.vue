<template>
  <div class="tweet-wrapper">
    <router-link :to="{
      name: 'reply-list',
      params: {id: tweet.id}
    }">
      <div class="tweet d-flex p-2">
    <div class="image-area mr-3">
      <router-link :to="{
        name: 'user-profile',
        params: {id: tweet.userId}
      }">
        <div class="image-cropper">
          <img :src="tweet.userAvatar | emptyImage" class="avatar" />
        </div>
      </router-link>
    </div>
    <div class="content-area w-100">
      <div class="post-info d-flex">
        <router-link :to="{
          name: 'user-profile',
          params: {id: tweet.userId}
        }">
          <strong class="name">{{ tweet.userName }}</strong>
        </router-link>
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
          <p class="reply-counts mb-0 ml-2">{{ tweet.replisdCount }}</p>
        </div>

        <div class="like-control d-flex ml-3" v-if="!isSelfTweet()">
          <img class="like-icon" src="../assets/Like.svg"  v-if="!tweet.isLike" @click.stop.prevent="addLike(tweet.id)"/>
          <img class="like-icon" src="../assets/Like-liked.svg"  v-else @click.stop.prevent="deleteLike(tweet.id)"/>
          <p class="like-counts mb-0 ml-2" v-if="!tweet.isLike">{{ tweet.likesCount }}</p>
          <p class="red like-counts mb-0 ml-2" v-else>{{ tweet.likesCount }}</p>
        </div>
      </div>
    </div>
  </div>
    </router-link>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'
import likesAPI from '../apis/likes'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'
export default {
  name: "UserLikedTweets",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initialLike: {
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
      tweet: {
        id: -1,
        userId: -1,
        description: "",
        createdAt: "",
        userName: "",
        userAccount: "",
        userAvatar: "",
        repliesCount: -1,
        likesCount: -1,
        isLike: false
      },
      isSelfTweet() {
        return this.currentUser.id === this.tweet.userId
      }
    }
  },
  methods: {
    fetchData() {
      const { id, UserId: userId, description, createdAt, repliesCount, likesCount, isLike: isLike } = this.initialLike.Tweet

      const { name: userName, account: userAccount, avatar: userAvatar} = this.initialLike.Tweet.User

      this.tweet = {
        ...this.tweet,
        id,
        userId,
        description,
        createdAt,
        userName,
        userAccount,
        userAvatar,
        repliesCount,
        likesCount,
        isLike
      }
    },
    async addLike(tweetId) {
      try {
        const response = await likesAPI.like({ tweetId })
        console.log(response)

        this.tweet = {
        ...this.tweet,
        isLike: true,
        likesCount: this.tweet.likesCount + 1
      };
        
      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法點擊愛心，請稍後再試'
        })
      }
    },
    async deleteLike(tweetId) {
      try {
        const response = await likesAPI.unlike({ tweetId })
        console.log(response)

        this.tweet = {
        ...this.tweet,
        isLike: false,
        likesCount: this.tweet.likesCount - 1
      };
        
      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法收回愛心，請稍後再試'
        })
      }
    },
  },
  created() {
    this.fetchData()
  }
};
</script>

<style scoped>
.tweet-wrapper a,
.tweet-wrapper a:hover {
  text-decoration: none;
  color: #000000;
}

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