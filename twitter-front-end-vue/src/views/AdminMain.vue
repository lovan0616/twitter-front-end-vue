<template>
  <div class="d-flex">
    <div id="navbar-area">
      <AdminNav />
    </div>
    <div class="row" id="all-container" style="height: 100%">
      <h5 style="width: 100%">推文清單</h5>
      <AdminTweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :initial-tweet="tweet"
        @delete-tweet="deleteTweet"
      />
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminTweet from "../components/AdminTweet";
import AdminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminNav,
    AdminTweet,
  },
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    async fetchAdminTweets() {
      try {
        const { data } = await AdminAPI.getAdminTweets();
        this.tweets = [...data];
      } catch (error) {
        console.log("error:", error);
        Toast.fire({
          icon: "warning",
          title: "暫時無法取得推文，請稍候再試！",
        });
      }
    },
    async deleteTweet(tweetId) {
      try {
        // 把子層回傳id跟API串連
        const { data } = await AdminAPI.deleteTweet(tweetId);

        // 寫入資料狀態報錯的情境
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
      } catch (error) {
        console.log("error:", error);
        Toast.fire({
          icon: "error",
          title: "暫時無法刪除推文，請稍候再試！",
        });
      }
    },
  },
  created() {
    this.fetchAdminTweets();
  },
};
</script>

<style scoped>
h5 {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px 10px 30px;
  margin: 1rem 0 0 0;
}
</style>