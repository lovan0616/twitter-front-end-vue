<template>
  <div class="container d-flex">
    <div id="navbar-area" class="navbar-area">
      <Navbar />
    </div>
    <div class="main">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content d-flex align-items-center">
          <span class="mr-4" style="color: #000000; cursor: pointer" @click="$router.back()">&larr;</span>
          <strong class="title">推文</strong>
        </div>
      </div>
      <div class="tweet-detail-container">
        <!-- 插入TweetDetail -->
        <TweetDetail :user="user" :tweet="tweet" @after-post-submit="afterPostSubmit" />
      </div>
      <div class="tweet-reply-container">
        <!-- 插入TweetReply -->
        <TweetReply v-for="reply in replies" :key="reply.id" :initial-reply="reply" :user="user" />
      </div>
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
    updatedAt: "2020-12-16T06:02:24.000Z"
  },
  isAuthenticated: true
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
        updatedAt: "2020-12-16T06:02:24.000Z"
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      isLiked: false,
      repliedCount: 3,
      LikeCount: 2
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
        updatedAt: "2020-12-16T06:02:24.000Z"
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      isLiked: true,
      repliedCount: 3,
      LikeCount: 2
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
        updatedAt: "2020-12-16T06:02:24.000Z"
      },
      Likes: [
        {
          id: 21,
          UserId: 11,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 31,
          UserId: 21,
          TweetId: 1,
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      Replies: [
        {
          id: 1,
          UserId: 11,
          TweetId: 1,
          comment: "ut suscipit similique",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 11,
          UserId: 21,
          TweetId: 1,
          comment: "Sunt error facere eaque.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        },
        {
          id: 21,
          UserId: 31,
          TweetId: 1,
          comment:
            "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
          createdAt: "2020-12-16T06:02:25.000Z",
          updatedAt: "2020-12-16T06:02:25.000Z"
        }
      ],
      isLiked: false,
      repliedCount: 3,
      LikeCount: 2
    }
  ]
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
      tweet: [],
      user: {},
      replies: []
    };
  },
  created() {
    const { id: tweetId } = this.$route.params;
    this.fetchTweet(tweetId);

    this.fetchUser();

    this.fetchReply();
  },
  methods: {
    // Todo: 待串接 API 資料 / async/await
    fetchTweet() {
      const { id: tweetId } = this.$route.params;
      this.tweet = dummyData.tweets[tweetId];
      console.log("fetch tweetId", tweetId);
    },
    fetchUser() {
      this.user = dummyUser;
    },
    fetchReply() {
      // 利用 $route.params 拉取id為N的tweet的replies
      const { id: tweetId } = this.$route.params;
      this.replies = dummyData.tweets[tweetId].Replies;
    },
    afterPostSubmit(payload) {
      const { tweetId } = this.$route.params;
      const { id, newReply } = payload;
      this.replies.push({
        id,
        TweetId: tweetId,
        UserId: dummyUser.currentUser.id,
        createdAt: new Date(),
        updateAt: new Date(),
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
  width: 600px;
  height: 1200px;
  border: 1px solid #e6ecf0;
}
</style>