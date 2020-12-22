<template>
  <div class="detail-container">
    <div class="tweet-container">
      <div class="user-info-container d-flex">
        <div class="image-cropper">
          <img :src="presentTweet.User.avatar" alt="user-pic" class="avatar" />
        </div>
        <div class="user-info-context">
          <div class="user-name">{{ presentTweet.User.name }}</div>
          <div class="user-account">{{ presentTweet.User.account }}</div>
        </div>
      </div>
      <div class="tweet-content">
        {{ presentTweet.description }}
      </div>
      <div class="tweet-time d-flex">
        <div class="tweet-hour">上午 10:05</div>
        <div class="dot">·</div>
        <div class="tweet-date">{{ presentTweet.createdAt | fromNow }}</div>
      </div>
    </div>
    <div class="status-container d-flex">
      <div class="reply-number">{{ presentTweet.repliedCount }}</div>
      <div class="reply">回覆</div>
      <div class="like-number">{{ presentTweet.LikeCount }}</div>
      <div class="like">喜歡次數</div>
    </div>
    <div class="reation-container d-flex">
      <div class="reply-icon">
        <a
          href="#myModal"
          role="button"
          data-toggle="modal"
          data-target="#postReply"
        >
          <img src="../assets/Reply.svg" class="reply-img" />
        </a>
      </div>
      <div class="like-icon">
        <img
          src="../assets/Like.svg"
          class="like-img"
          v-if="!presentTweet.isLiked"
          @click.stop.prevent="addLike"
        />
        <img
          class="like-img"
          src="../assets/Like-liked.svg"
          v-else
          @click.stop.prevent="deleteLike"
        />
      </div>
    </div>

    <!--Modal-->
    <div
      class="modal fade"
      id="postReply"
      tabindex="-1"
      role="dialog"
      aria-labelledby="postReplyLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img src="../assets/Close.svg" />
            </button>
          </div>
          <div class="modal-body d-flex">
            <div class="m-reply-all d-flex">
              <div class="m-reply-container d-flex">
                <div class="m-reply-photo-area">
                  <img
                    :src="presentTweet.User.avatar"
                    alt=""
                    class="m-reply-to-photo"
                  />
                  <div class="m-reply-line"></div>
                  <img :src="presentUser.avatar" alt="" class="m-reply-photo" />
                </div>
                <div class="reply-content-area">
                  <div class="m-reply-post-info d-flex">
                    <strong class="m-reply-name">{{
                      presentTweet.User.name
                    }}</strong>
                    <p class="m-reply-account">
                      {{ presentTweet.User.account }}
                    </p>
                    <p class="m-reply-created-at">・3小時</p>
                  </div>
                  <div class="m-reply-post-content">
                    <p class="m-p">
                      {{ presentTweet.description }}
                    </p>
                    <div class="m-reply-to-container d-flex">
                      <div class="m-reply-to">回覆給</div>
                      <div class="m-reply-to-account">
                        {{ presentTweet.User.account }}
                      </div>
                    </div>
                    <form
                      class="w-100 d-flex flex-column align-items-end"
                      @submit.stop.prevent="handleSubmit"
                    >
                      <textarea
                        name="text"
                        class="w-100"
                        id="text"
                        cols="20"
                        rows="6"
                        placeholder="推你的回覆"
                        v-model="newReply"
                      >
                      </textarea>

                      <div class="button-control mt-3">
                        <button
                          type="submit"
                          class="btn btn-primary post"
                          :disabled="!newReply"
                        >
                          回覆
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "TweetDetail",
  mixins: [fromNowFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newReply: "",
      presentUser: this.user,
      presentTweet: this.initialTweet,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("after-post-submit", {
        id: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
        newReply: this.newReply,
      });
      console.log(this.newReply);
      // 表單回覆後清空收入欄、關閉彈跳視窗
      this.newReply = "";
      $("#postReply").modal("hide");
      this.presentTweet.repliedCount++;
      console.log(this.presentTweet.repliedCount);
    },
    // fetchUser() {
    //   // 待套用API撈取使用者資料
    //   const { currentUser, isAuthenticated } = this.user;
    //   console.log(isAuthenticated);
    //   const {
    //     account: userAccount,
    //     avatar: userAvatar,
    //     name: userName,
    //   } = currentUser;
    //   this.presentUser = {
    //     userName,
    //     userAccount,
    //     userAvatar,
    //   };
    // },
    addLike() {
      this.presentTweet = {
        ...this.presentTweet,
        isLiked: true,
        LikeCount: this.presentTweet.LikeCount + 1,
      };
    },
    deleteLike() {
      this.presentTweet = {
        ...this.presentTweet,
        isLiked: false,
        LikeCount: this.presentTweet.LikeCount - 1,
      };
    },
  },
  // created() {
  //   this.fetchUser();
  // },
};
</script>

<style scoped>
.image-cropper {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  padding: 0;
}
.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
.user-info-context {
  margin-top: 10px;
  margin-left: 10px;
}
.user-name {
  font-size: 15px;
  font-weight: 700;
}
.user-account {
  font-size: 15px;
  font-weight: 500;
}
.tweet-time {
  margin-bottom: 10px;
}
.tweet-container {
  margin: 1rem 10px 0 15px;
  border-bottom: 1px solid #e6ecf0;
}

.user-account {
  color: #657786;
}
.tweet-content {
  margin: 1.5rem 0;
  font-size: 23px;
  font-weight: 500;
}
.tweet-hour,
.tweet-date,
.dot {
  color: #657786;
  margin-right: 5px;
  font-weight: 500;
}
.dot {
  font-weight: 700;
}
.status-container {
  border-bottom: 1px solid #e6ecf0;
  line-height: 68px;
  margin: 0 10px 0 15px;
}
.reply-number,
.like-number,
.reply,
.like {
  font-size: 19px;
  font-weight: 500;
}
.reply,
.like {
  color: #657786;
  margin-left: 5px;
}
.reply {
  margin-right: 1.5rem;
}
.reation-container,
.reply-icon,
.like-icon {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e6ecf0;
}
.reply-img:hover,
.like-img:hover {
  cursor: pointer;
}
.reply-img,
.like-img {
  margin: 0 10px 0 15px;
  width: 25px;
  height: 25px;
}
.like-icon {
  margin-left: 150px;
}

.modal-content {
  border-radius: 1rem;
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem auto -1rem -1rem;
}

.m-reply-container {
  background-color: #fff;
}

.m-reply-post-info {
  margin: 15px 0 6px 0;
  width: 100%;
  font-size: 15px;
}

.m-reply-name,
.m-reply-account,
.m-reply-created-at {
  height: 22px;
  margin-bottom: 0;
}

.m-p {
  margin-bottom: 0;
}

.m-reply-account {
  margin-left: 5px;
  color: #657786;
}

.m-reply-created-at {
  color: #657786;
}

.m-reply-post-content {
  margin: 0px 15px auto 0;
  font-size: 15px;
}

.m-reply-to-container {
  margin-top: 1rem;
}

.m-reply-to {
  color: #657786;
  font-size: 13px;
  line-height: 13px;
}

.m-reply-to-account {
  color: #ff6600;
  font-size: 13px;
  line-height: 13px;
  margin-left: 2px;
}

.m-upper-area-content {
  padding-top: 15px;
  padding-left: 15px;
}

.m-image-cropper,
.m-reply-to-photo,
.m-reply-photo {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.m-reply-to-photo {
  margin: 18px 0 5px 15px;
}

.m-reply-line {
  margin: auto;
  background-color: #ccd6dd;
  width: 2px;
  height: 80px;
}

.m-reply-photo {
  margin: 10px 10px 182px 15px;
}

textarea {
  margin: 35px 0;
  width: 100%;
  border: none;
  resize: none;
  -moz-appearance: none;
}

textarea:focus {
  outline: 0;
}

.btn {
  width: 64px;
  height: 40px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 100px;
}

.btn-ctrl {
  border: 1px solid #000;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
</style>