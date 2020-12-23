<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>

    <div id="main-area" class="main-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content d-flex align-items-center">
          <router-link to="/main">
            <span class="mr-4" style="color: #000000">&larr;</span>
          </router-link>

          <div class="user">
            <strong class="name">{{ user.name }}</strong>
            <p class="tweets-count small">{{ user.tweetsCount }} 推文</p>
          </div>
        </div>
      </div>

      <main>
        <div class="info-area d-flex flex-column align-items-end pb-3">
          <div class="image-wrapper">
            <div class="cover-cropper">
              <img :src="user.cover" class="cover" />
            </div>
            <div class="image-cropper">
              <img :src="user.avatar" class="avatar" />
            </div>
          </div>
          <div
            class="edit-btn mt-2 mr-2"
            data-toggle="modal"
            data-target="#postEdit"
            v-if="user.isSelf"
          >
            <strong>編輯個人資料</strong>
          </div>
          <div class="contact-wrapper d-flex align-items-center mt-2" v-else>
            <div class="mail">
              <img src="../assets/Mail.svg" />
            </div>
            <div class="noti mx-2">
              <img src="../assets/Noti.svg" />
            </div>

            <div class="followship mr-3">
              <div class="following" v-if="user.isFollowed">正在跟隨</div>
              <div
                class="deleteFollow"
                v-if="user.isFollowed"
                @click.stop.prevent="deleteFollow"
              >取消跟隨</div>

              <div class="unfollow" v-else @click.stop.prevent="follow">跟隨</div>
            </div>
          </div>
        </div>

        <div class="intro-wrapper px-2">
          <strong class="name">{{user.name}}</strong>
          <p class="account">{{user.account}}</p>
          <p class="introduction">{{user.introduction}}</p>
        </div>

        <div class="followship-wrapper p-2 d-flex">
          <router-link
            :to="{
              name: 'user-followlist',
              params: { id: user.id, followship: 'followings' },
            }"
          >
            <p class="followings-count mr-2">{{user.followingsCount}}個跟隨中</p>
          </router-link>
          <router-link
            :to="{
              name: 'user-followlist',
              params: { id: user.id, followship: 'followers' },
            }"
          >
            <p class="followers-count">{{user.followersCount}}位跟隨者</p>
          </router-link>
        </div>
        <!--modal-->
        <div
          class="modal fade"
          id="postEdit"
          tabindex="-1"
          role="dialog"
          aria-labelledby="postEditLabel"
          aria-hidden="true"
        >
          <form
            class="w-100 d-flex flex-column align-items-end"
            @submit.stop.prevent="handleEditSubmit"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <img src="../assets/Close.svg" />
                  </button>
                  <strong class="title">編輯個人資料</strong>
                  <button
                    type="submit"
                    class="btn btn-primary post"
                    :disabled="
                      this.name.length > 50 ||
                      this.introduction.length > 160 ||
                      this.name.length === 0 ||
                      this.introduction.length === 0
                    "
                  >儲存</button>
                </div>
                <div class="modal-body px-0">
                  <div class="edit-cover">
                    <div class="cover-edit-wrapper d-flex">
                      <img :src="cover" alt="cover-thumbnail" class="cover-sample" v-if="cover" />
                      <img
                        src="https://loremflickr.com/320/240/background/?random=89.75063535187728"
                        alt="present-cover"
                        class="edit-cover-photo"
                        v-else
                      />
                      <input
                        type="file"
                        id="cover-image"
                        name="cover"
                        accept="image/png, image/jpeg, image/gif, image/jpg"
                        class="new-cover-image"
                        @change="handleCoverChange"
                      />
                      <img src="../assets/camera.svg" class="cover-camera" />
                      <img src="../assets/plus.svg" alt class="cover-plus" />
                      <div class="cancel-edit">
                        <!-- <a href=""> -->
                        <img
                          src="../assets/closeWhite.svg"
                          alt
                          class="cancal-edit"
                          @click="cancelEdit"
                        />
                        <!-- </a> -->
                      </div>
                    </div>
                    <div class="avatar-edit-wrapper">
                      <div class="edit-avatar">
                        <img
                          :src="avatar"
                          alt="avatar-thumbnail"
                          class="avartar-sample"
                          v-if="avatar"
                        />
                        <img
                          src="https://loremflickr.com/320/240/avatar/?random=9.615596198051989"
                          alt="present-avatar"
                          class="edit-avatar-photo"
                          v-else
                        />
                        <input
                          type="file"
                          id="avatar-image"
                          name="avatar"
                          accept="image/png, image/jpeg, image/gif, image/jpg"
                          class="new-avatar-image"
                          @change="handleAvatarChange"
                        />
                        <img src="../assets/camera.svg" class="avatar-camera" />
                        <img src="../assets/plus.svg" alt="avatar-plus" class="avatar-plus" />
                      </div>
                    </div>
                  </div>

                  <div class="edit-area">
                    <div class="edit-title">名稱</div>
                    <textarea
                      name="name"
                      class="text-name w-100"
                      id="text-name"
                      cols="20"
                      rows="1"
                      v-model="name"
                    ></textarea>
                    <div class="name-edit-num-limit">{{ this.name.length }}/50</div>
                    <div class="edit-title">自我介紹</div>
                    <textarea
                      name="introduction"
                      class="text-intro w-100"
                      id="text-intro"
                      cols="20"
                      rows="6"
                      v-model="introduction"
                    ></textarea>
                    <div class="intro-edit-num-limit">{{ this.introduction.length }}/160</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="tab-area">
          <ul class="nav nav-tabs pt-2">
            <li class="nav-item" @click.stop.prevent="toggleTab(null)">
              <router-link
                :to="{
                  name: 'user-profile',
                  params: { id: user.id },
                }"
                class="nav-link"
              >推文</router-link>
            </li>
            <li class="nav-item" @click.stop.prevent="toggleTab('with_replies')">
              <router-link
                :to="{
                  name: 'user-profile',
                  params: { id: user.id, category: 'with_replies' },
                }"
                class="nav-link"
              >推文與回覆</router-link>
            </li>
            <li class="nav-item" @click.stop.prevent="toggleTab('likes')">
              <router-link
                :to="{
                  name: 'user-profile',
                  params: { id: user.id, category: 'likes' },
                }"
                class="nav-link"
              >喜歡的內容</router-link>
            </li>
          </ul>
        </div>

        <div class="tweets-area">
          <div class="user-tweets-panel" v-if="!nowTabbed">
            <!-- 綁入UserTweets.vue -->
            <UserTweets
              v-for="tweet in tweets"
              :key="tweet.id"
              :initial-tweet="tweet"
              :user="user"
            />
            <!-- 無建立任何推文時，顯示註明文字 -->
            <div class="no-data" v-if="!tweets.length">
              <h3>尚未建立任何推文</h3>
            </div>
          </div>

          <div class="user-tweets-replies-panel" v-if="nowTabbed === 'with_replies'">
            <!-- 綁入UserTweetsReplies.vue -->
            <UserTweetsReplies
              v-for="reply in replies"
              :key="reply.id"
              :initial-reply="reply"
              :user="user"
            />
            <!-- 無建立任何推文時，顯示註明文字 -->
            <div class="no-data" v-if="!replies.length">
              <h3>尚未回覆任何推文</h3>
            </div>
          </div>

          <div class="user-liked-tweets-panel" v-if="nowTabbed === 'likes'">
            <!-- 綁入UserLikedTweets.vue -->
            <UserLikedTweets v-for="like in likes" :key="like.id" :initial-like="like" />
            <!-- 無建立任何推文時，顯示註明文字 -->
            <div class="no-data" v-if="!likes.length">
              <h3>尚未有喜愛的推文</h3>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import UserTweets from "../components/UserTweets";
import UserLikedTweets from "../components/UserLikedTweets";
import UserTweetsReplies from "../components/UserTweetsReplies";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "../apis/users";
import $ from "jquery";

export default {
  name: "UserProfile",
  components: {
    Navbar,
    FollowRecommend,
    UserTweets,
    UserLikedTweets,
    UserTweetsReplies
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      tweets: [],
      likes: [],
      replies: [],
      user: {},
      nowTabbed: this.$route.params.category,
      cover: "",
      avatar: "",
      name: "",
      introduction: ""
    };
  },
  methods: {
    async fetchUserTweets(id) {
      try {
        const response = await usersAPI.readTweets({ id });

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        this.tweets = [...data];
      } catch (error) {
        console.log(error);
        
        Toast.fire({
          icon: "error",
          title: "無法取得使用者推文，請稍後再試"
        });
      }
    },
    async fetchUserLikes(id) {
      console.log("step1");
      try {
        console.log("step1");

        const response = await usersAPI.readLikes({ id });
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        this.likes = [...data];
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者喜歡的內容，請稍後再試"
        });
      }
    },
    async fetchUser(id) {
      try {
        const response = await usersAPI.readUser({ id });

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        this.user = {
          ...this.user,
          ...data
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試"
        });
      }
      //補帶入userId
      // this.user = dummyUser.user;
    },
    async fetchReplies(id) {
      try {
        const response = await usersAPI.readRepliedTweets({ id });

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        //建構set()建構子實例，取出TweetId不重複的物件
        const set = new Set();
        this.replies = data.filter(reply =>
          !set.has(reply.TweetId) ? set.add(reply.TweetId) : false
        );
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者推文與回覆，請稍後再試"
        });
      }
    },
    toggleTab(item) {
      this.nowTabbed = item;
    },
    follow() {
      this.user = {
        //Todo: 使用API，加入follow
        ...this.user,
        isFollowed: true
      };
    },
    deleteFollow() {
      this.user = {
        //Todo: 使用API，刪去notcie
        ...this.user,
        isFollowed: false
      };
    },
    // modal表單資料交付
    handleEditSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      console.log(formData);
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
      // Toast.fire({
      //   icon: "warning",
      //   title: "即將更改個人資料，確定更改？",
      // });
      $("#postEdit").modal("hide");
      this.name = "";
    },
    handleCoverChange(e) {
      const { files } = e.target;
      if (files.length === 0) return; // 使用者並未上傳封面照
      const imageURL = window.URL.createObjectURL(files[0]);
      this.cover = imageURL;
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      if (files.length === 0) return; //使用者並未上傳大頭照
      const imageURL = window.URL.createObjectURL(files[0]);
      this.avatar = imageURL;
    },
    cancelEdit() {
      this.cover = "";
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserTweets(id);
    this.fetchUserLikes(id);
    this.fetchUser(id);
    this.fetchReplies(id);
  },
  beforeRouteUpdate() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  watch: {
    // 控制名字 & 自介字數上限
    // const limit = 50;
    // this.$refs.count.setAttribute("maxlength", limit);
    // this.name = limit - $refs.count.value.length;
    name: {
      handler: function(value) {
        if (value.length > 50) {
          Toast.fire({
            icon: "error",
            title: "名字字數不可超過上限，煩請重新編輯！"
          });
        }
      }
    },
    introduction: {
      handler: function(value) {
        if (value.length > 160) {
          Toast.fire({
            icon: "error",
            title: "自我介紹字數不可超過上限，煩請重新編輯！"
          });
        }
      }
    }
  }
};
</script>


<style scoped>
.upper-area-content {
  display: flex;
  align-items: top;
  padding-left: 15px;
}

.upper-area-content p {
  margin: 0;
  line-height: 10px;
}

.name {
  line-height: 19px;
}

.tweets-count {
  color: #657786;
}

.info-area {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.image-wrapper {
  position: relative;
  width: 100%;
}

.cover-cropper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.cover {
  width: 100%;
  display: inline;
  object-fit: cover;
}

.image-cropper {
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  border: 4px solid #ffffff;
  position: absolute;
  top: 60%;
  left: 14px;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}

.edit-btn {
  width: 122px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid #ff6600;
  text-align: center;
  line-height: 40px;
  color: #ff6600;
  cursor: pointer;
}

.mail,
.noti,
.noti-clicked {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ff6600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.noti-clicked {
  background-color: #ff6600;
}

.following {
  width: 92px;
  height: 40px;
  line-height: 40px;
  background-color: #ff6600;
  border-radius: 100px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}

.deleteFollow {
  display: none;
  width: 92px;
  height: 40px;
  line-height: 40px;
  background-color: #c82456;
  border-radius: 100px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}

.following:hover {
  display: none;
}

.following:hover ~ .deleteFollow {
  display: block;
}

.unfollow {
  width: 62px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 100px;
  font-size: 15px;
  color: #ff6600;
  border: 1px solid #ff6600;
  cursor: pointer;
}

.unfollow:hover {
  background-color: #ffede0;
}

.intro-wrapper {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.name {
  font-size: 19px;
}

.account {
  color: #657786;
  line-height: 10px;
  font-size: 15px;
}

.introduction {
  font-size: 14px;
  margin-bottom: 0;
}

.followship-wrapper {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.followers-count,
.followings-count {
  margin-bottom: 0;
  font-size: 14px;
  color: #657786;
}

.tab-area {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.nav-link.active {
  border: hidden;
  border-bottom: 2px solid #ff6600;
  color: #ff6600;
}

.nav-link {
  color: #657786;
}

.modal-content {
  border-radius: 1rem;
  width: 500px;
}

.close {
  height: 48px;
  margin: -1rem -1rem -1rem -1rem;
}

.m-reply-container {
  background-color: #fff;
}

.title {
  margin: auto 66% auto 0;
}

.edit-cover {
  width: 100%;
  height: 200px;
  opacity: 60%;
  background-color: #999999;
  position: relative;
}

.edit-cover-photo {
  width: 100%;
  display: inline;
  object-fit: cover;
}

.cover-sample {
  width: 100%;
  display: inline;
  object-fit: cover;
}

.new-cover-image {
  border: 1px solid #000;
  position: absolute;
  width: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-200%, -50%);
  z-index: 10;
  opacity: 0;
}

.cover-camera {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-200%, -50%);
  cursor: pointer;
}

.cover-plus {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-350%, -40%);
  cursor: pointer;
}

.avatar-edit-wrapper {
  position: relative;
}

.edit-avatar-photo {
  width: auto;
  display: inline;
  height: 100%;
  opacity: 60%;
  object-fit: cover;
}

.avartar-sample {
  width: auto;
  display: inline;
  height: 100%;
  opacity: 60%;
  object-fit: cover;
}

.cover-edit-wrapper {
  height: 100%;
  width: 100%;
}

.cancel-edit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(40%, -50%);
  z-index: 20;
  cursor: pointer;
}

.avatar-camera {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.avatar-plus {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  cursor: pointer;
}

.edit-avatar {
  border: 4px solid #fff;
  width: 120px;
  height: 120px;
  position: absolute;
  background-color: #fff;
  overflow: hidden;
  border-radius: 50%;
  top: -5rem;
  left: 0.8rem;
}

.new-avatar-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 999;
}

.edit-area {
  margin: 1rem;
}

textarea {
  width: 100%;
  border: none;
  resize: none;
  -moz-appearance: none;
  padding-left: 8px;
}

textarea:focus {
  outline: 0;
}

.edit-title {
  background-color: #f5f8fa;
  color: #657786;
  margin: 60px 0 0 0;
  font-size: 15px;
  font-weight: 500;
  padding: 1px 0 0 8px;
}

.text-name,
.text-intro {
  background-color: #f5f8fa;
  border-radius: 0 0 4px 4px;
  border-bottom: 1px solid #657786;
}

.name-edit-num-limit,
.intro-edit-num-limit {
  font-size: 1rem;
  font-weight: 500;
  color: #657786;
  margin-left: 90%;
}

.btn {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  border-radius: 100px;
  width: 4rem;
}

.no-data {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#657786;
  
}
</style>