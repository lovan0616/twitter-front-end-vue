<template>
  <div class="tweet-wrapper" v-if="this.presentUser !== ''">
    <router-link
      class="router-link"
      :to="{
        name: 'reply-list',
        params: { id: tweet.id },
      }"
    >
      <div class="tweet d-flex p-2">
        <div class="image-area mr-3">
          <router-link
            :to="{
              name: 'user-profile',
              params: { id: tweet.userId },
            }"
          >
            <div class="image-cropper">
              <img :src="tweet.userAvatar" class="avatar" />
            </div>
          </router-link>
        </div>
        <div class="content-area">
          <div class="post-info d-flex">
            <router-link
              :to="{
                name: 'user-profile',
                params: { id: tweet.userId },
              }"
            >
              <strong class="name">{{ tweet.userName }}</strong>
            </router-link>

            <p class="account ml-1">{{ tweet.userAccount }}</p>
            <p class="created-at">・{{ tweet.createdAt | fromNow }}</p>

            <div
              class="setting-control"
              v-show="presentUser.id === tweet.userId"
            >
              <div
                class="dot-wrapper"
                @click.stop.prevent="toggleList"
                ref="button"
              >
                <span class="setting-dot"></span>
              </div>
            </div>
          </div>
          <div class="post-content">
            <p style="word-wrap: break-word">{{ tweet.description }}</p>
          </div>
          <div class="post-engage d-flex">
            <div class="reply-control d-flex mr-3">
              <router-link
                :to="{
                  name: 'reply-list',
                  params: { id: tweet.id },
                }"
              >
                <img src="../assets/Reply.svg" />
              </router-link>
              <p class="reply-counts mb-0 ml-2">{{ tweet.repliedCount }}</p>
            </div>

            <div class="like-control d-flex ml-3" v-if="!isSelfTweet()">
              <img
                class="like-icon"
                src="../assets/Like.svg"
                v-if="!tweet.isLiked"
                @click.stop.prevent="addLike(tweet.id)"
              />
              <img
                class="like-icon"
                src="../assets/Like-liked.svg"
                v-else
                @click.stop.prevent="deleteLike(tweet.id)"
              />
              <p class="like-counts mb-0 ml-2" v-if="!tweet.isLiked">
                {{ tweet.likedCount }}
              </p>
              <p class="red like-counts mb-0 ml-2" v-else>
                {{ tweet.likedCount }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>

    <!-- 插入edit-list(結構設計刻意放置於router-link外，避免觸及router-link) -->
    <div
      class="list-wrapper"
      v-show="listPopup"
      v-closable="{
        exclude: ['button'],
        handler: 'onClose',
      }"
    >
      <div class="list-group setting-list">
        <button
          class="btn list-group-item list-item edit-tweet d-flex align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#editTweetModal"
        >
          <img class="list-icon" src="../assets/Edit.svg" />
          <p class="mb-0">編輯</p>
        </button>
        <!-- Todo: 刪除按鈕綁v-on，完成刪除事件 -->
        <button
          class="list-group-item list-item delete-tweet d-flex align-items-center"
        >
          <img class="list-icon" src="../assets/Trash-can.svg" />
          <p class="mb-0">刪除</p>
        </button>
      </div>
    </div>

    <!-- 插入edit modal -->
    <div
      class="modal fade"
      id="editTweetModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editTweetModalLabel">編輯推文</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="user-related d-flex">
              <div class="image-area mr-3">
                <div class="image-cropper">
                  <img :src="tweet.userAvatar" class="avatar" />
                </div>
              </div>
              <div class="post-info d-flex">
                <strong class="name">{{ tweet.userName }}</strong>
                <p class="account ml-1">{{ tweet.userAccount }}</p>
                <p class="created-at">・{{ tweet.createdAt | fromNow }}</p>
              </div>
            </div>

            <form>
              <textarea
                class="w-100 mt-3"
                name="description"
                id="description"
                cols="20"
                rows="4"
                v-model="tweet.description"
              ></textarea>
              <!-- Todo: 儲存按鈕綁v-on，完成儲存事件 -->
              <button type="submit" class="save-edit btn btn-primary btn-block">
                儲存
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import likesAPI from "../apis/likes";

export default {
  name: "Tweet",
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
    initialUser: {
      type: Object,
      required: true,
    },
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
        isLiked: false,
      },
      listPopup: false,
      presentUser: this.initialUser,
    };
  },
  methods: {
    fetchData() {
      const {
        id,
        UserId: userId,
        description,
        createdAt,
        repliedCount,
        LikeCount: likedCount,
        isLiked,
      } = this.initialTweet;
      const {
        name: userName,
        account: userAccount,
        avatar: userAvatar,
      } = this.initialUser;

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
        isLiked,
      };
    },
    async addLike(tweetId) {
      try {
        const response = await likesAPI.like({ tweetId });
        console.log(response);

        this.tweet = {
          ...this.tweet,
          isLiked: true,
          likedCount: this.tweet.likedCount + 1,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法點擊愛心，請稍後再試",
        });
      }
    },
    async deleteLike(tweetId) {
      try {
        const response = await likesAPI.unlike({ tweetId });
        console.log(response);

        this.tweet = {
          ...this.tweet,
          isLiked: false,
          likedCount: this.tweet.likedCount - 1,
        };
      } catch (error) {
        console.log("error:", error);
        Toast.fire({
          icon: "error",
          title: "暫時無法收回愛心，請稍候再試！",
        });
      }
    },
    toggleList() {
      this.listPopup = !this.listPopup;
    },
    onClose() {
      this.listPopup = false;
    },
    isSelfTweet() {
      return this.presentUser.id === this.tweet.userId;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.tweet-wrapper {
  position: relative;
}

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

.setting-control {
  margin-left: auto;
  position: relative;
}

.dot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.dot-wrapper:hover {
  background-color: #ffede0;
  border-radius: 50%;
}

.dot-wrapper:hover .setting-dot {
  border: 1px solid #ff6600;
}

.dot-wrapper:hover .setting-dot::before {
  border: 1px solid #ff6600;
}

.dot-wrapper:hover .setting-dot::after {
  border: 1px solid #ff6600;
}

.setting-dot,
.setting-dot::before,
.setting-dot::after {
  width: 5px;
  height: 5px;
  background-color: #ffffff;
  border: 1px solid slategray;
  border-radius: 50%;
  position: relative;
  display: flex;
}

.setting-dot::before {
  content: "";
  position: absolute;
  top: -1px;
  right: 5px;
}

.setting-dot::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 5px;
}

.list-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 170px;
}

.setting-list {
  box-shadow: 1px 1px 5px #e3e5e9;
}

.list-item {
  border: none;
}

.list-item:hover {
  background-color: #f7f7f7;
}

.list-item:active {
  background-color: #ededed;
}

.list-icon {
  width: 20px;
  margin-right: 5px;
}

.delete-tweet {
  color: #e0245e;
}

textarea {
  border: hidden;
  resize: none;
  -moz-appearance: none;
  outline: 0px none transparent;
}

.save-edit {
  border-radius: 20px;
}

.like-icon {
  cursor: pointer;
}

.red.like-counts {
  color: #e0245e;
}
</style>