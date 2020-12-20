<template>
  <div class="container d-flex">
    <div id="navbar-area" class="navbar-area">
      <Navbar />
    </div>
    <div class="main">
      <div class="main-title d-flex">
        <router-link to="/" class="arrow"></router-link>
        <div class="title">推文</div>
      </div>
      <div class="tweet-detail-container">
        <!-- 插入TweetDetail -->
        <TweetDetail
          :user="user"
          :initial-tweet="tweet"
          @after-post-submit="afterPostSubmit"
        />
      </div>
      <div class="tweet-reply-container">
        <!-- 插入TweetReply -->
        <TweetReply
          v-for="reply in replies"
          :key="reply.id"
          :initial-reply="reply"
          :user="user"
          :tweet="tweet"
        />
    </div>
    <div id="follow-recommend-area" class="follow-recommend-area">
      <!-- 插入FollowRecommend -->
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import TweetReply from "../components/TweetReply";
import TweetDetail from "../components/TweetDetail";

// GET /api/users/:id
const dummyUser = {
  currentUser: {
    id: 15,
    email: "user1@example.com",
    password: "123445",
    name: "user666",
    avatar: "https://i.imgur.com/NZWqfN3.jpg",
    introduction: "Quam et veniam.",
    isAdmin: false,
    account: "@user666",
    cover:
      "https://www.myvideo.net.tw/blog/assets/2020/06-30/blog0162964980.jpg",
    createdAt: "2020-12-16T06:02:24.000Z",
    updatedAt: "2020-12-16T06:02:24.000Z"
  },
  isAuthenticated: true
};

// POST /api/tweets/:id
const dummyTweet = {
  id: 1,
  UserId: 11,
  description:
    "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
  createdAt: "2020-12-16T06:02:25.000Z",
  updatedAt: "2020-12-16T06:02:25.000Z",
  User: {
    id: 11,
    account: "@user1",
    name: "user1",
    avatar:
      "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
  },
  isLiked: false,
  repliedCount: 3,
  LikeCount: 2,
};

// GET /api/tweets/:id/replies
const dummyReply = {
  status: "success",
  message: "OK",
  replies: [
    {
      id: 31,
      UserId: 41,
      TweetId: 1,
      comment:
        "Sed voluptas dignissimos vitae quod sed possimus necessitatibus incidunt quis. Velit optio fugiat. Quo dolore ut error nisi dolorem beatae qui fugit. Similique assumenda tenetur nemo illum eligendi adipisci. Blanditiis voluptatem porro beatae.",
      createdAt: "2020-12-16T07:38:05.000Z",
      updatedAt: "2020-12-16T07:38:05.000Z",
      User: {
        id: 41,
        email: "user4@example.com",
        password:
          "$2a$10$J/h9rW.IX.OrE2xVNhcrBue/4VWKXOMW.bs1.UPqRoKuBHVzQRyFe",
        name: "user4",
        avatar:
          "https://loremflickr.com/320/240/avatar/?random=44.52934043122782",
        introduction: "Illo laborum nesciunt dolor nihil.",
        isAdmin: false,
        account: "@user4",
        cover:
          "https://loremflickr.com/320/240/background/?random=83.0081940325029",
        createdAt: "2020-12-16T07:38:05.000Z",
        updatedAt: "2020-12-16T07:38:05.000Z",
      },
    },
    {
      id: 11,
      UserId: 41,
      TweetId: 1,
      comment:
        "Sed voluptas dignissimos vitae quod sed possimus necessitatibus incidunt quis. Velit optio fugiat. Quo dolore ut error nisi dolorem beatae qui fugit. Similique assumenda tenetur nemo illum eligendi adipisci. Blanditiis voluptatem porro beatae.",
      createdAt: "2020-12-16T07:38:05.000Z",
      updatedAt: "2020-12-16T07:38:05.000Z",
      User: {
        id: 42,
        email: "user5@example.com",
        password:
          "$2a$10$J/h9rW.IX.OrE2xVNhcrBue/4VWKXOMW.bs1.UPqRoKuBHVzQRyFe",
        name: "user5",
        avatar:
          "https://loremflickr.com/320/240/avatar/?random=44.52934043122782",
        introduction: "Illo laborum nesciunt dolor nihil.",
        isAdmin: false,
        account: "@user5",
        cover:
          "https://loremflickr.com/320/240/background/?random=83.0081940325029",
        createdAt: "2020-12-16T07:38:05.000Z",
        updatedAt: "2020-12-16T07:38:05.000Z",
      },
    },
    {
      id: 21,
      UserId: 41,
      TweetId: 1,
      comment:
        "Sed voluptas dignissimos vitae quod sed possimus necessitatibus incidunt quis. Velit optio fugiat. Quo dolore ut error nisi dolorem beatae qui fugit. Similique assumenda tenetur nemo illum eligendi adipisci. Blanditiis voluptatem porro beatae.",
      createdAt: "2020-12-16T07:38:05.000Z",
      updatedAt: "2020-12-16T07:38:05.000Z",
      User: {
        id: 43,
        email: "user6@example.com",
        password:
          "$2a$10$J/h9rW.IX.OrE2xVNhcrBue/4VWKXOMW.bs1.UPqRoKuBHVzQRyFe",
        name: "user6",
        avatar:
          "https://loremflickr.com/320/240/avatar/?random=44.52934043122782",
        introduction: "Illo laborum nesciunt dolor nihil.",
        isAdmin: false,
        account: "@user6",
        cover:
          "https://loremflickr.com/320/240/background/?random=83.0081940325029",
        createdAt: "2020-12-16T07:38:05.000Z",
        updatedAt: "2020-12-16T07:38:05.000Z",
      },
    },
  ],
};

export default {
  name: "MainTweetsReplyList",
  components: {
    Navbar,
    FollowRecommend,
    TweetReply,
    TweetDetail
  },
  data() {
    return {
      user: {},
      tweet: {
        id: -1,
        UserId: -1,
        description: "",
        createdAt: "",
        User: "",
        isLiked: false,
        repliedCount: 0,
        LikeCount: 0,
      },
      replies: [],
    };
  },
  created() {
    const { id: tweetId } = this.$route.params;
    this.fetchTweet(tweetId);

    this.fetchReply();

    this.fetchUser();
  },
  methods: {
    // Todo: 待串接 API 資料 / async/await
    fetchTweet(tweetId) {
      console.log("fetchTweet id:", tweetId);
      const {
        id,
        UserId,
        description,
        createdAt,
        updatedAt,
        User,
        isLiked,
        repliedCount,
        LikeCount,
      } = dummyTweet;
      this.tweet = {
        id,
        UserId,
        description,
        createdAt,
        updatedAt,
        User,
        isLiked,
        repliedCount,
        LikeCount,
      };
    },
    fetchReply() {
      // 拉取 API 的推文回覆資料
      this.replies = dummyReply.replies;
    },
    fetchUser() {
      // 拉取 API 的目前用戶資料
      this.user = dummyUser.currentUser;
    },
    afterPostSubmit(payload) {
      const { id: tweetId } = this.$route.params;
      const { id, newReply } = payload;
      this.replies.push({
        id,
        TweetId: tweetId,
        UserId: dummyUser.currentUser.id,
        createdAt: new Date(),
        updateAt: new Date(),
        comment: newReply,
        User: {
          account: dummyUser.currentUser.account,
          avatar: dummyUser.currentUser.avatar,
          name: dummyUser.currentUser.name,
        },
        comment: newReply
      });
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

.main {
  padding: 0;
  width: 500px;
  height: 10000px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.tweet-reply-container {
  height: 100%;
}

.main-title {
  border-bottom: 1px solid #e6ecf0;
  height: 55px;
}

.arrow {
  background-image: url("https://i.imgur.com/MHQuvWA.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto 43px auto 1.3rem;
  width: 17px;
  height: 14px;
}

.title {
  padding: 0 10px 10px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 55px;
}
</style>