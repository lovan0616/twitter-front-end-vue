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
        <NewTweet @after-post-submit="afterPostSubmit" />

        <!-- 插入Tweet -->
        <Spinner v-if="isLoading" />
        <div class="tweets-panel">
          <Tweet
            v-for="tweet in tweets"
            :key="tweet.id"
            :initial-tweet="tweet"
            :current-user="currentUser"
          />
        </div>
      </main>
    </div>

    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
const dummyUser = {
  user: {
    id: 11,
    email: "user1@example.com",
    password: "$2a$10$2tdllKdK2VPeGKsJeec2XObzIK3kA4lt5W8PVu/.OPWkRQjbCsiDq",
    name: "user1",
    avatar: "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    introduction: "Quia consequatur optio consequatur dolor commodi et.",
    account: "@user1",
    cover:
      "https://loremflickr.com/320/240/background/?random=34.0538352094005",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
  },
};

import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet";
import { mapState } from "vuex";
import TweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  name: "Main",
  components: {
    Navbar,
    FollowRecommend,
    NewTweet,
    Tweet,
    Spinner,
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  data() {
    return {
      tweets: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const { data } = await TweetsAPI.readAll();
        this.tweets = [...data];
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error:", error);
        Toast.fire({
          icon: "error",
          title: "暫時無法取得所有推文，請稍候再試！",
        });
      }
    },
    async afterPostSubmit(form) {
      try {
        const { data } = await TweetsAPI.post({ form });
        const { description } = data;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 注意：新推文的資料，未納入Likes和Replys的陣列
        this.tweets.unshift({
          id: dummyUser.currentUser.id,
          description,
          UserId: dummyUser.currentUser.id,
          createdAt: new Date(),
          isLiked: false,
          repliedCount: 0,
          LikeCount: 0,
        });
      } catch (error) {
        console.log("error:", error);
        Toast.fire({
          icon: "error",
          title: "暫時無法新增推文，請稍候再試！",
        });
      }
    },
  },
  created() {
    this.fetchData();
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

.make-reply:hover {
  cursor: pointer;
}
</style>