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

// GET /api/admin/tweets
// DELETE /api/admin/tweets/:id

const dummyTweets = [
  {
    id: 5,
    UserId: 11,
    description: "Molestias.",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    User: {
      id: 11,
      account: "@user1",
      name: "user1",
      avatar:
        "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    },
  },
  {
    id: 2,
    UserId: 11,
    description:
      "Molestias dolor voluptatibus eveniet et cupiditate ipsum aperiam eius necessitatibus. Facilis voluptas exercitationem ut consequatur maxime eligendi optio. Provident reiciendis labore voluptates mollitia quasi harum sed rerum debitis. Et voluptas aut placeat. Id cum animi soluta consequuntur odit est porro.",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    User: {
      id: 11,
      account: "@user1",
      name: "user1",
      avatar:
        "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    },
  },
  {
    id: 1,
    UserId: 11,
    description:
      "Molestias dolor voluptatibus eveniet et cupiditate ipsum aperiam eius necessitatibus. Facilis voluptas exercitationem ut consequatur maxime eligendi optio. Provident reiciendis labore voluptates mollitia quasi harum sed rerum debitis. Et voluptas aut placeat. Id cum animi soluta consequuntur odit est porro.",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    User: {
      id: 11,
      account: "@user1",
      name: "user1",
      avatar:
        "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    },
  },
  {
    id: 3,
    UserId: 11,
    description:
      "Molestias dolor voluptatibus eveniet et cupiditate ipsum aperiam eius necessitatibus. Facilis voluptas exercitationem ut consequatur maxime eligendi optio. Provident reiciendis labore voluptates mollitia quasi harum sed rerum debitis. Et voluptas aut placeat. Id cum animi soluta consequuntur odit est porro.",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    User: {
      id: 11,
      account: "@user1",
      name: "user1",
      avatar:
        "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    },
  },
  {
    id: 4,
    UserId: 11,
    description:
      "Molestias dolor voluptatibus eveniet et cupiditate ipsum aperiam eius necessitatibus. Facilis voluptas exercitationem ut consequatur maxime eligendi optio. Provident reiciendis labore voluptates mollitia quasi harum sed rerum debitis. Et voluptas aut placeat. Id cum animi soluta consequuntur odit est porro.",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    User: {
      id: 11,
      account: "@user1",
      name: "user1",
      avatar:
        "https://loremflickr.com/320/240/avatar/?random=60.45057970816829",
    },
  },
];

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
    // GET /api/admin/tweets
    fetchAdminTweets() {
      this.tweets = [...dummyTweets];
    },
    deleteTweet(tweetId) {
      // 把子層回傳id 解構賦值取出
      const { id } = tweetId;
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
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