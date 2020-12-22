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
            <strong class="name">{{user.name}}</strong>
            <p class="tweets-count small">{{tweets.length}} 推文</p>
          </div>
        </div>
      </div>

      <main>
        <div class="info-area d-flex flex-column align-items-end pb-3">
          <div class="image-wrapper">
            <div class="cover-cropper">
              <img src="https://s.newtalk.tw/album/news/450/5f32170a510a4.jpg" class="cover" />
            </div>
            <div class="image-cropper">
              <img
                src="https://img.itw01.com/images/2018/10/29/21/2734_Zz1GKT_QRFHWEM.jpg!r800x0.jpg"
                class="avatar"
              />
            </div>
          </div>
          <div class="edit-btn mt-2 mr-2" v-if="user.isSelf">
            <strong>編輯個人資料</strong>
          </div>
          <div class="contact-wrapper d-flex align-items-center mt-2" v-else>
            <div class="mail">
              <img src="../assets/Mail.svg">
            </div>
            <div class="noti mx-2" v-if="!user.isNoticed" @click.stop.prevent="addNotice">
              <img src="../assets/Noti.svg">
            </div>
            <div class="noti-clicked mx-2" v-else @click.stop.prevent="deleteNotice">
              <img src="../assets/Noti-clicked.svg">
            </div>
            <div class="followship mr-3">
              <div class="following" v-if="user.isFollowed">正在跟隨</div>
               <div class="deleteFollow" v-if="user.isFollowed" @click.stop.prevent="deleteFollow">取消跟隨</div>

              <div class="unfollow" v-else @click.stop.prevent="follow">跟隨</div>
            </div>
          </div>
        </div>

        <div class="intro-wrapper px-2">
          <strong class="name">John Doe</strong>
          <p class="account">@heyjohn</p>
          <p
            class="description"
          >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>

        <div class="followship-wrapper p-2 d-flex">
          <router-link :to="{
            name: 'user-followlist',
            params: {id: user.id, followship: 'followings'}
          }">
            <p class="followings-count mr-2">34個跟隨中</p>
          </router-link >
          <router-link :to="{
            name: 'user-followlist',
            params: {id: user.id, followship: 'followers'}
          }">
            <p class="followers-count">59位跟隨者</p>
          </router-link>
        </div>

        <div class="tab-area">
          <ul class="nav nav-tabs pt-2">
          <li class="nav-item" @click.stop.prevent="toggleTab(null)">
            <router-link 
            :to="{
              name: 'user-profile',
              params: {id: user.id}
            }" 
            class="nav-link"
           >推文</router-link>
          </li>
          <li class="nav-item" @click.stop.prevent="toggleTab('with_replies')">
            <router-link 
            :to="{
              name: 'user-profile',
              params: {id: user.id, category: 'with_replies'}
            }"
            class="nav-link">推文與回覆</router-link>
          </li>
          <li class="nav-item" @click.stop.prevent="toggleTab('likes')">
            <router-link 
            :to="{
              name: 'user-profile',
              params: {id: user.id, category: 'likes'}
            }"
            class="nav-link">喜歡的內容</router-link>
          </li>
        </ul>
        </div>

        <div class="tweets-area">
          <div class="user-tweets-panel" v-if="!nowTabbed">
            <!-- 綁入UserTweets.vue -->
            <UserTweets v-for="tweet in tweets" :key="tweet.id" :initial-tweet="tweet" :user="user" />
          </div>

          <div class="user-tweets-replies-panel" v-if="nowTabbed === 'with_replies'">
            <!-- 綁入UserTweetsReplies.vue -->
            <UserTweetsReplies v-for="reply in replies" :key="reply.id" :initial-reply="reply" :user="user"/>
          </div>

          <div class="user-liked-tweets-panel" v-if="nowTabbed === 'likes'">
            <!-- 綁入UserLikedTweets.vue -->
            <UserLikedTweets v-for="like in likes" :key="like.id" :initial-like="like"/>
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
import UserTweets from "../components/UserTweets"
import UserLikedTweets from "../components/UserLikedTweets"
import UserTweetsReplies from "../components/UserTweetsReplies"

//Todo: 暫用假資料，需要發/api/users/:id/tweets 取得資料
const dummyTweets = {
  tweets: [
    {
            "id": 1,
            "UserId": 11,
            "description": "Sequi ipsa iste ipsam modi aut sit magni ratione. Quis facilis asperiores nostrum quia quia aliquam maxime. Maxime tempore voluptates sed exercitationem eos eveniet necessitatibus. Ea aperiam aspernatur neque earum. Asperiores qui fuga dolores dignissimos dolore dolore id et voluptates. Reprehenderit accusantium ut ex laboriosam provident facilis expedita.",
            "createdAt": "2020-12-16T07:38:05.000Z",
            "updatedAt": "2020-12-16T07:38:05.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "$2a$10$kj1Atngw9xyWvsjbaEFA5e/9MnexJxkL.KwMu3eeFiIZYQ9UksIPq",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=9.615596198051989",
                "introduction": "Possimus repellendus sit sunt.\nOfficia veritatis sed.\nCulpa atque explicabo sit alias consequuntur id.\nNihil dolorum tenetur vero.\nNam assumenda optio qui ullam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=89.75063535187728",
                "createdAt": "2020-12-16T07:38:04.000Z",
                "updatedAt": "2020-12-16T07:38:04.000Z"
            },
            "isLike": true,
            "repliesCount": 3,
            "likesCount": 1
        },
     {
            "id": 2,
            "UserId": 11,
            "description": "Sequi ipsa iste ipsam modi aut sit magni ratione. Quis facilis asperiores nostrum quia quia aliquam maxime. Maxime tempore voluptates sed exercitationem eos eveniet necessitatibus. Ea aperiam aspernatur neque earum. Asperiores qui fuga dolores dignissimos dolore dolore id et voluptates. Reprehenderit accusantium ut ex laboriosam provident facilis expedita.",
            "createdAt": "2020-12-16T07:38:05.000Z",
            "updatedAt": "2020-12-16T07:38:05.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "$2a$10$kj1Atngw9xyWvsjbaEFA5e/9MnexJxkL.KwMu3eeFiIZYQ9UksIPq",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=9.615596198051989",
                "introduction": "Possimus repellendus sit sunt.\nOfficia veritatis sed.\nCulpa atque explicabo sit alias consequuntur id.\nNihil dolorum tenetur vero.\nNam assumenda optio qui ullam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=89.75063535187728",
                "createdAt": "2020-12-16T07:38:04.000Z",
                "updatedAt": "2020-12-16T07:38:04.000Z"
            },
            "isLike": true,
            "repliesCount": 3,
            "likesCount": 1
        },
     {
            "id": 3,
            "UserId": 11,
            "description": "Sequi ipsa iste ipsam modi aut sit magni ratione. Quis facilis asperiores nostrum quia quia aliquam maxime. Maxime tempore voluptates sed exercitationem eos eveniet necessitatibus. Ea aperiam aspernatur neque earum. Asperiores qui fuga dolores dignissimos dolore dolore id et voluptates. Reprehenderit accusantium ut ex laboriosam provident facilis expedita.",
            "createdAt": "2020-12-16T07:38:05.000Z",
            "updatedAt": "2020-12-16T07:38:05.000Z",
            "User": {
                "id": 11,
                "email": "user1@example.com",
                "password": "$2a$10$kj1Atngw9xyWvsjbaEFA5e/9MnexJxkL.KwMu3eeFiIZYQ9UksIPq",
                "name": "user1",
                "avatar": "https://loremflickr.com/320/240/avatar/?random=9.615596198051989",
                "introduction": "Possimus repellendus sit sunt.\nOfficia veritatis sed.\nCulpa atque explicabo sit alias consequuntur id.\nNihil dolorum tenetur vero.\nNam assumenda optio qui ullam.",
                "isAdmin": false,
                "account": "@user1",
                "cover": "https://loremflickr.com/320/240/background/?random=89.75063535187728",
                "createdAt": "2020-12-16T07:38:04.000Z",
                "updatedAt": "2020-12-16T07:38:04.000Z"
            },
            "isLike": true,
            "repliesCount": 3,
            "likesCount": 1
        },

  ]
};

//Todo: 暫用假資料，需要發/api/users/:id/likes 取得資料
const dummyLikes = [
  {
    "id": 3,
    "UserId": 11,
    "TweetId": 41,
    "createdAt": "2020-12-16T08:28:16.000Z",
    "updatedAt": "2020-12-16T08:28:16.000Z",
    "Tweet": {
      "id": 41,
      "UserId": 11,
      "description": ";wdjowd wpsws wkodw0 numquam",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 11,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://loremflickr.com/320/240/avatar/?random=63.61217037673732"
      }
    },
  },
  {
    "id": 4,
    "UserId": 11,
    "TweetId": 21,
    "createdAt": "2020-12-16T08:28:16.000Z",
    "updatedAt": "2020-12-16T08:28:16.000Z",
    "Tweet": {
      "id": 21,
      "UserId": 11,
      "description": "a quibusdam numquam",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 8,
      "isLike": true,
      "User": {
        "id": 11,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://i.imgur.com/user1.jpg"
      }
    },
  },
   {
    "id": 7,
    "UserId": 11,
    "TweetId": 11,
    "createdAt": "2020-12-16T08:28:16.000Z",
    "updatedAt": "2020-12-16T08:28:16.000Z",
    "Tweet": {
      "id": 11,
      "UserId": 11,
      "description": "putin nicholse tropunit",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 2,
      "isLike": true,
      "User": {
        "id": 11,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://i.imgur.com/user1.jpg"
      }
    },
  },  
]

// Todo: 暫用dummyUser，需要發/api/users/:id 取得資料
const dummyUser = {
  user: {
    id: "1",
    account: "@user1",
    name: "user1",
    email: "user1@example.com",
    password: "12345678",
    isAdmin: "false",
    introduction: "My name is user1",
    avatar: "https://i.imgur.com/user1.jpg",
    cover: "https://i.imgur.com/user1_cover.jpg",
    isFollowed: false,
    isSelf: false,
    isNoticed: false   //此屬性需要和後端討論是否補上
  }
};

// Todo: 暫用dummyReplies，需要發api/users/:id/replied_tweets取得資料
const dummyReplies = [
  {
    "id": 101,
    "UserId": 11,
    "TweetId": 31,
    "comment": "sunt",
    "createdAt": "2020-12-16T08:28:17.000Z",
    "updatedAt": "2020-12-16T08:28:17.000Z",
    "Tweet": {
      "id": 31,
      "UserId": 11,
      "description": "Omnis et dolor in sint.",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 11,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://www.httone.com/resources/products/764/image0_m.jpg"
      }
    },
  },
  {
    "id": 100,
    "UserId": 11,
    "TweetId": 31,
    "comment": "yummy",
    "createdAt": "2020-12-16T08:28:17.000Z",
    "updatedAt": "2020-12-16T08:28:17.000Z",
    "Tweet": {
      "id": 31,
      "UserId": 11,
      "description": "Omnis et dolor in sint.",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 11,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://www.httone.com/resources/products/764/image0_m.jpg"
      },
      
    },
  },
  {
    "id": 99,
    "UserId": 11,
    "TweetId": 30,
    "comment": "kakakakaka",
    "createdAt": "2020-12-16T08:28:17.000Z",
    "updatedAt": "2020-12-16T08:28:17.000Z",
    "Tweet": {
      "id": 30,
      "UserId": 19,
      "description": "Omnis et dolor in sint.",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 19,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://www.httone.com/resources/products/764/image0_m.jpg"
      },
      
    },
  },
  {
    "id": 98,
    "UserId": 11,
    "TweetId": 30,
    "comment": "yummy",
    "createdAt": "2020-12-16T08:28:17.000Z",
    "updatedAt": "2020-12-16T08:28:17.000Z",
    "Tweet": {
      "id": 30,
      "UserId": 19,
      "description": "Omnis et dolor in sint.",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 19,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://www.httone.com/resources/products/764/image0_m.jpg"
      },
      
    },
  },
  {
    "id": 97,
    "UserId": 11,
    "TweetId": 28,
    "comment": "yummyyy",
    "createdAt": "2020-12-16T08:28:17.000Z",
    "updatedAt": "2020-12-16T08:28:17.000Z",
    "Tweet": {
      "id": 28,
      "UserId": 14,
      "description": "Omnis et dolor in sint.",
      "createdAt": "2020-12-16T08:28:17.000Z",
      "updatedAt": "2020-12-16T08:28:17.000Z",
      "repliesCount": 3,
      "likesCount": 1,
      "isLike": true,
      "User": {
        "id": 14,
        "account": "@user1",
        "name": "user1",
        "avatar": "https://www.httone.com/resources/products/764/image0_m.jpg"
      },
      
    },
  },
]

export default {
  name: "UserProfile",
  components: {
    Navbar,
    FollowRecommend,
    UserTweets,
    UserLikedTweets,
    UserTweetsReplies
  },
  data() {
    return {
      tweets: [],
      likes: [],
      replies: [],
      user: {},
      nowTabbed: this.$route.params.category
    }
  },
  methods: {
    fetchUserTweets() {
      this.tweets = [...dummyTweets.tweets]
    },

    fetchUserLikes() {
      this.likes = [...dummyLikes]
    },
    fetchUser() {
      this.user = dummyUser.user
    },
    fetchReplies() {
      //建構set()建構子實例，取出TweetId不重複的物件
      const set = new Set()
      this.replies = dummyReplies.filter(reply => !set.has(reply.TweetId) ? set.add(reply.TweetId) : false)
      console.log(this.replies)
    },
    toggleTab(item) {
      this.nowTabbed = item
    },
    addNotice() {
      this.user = {
        //Todo: 使用API，加入notcie
        ...this.user,
        isNoticed: true
      }
    },
    deleteNotice() {
      this.user = {
        //Todo: 使用API，刪去notcie
        ...this.user,
        isNoticed: false
      }
    },
    follow() {
      this.user = {
        //Todo: 使用API，加入follow
        ...this.user,
        isFollowed: true
      }
    },
    deleteFollow() {
      this.user = {
        //Todo: 使用API，刪去notcie
        ...this.user,
        isFollowed: false
      }
    }
  },
  created() {
    this.fetchUserTweets()
    this.fetchUserLikes()
    this.fetchUser()
    this.fetchReplies()
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
  line-height: 19px
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
}

.cover-cropper {
  width: 100%;
  height: 200px;
  position: relative;
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
  position: relative;
  overflow: hidden;
  border-radius: 50%;
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
}

.mail, .noti, .noti-clicked {
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
  background-color: #ff6600;;
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
  background-color: #c82456;;
  border-radius: 100px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}

.following:hover  {
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

.description {
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
</style>