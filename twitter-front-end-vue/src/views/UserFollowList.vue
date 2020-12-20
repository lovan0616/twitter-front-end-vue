<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>

    <div id="main-area" class="main-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content d-flex align-items-center">
          <router-link :to="{
            name: 'user-profile',
            params: {id: user.id}
          }">
            <span class="mr-4" style="color: #000000">&larr;</span>
          </router-link>
          
          <div class="user">
            <strong class="name">{{ user.name }}</strong>
            <p class="tweets-count small">{{ userTweetsCount }} 推文</p>
          </div>
        </div>
      </div>
      <main>
        <ul class="nav nav-tabs">
          <li class="nav-item" @click.stop.prevent="toggleTab('followers')">
            <router-link 
            :to="{
              name: 'user-followlist',
              params: {id: user.id, followship: 'followers' }
            }" 
            class="nav-link"
           >追隨者</router-link>
          </li>
          <li class="nav-item" @click.stop.prevent="toggleTab('followings')">
            <router-link 
            :to="{
              name: 'user-followlist',
              params: {id: user.id, followship: 'followings'}
            }"
            class="nav-link">正在追隨</router-link>
          </li>
        </ul>
        
        <div class="followers-panel" v-if="nowTabbed === 'followers'">
          <Follower 
            v-for="follower in followers" 
            :key="follower.id" 
            :initial-follower="follower"/>
        </div>
        <div class="followings-panel" v-if="nowTabbed === 'followings'">
          <Following
            v-for="following in followings" 
            :key="following.id" 
            :initial-following="following"/>
        </div>
      </main>
    </div>

    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
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
    cover: "https://i.imgur.com/user1_cover.jpg"
  }
};

// Todo：暫用dummyTweets，需要發/api/users/:id/tweets 取得資料
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
            "isLiked": true,
            "repliedCount": 3,
            "LikeCount": 1
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
            "isLiked": true,
            "repliedCount": 3,
            "LikeCount": 1
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
            "isLiked": true,
            "repliedCount": 3,
            "LikeCount": 1
        },

  ]
};

// Todo：暫用dummyFollowers，需要發/api/users/:id/followers 取得資料
const dummyFollowers = {
  followers: [
    {
      id: "1",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "3",
      followingId: "1",
      follower: {
        id: "3",
        account: "@follower3",
        name: "follower3",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is follower3. It's nice to meet you, how are u, I'm fine and you? This is an apple.",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
      isFollowed: true
    },
    {
      id: "2",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "2",
      followingId: "1",
      follower: {
        id: "2",
        account: "@follower2",
        name: "follower2",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is follower2",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
      isFollowed: true
    },
    {
      id: "3",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "7",
      followingId: "1",
      follower: {
        id: "7",
        account: "@follower7",
        name: "follower7",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is follower7",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
      isFollowed: true
    }
  ]
};

// Todo：暫用dummyFollowings，需要發/api/users/:id/followings 取得資料
const dummyFollowings = {
  followings: [
    {
      id: "1",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "2",
      following: {
        id: "2",
        account: "@following2",
        name: "following2",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is following2",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
    },
    {
      id: "2",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "8",
      following: {
        id: "8",
        account: "@following8",
        name: "following8",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is following8",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
    },
    {
      id: "3",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "7",
      following: {
        id: "7",
        account: "@following7",
        name: "following7",
        email: "user1@example.com",
        password: "12345678",
        isAdmin: "false",
        introduction: "My name is following7",
        avatar: "https://i.imgur.com/user1.jpg",
        cover: "https://i.imgur.com/user1_cover.jpg"
      },
    }
  ]
};

import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import Follower from "../components/Follower";
import Following from "../components/Following";

export default {
  components: {
    Navbar,
    FollowRecommend,
    Follower,
    Following
  },
  data() {
    return {
      followers: [],
      followings: [],
      user: {},
      userTweetsCount: -1,
      nowTabbed: this.$route.params.followship,
    };
  },
  methods: {
    fetchUser() {
      this.user = dummyUser.user;
    },
    fetchUserTweetsCount() {
      this.userTweetsCount = dummyTweets.tweets.length;
    },
    fetchFollowers() {
      this.followers = [...dummyFollowers.followers]
    },
    fetchFollowings() {
      this.followings = [...dummyFollowings.followings]
    },
    toggleTab(item) {
      this.nowTabbed = item
    }
  },
  created() {
    this.fetchUser()
    this.fetchUserTweetsCount()
    this.fetchFollowers()
    this.fetchFollowings()
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
  line-height: 19px;
  font-size: 19px;
}

.tweets-count {
  color: #657786;
}

.nav {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.nav-link.active {
  border: hidden;
  border-bottom: 2px solid #FF6600;
  color: #FF6600
}

.nav-link {
  color: #657786;
}
</style>