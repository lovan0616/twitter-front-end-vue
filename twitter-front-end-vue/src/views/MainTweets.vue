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
        <div class="tweets-panel">
          <Tweet
            v-for="tweet in tweets"
            :key="tweet.id"
            :initial-tweet="tweet"
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
  currentUser: {
    id: 11,
    email: "user1@example.com",
    password: "123445",
    name: "user1",
    avatar:
      "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
    introduction: "Quam et veniam.",
    isAdmin: false,
    account: "@user1",
    cover:
      "https://www.myvideo.net.tw/blog/assets/2020/06-30/blog0162964980.jpg",
    createdAt: "2020-12-16T06:02:24.000Z",
    updatedAt: "2020-12-16T06:02:24.000Z",
  },
  isAuthenticated: true,
};

const dummyData = {
  tweets: [
    {
      id: 1,
      UserId: 11,
      description:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      createdAt: "2020-12-16T06:02:25.000Z",
      updatedAt: "2020-12-16T06:02:25.000Z",
      User: {
        id: 11,
        email: "user1@example.com",
        password:
          "$2a$10$0/fxm5Jfb7h2Kdrd.Caoy.X4S.pB/9ifTDcty4WX2MP4mR1E/M2d2",
        name: "user1",
        avatar:
          "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
        introduction: "Quam et veniam.",
        isAdmin: false,
        account: "@user1",
        cover:
          "https://www.myvideo.net.tw/blog/assets/2020/06-30/blog0162964980.jpg",
        createdAt: "2020-12-16T06:02:24.000Z",
        updatedAt: "2020-12-16T06:02:24.000Z",
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      isLiked: false,
      repliedCount: 3,
      LikeCount: 2,
    },
    {
      id: 2,
      UserId: 11,
      description:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      createdAt: "2020-12-16T06:02:25.000Z",
      updatedAt: "2020-12-16T06:02:25.000Z",
      User: {
        id: 11,
        email: "user1@example.com",
        password: "123445",
        name: "user1",
        avatar:
          "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
        introduction: "Quam et veniam.",
        isAdmin: false,
        account: "@user1",
        cover:
          "https://www.myvideo.net.tw/blog/assets/2020/06-30/blog0162964980.jpg",
        createdAt: "2020-12-16T06:02:24.000Z",
        updatedAt: "2020-12-16T06:02:24.000Z",
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      isLiked: true,
      repliedCount: 3,
      LikeCount: 2,
    },
    {
      id: 3,
      UserId: 11,
      description:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      createdAt: "2020-12-16T06:02:25.000Z",
      updatedAt: "2020-12-16T06:02:25.000Z",
      User: {
        id: 11,
        email: "user1@example.com",
        password:
          "$2a$10$0/fxm5Jfb7h2Kdrd.Caoy.X4S.pB/9ifTDcty4WX2MP4mR1E/M2d2",
        name: "user1",
        avatar:
          "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
        introduction: "Quam et veniam.",
        isAdmin: false,
        account: "@user1",
        cover:
          "ttps://www.myvideo.net.tw/blog/assets/2020/06-30/blog0162964980.jpg",
        createdAt: "2020-12-16T06:02:24.000Z",
        updatedAt: "2020-12-16T06:02:24.000Z",
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z",
        },
      ],
      isLiked: false,
      repliedCount: 3,
      LikeCount: 2,
    },
  ],
};

import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet";
export default {
  name: "Main",
  components: {
    Navbar,
    FollowRecommend,
    NewTweet,
    Tweet,
  },
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    fetchReply() {
      //待串 API 資料
      this.$router.push(`/tweet/:id/reply-list`);
    },
    fetchData() {
      this.tweets = [...dummyData.tweets];
    },
    afterPostSubmit(payload) {
      const { id, description } = payload;
      // 注意：新推文的資料，未納入Likes和Replys的陣列
      this.tweets.push({
        id,
        description,
        UserId: dummyUser.currentUser.id,
        createdAt: new Date(),
        User: dummyUser.currentUser,
        isLiked: false,
        repliedCount: 0,
        LikeCount: 0,
      });

      console.log(this.tweets);
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

.tweets-panel {
  border: 1px solid red;
  margin-top: 10px;
}

.make-reply:hover {
  cursor: pointer;
}
</style>