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

        <!-- 插入Tweet -->
        <div class="tweets-panel">
          <Tweet v-for="tweet in tweets" :key="tweet.id" :initial-tweet="tweet" />
        </div>
        
        
      </main>
    </div>

    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
const dummyData = {
      "tweets": [
        {
            "id": 1,
            "UserId": 11,
            "description": "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
            "createdAt": "2020-12-16T06:02:25.000Z",
            "updatedAt": "2020-12-16T06:02:25.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "$2a$10$0/fxm5Jfb7h2Kdrd.Caoy.X4S.pB/9ifTDcty4WX2MP4mR1E/M2d2",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=32.221171031330776",
                "introduction": "Quam et veniam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=28.538747882574512",
                "createdAt": "2020-12-16T06:02:24.000Z",
                "updatedAt": "2020-12-16T06:02:24.000Z"
            },
            "Likes": [
                {
                    "id": 21,
                    "UserId": 11,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 31,
                    "UserId": 21,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "Replies": [
                {
                    "id": 1,
                    "UserId": 11,
                    "TweetId": 1,
                    "comment": "ut suscipit similique",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 11,
                    "UserId": 21,
                    "TweetId": 1,
                    "comment": "Sunt error facere eaque.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 21,
                    "UserId": 31,
                    "TweetId": 1,
                    "comment": "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "isLiked": false,
            "repliedCount": 3,
            "LikeCount": 2
        },
         {
            "id": 2,
            "UserId": 11,
            "description": "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
            "createdAt": "2020-12-16T06:02:25.000Z",
            "updatedAt": "2020-12-16T06:02:25.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "123445",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=32.221171031330776",
                "introduction": "Quam et veniam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=28.538747882574512",
                "createdAt": "2020-12-16T06:02:24.000Z",
                "updatedAt": "2020-12-16T06:02:24.000Z"
            },
            "Likes": [
                {
                    "id": 21,
                    "UserId": 11,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 31,
                    "UserId": 21,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "Replies": [
                {
                    "id": 1,
                    "UserId": 11,
                    "TweetId": 1,
                    "comment": "ut suscipit similique",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 11,
                    "UserId": 21,
                    "TweetId": 1,
                    "comment": "Sunt error facere eaque.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 21,
                    "UserId": 31,
                    "TweetId": 1,
                    "comment": "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "isLiked": true,
            "repliedCount": 3,
            "LikeCount": 2
        },
         {
            "id": 3,
            "UserId": 11,
            "description": "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
            "createdAt": "2020-12-16T06:02:25.000Z",
            "updatedAt": "2020-12-16T06:02:25.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "$2a$10$0/fxm5Jfb7h2Kdrd.Caoy.X4S.pB/9ifTDcty4WX2MP4mR1E/M2d2",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=32.221171031330776",
                "introduction": "Quam et veniam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=28.538747882574512",
                "createdAt": "2020-12-16T06:02:24.000Z",
                "updatedAt": "2020-12-16T06:02:24.000Z"
            },
            "Likes": [
                {
                    "id": 21,
                    "UserId": 11,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 31,
                    "UserId": 21,
                    "TweetId": 1,
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "Replies": [
                {
                    "id": 1,
                    "UserId": 11,
                    "TweetId": 1,
                    "comment": "ut suscipit similique",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 11,
                    "UserId": 21,
                    "TweetId": 1,
                    "comment": "Sunt error facere eaque.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                },
                {
                    "id": 21,
                    "UserId": 31,
                    "TweetId": 1,
                    "comment": "Non rem ipsa sint hic quis qui. Et in sunt et ipsa dicta dolorum. Illum molestiae dolorem. Tempore omnis numquam impedit enim ipsam totam dolores. Voluptas qui consectetur provident odit quas esse dolor.",
                    "createdAt": "2020-12-16T06:02:25.000Z",
                    "updatedAt": "2020-12-16T06:02:25.000Z"
                }
            ],
            "isLiked": false,
            "repliedCount": 3,
            "LikeCount": 2
        },
  ]
}

import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet"
export default {
  name: "Main",
  components: {
    Navbar,
    FollowRecommend,
    NewTweet,
    Tweet
  },
  data() {
    return {
      tweets: []
    }
  },
  methods: {
    fetchData() {
    this.tweets = [...dummyData.tweets]
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<style scoped>
.upper-area-content {
  padding-top: 15px;
  padding-left: 15px;
}

.tweets-panel {
  margin-top: 10px
}
</style>