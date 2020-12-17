<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>

    <div id="main-area" class="main-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content">
          <strong class="mr-5">首頁</strong>
        </div>
      </div>
      <main>
        <!-- 插入NewTweet -->
        <NewTweet />

        <!-- <div class="followers-panel">
          <div class="follower" v-for="follower in followers" :key="follower.id">
            <div class="info d-flex">
              <div class="image-cropper">
                <img :src="follower.image" class="avatar" />
              </div>
              <div class="info-text d-flex flex-column">
                <strong class="name">{{ follower.name }}</strong>
                <p class="account">{{ follower.account }}</p>
                <p class="introduction">{{ follower.introduction }}</p>
              </div>
            </div>
            <div class="follow-badge">
              <div class="badge badge-pill badge-primary" v-if="follower.isFollowed">正在跟隨</div>
              <div class="badge badge-pill badge-outline-primary" v-else>跟隨</div>
            </div>
          </div>
        </div>-->
        <div class="tweets-panel">
          <div class="tweet d-flex p-2">
            <div class="image-area mr-3">
              <a>
                <div class="image-cropper">
                  <img
                    src="https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg"
                    class="avatar"
                  />
                </div>
              </a>
            </div>
            <div class="content-area">
              <div class="post-info d-flex">
                <strong class="name">蠟筆小新</strong>
                <p class="account">Canyon</p>
                <p class="created-at">・3小時</p>
              </div>
              <div class="post-content">
                <p>
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
              </div>
              <div class="post-engage d-flex">
                <div class="reply-control d-flex mr-3">
                  <img
                    src="../assets/Reply.svg"
                    class="make-reply"
                    @click="fetchReply"
                  />
                  <p class="reply-counts">13</p>
                </div>

                <div class="like-control d-flex">
                  <img src="../assets/Like.svg" />
                  <p class="like-counts">23</p>
                </div>
              </div>
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
import NewTweet from "../components/NewTweet";
export default {
  name: "Main",
  components: {
    Navbar,
    FollowRecommend,
    NewTweet,
  },
  methods: {
    fetchReply() {
      //待串 API 資料
      this.$router.push(`/tweet/:id/reply-list`);
    },
  },
};
</script>

<style scoped>
.upper-area-content {
  padding-top: 15px;
  padding-left: 15px;
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

.tweets-panel {
  border: 1px solid red;
  margin-top: 10px;
}

.make-reply:hover {
  cursor: pointer;
}
</style>