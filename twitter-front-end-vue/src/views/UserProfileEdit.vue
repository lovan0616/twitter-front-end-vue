<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>
    <div id="main-area" class="main-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content d-flex">
          <span class="mr-5 pt-2">&larr;</span>
          <div class="user">
            <strong class="name">John Doe</strong>
            <p class="tweets-count small">25 推文</p>
          </div>
        </div>
      </div>
      <main>
        <div class="personal-profile-area">
          <div class="personal-pic">
            <div class="user-cover">
              <img
                :src="'www.image.com' | emptyImage"
                alt=""
                class="user-cover-pic"
              />
            </div>
            <div class="user-avatar">
              <img src="" alt="" class="user-avatar-pic" />
            </div>
          </div>
          <div class="personal-info-area">
            <div
              class="badge badge-pill badge-outline-primary"
              data-toggle="modal"
              data-target="#postEdit"
            >
              編輯個人資料
            </div>
            <div class="user-info">
              <div class="user-name">John Doe</div>
              <div class="user-account">@heyjohn</div>
              <div class="user-intro">
                Amet minim mollit non deseunt ullamco est sit aliqua dolor do
                amet sint.
              </div>
              <div class="follow-status d-flex">
                <div class="following-count">34個</div>
                <div class="following">跟隨中</div>
                <div class="follower-count">59位</div>
                <div class="follower">跟隨者</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!--Modal-->
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
          @submit.stop.prevent="handleSubmit"
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
                <strong class="title">編輯個人資料</strong>
                <button
                  type="submit"
                  class="btn btn-primary post"
                  :disabled="
                    this.name.length > 50 ||
                    this.personalIntro.length > 160 ||
                    !name ||
                    !personalIntro
                  "
                >
                  儲存
                </button>
              </div>
              <div class="modal-body">
                <div class="edit-pics">
                  <div class="edit-cover">
                    <img
                      :src="'www.google.com' | emptyImage"
                      alt=""
                      class="edit-cover-photo"
                    />
                  </div>
                  <div class="edit-avatar">
                    <img src="" alt="" class="edit-avatar-photo" />
                  </div>
                </div>
                <div class="edit-area">
                  <div class="edit-title">名稱</div>
                  <textarea
                    name="text-name"
                    class="text-name w-100"
                    id="text-name"
                    cols="20"
                    rows="1"
                    v-model="name"
                    ref="count"
                  >
                  </textarea>
                  <div class="name-edit-num-limit">
                    {{ this.name.length }}/50
                  </div>
                  <div class="edit-title">自我介紹</div>
                  <textarea
                    name="text-intro"
                    class="text-intro w-100"
                    id="text-intro"
                    cols="20"
                    rows="6"
                    v-model="personalIntro"
                  >
                  </textarea>
                  <div class="intro-edit-num-limit">
                    {{ this.personalIntro.length }}/160
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--插入FollowRecommend-->
    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import { emptyImageFilter } from "../utils/mixins";
import $ from "jquery";
import { Toast } from "../utils/helpers";

export default {
  name: "UserProfileEdit",
  components: {
    Navbar,
    FollowRecommend,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      name: "John Doe",
      personalIntro:
        "Amet minim mollit non deseunt ullamco est sit aliqua dolor do amet sint.",
    };
  },
  methods: {
    // modal表單資料交付
    handleSubmit() {
      Toast.fire({
        icon: "warning",
        title: "即將更改個人資料，確定更改？",
      });
      $("#postEdit").modal("hide");
      this.name = "";
    },
  },
  watch: {
    // 控制名字 & 自介字數上限
    // const limit = 50;
    // this.$refs.count.setAttribute("maxlength", limit);
    // this.name = limit - $refs.count.value.length;
    name: {
      handler: function (value) {
        if (value.length > 50) {
          Toast.fire({
            icon: "error",
            title: "名字字數不可超過上限，煩請重新編輯！",
          });
        }
      },
    },
    personalIntro: {
      handler: function (value) {
        if (value.length > 160) {
          Toast.fire({
            icon: "error",
            title: "自我介紹字數不可超過上限，煩請重新編輯！",
          });
        }
      },
    },
  },
};
</script>

<style scoped>
.personal-profile-area {
  position: relative;
}

.personal-info-area {
  position: relative;
  border: 1px solid transparent;
}

.badge {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 2rem;
  line-height: 2rem;
  padding: 0 5px;
}

.user-cover {
  width: 100%;
  height: 200px;
  background-color: #999999;
}

.user-avatar {
  width: 140px;
  height: 140px;
  position: absolute;
  background-color: #fff;
  overflow: hidden;
  border-radius: 50%;
  top: 130px;
  left: 1rem;
}

.user-avatar-pic {
  width: auto;
  display: inline;
  height: 100%;
}

.user-info {
  margin: 5rem 0 0 1rem;
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
  background-color: #999999;
}

.edit-avatar {
  width: 120px;
  height: 120px;
  position: absolute;
  background-color: #fff;
  overflow: hidden;
  border-radius: 50%;
  top: 20%;
  left: 2rem;
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
</style>