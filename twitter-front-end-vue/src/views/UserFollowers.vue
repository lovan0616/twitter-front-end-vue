<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>

    <div id="main-area" class="main-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content">
          <span class="mr-5 pt-2">&larr;</span>
          <div class="user">
            <strong class="name">{{ user.name }}</strong>
            <p class="tweets-count small">{{ user.tweetsCount }} 推文</p>
          </div>
        </div>
      </div>
      <main>
        <ul class="nav nav-tabs mt-4">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{
              name: 'user-followers',
              params: {id: 1}
            }"
            >跟隨者</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{
              name: 'user-followings',
              params: {id: 1}
            }"
            >正在跟隨</router-link>
          </li>
        </ul>
        <div class="followers-panel">
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
        </div>
      </main>
    </div>

    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
// Todo: 暫用dummyUser，需改回真實資料
const dummyData = {
  followers: [
    {
      id: "1",
      name: "蠟筆小新",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      account: "canyon",
      introduction:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "7",
      isFollowed: true
    },
    {
      id: "2",
      name: "蠟筆小新",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      account: "canyon",
      introduction:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "7",
      isFollowed: false
    },
    {
      id: "3",
      name: "蠟筆小新",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      account: "canyon",
      introduction:
        "你回來了！是我回來了才對！美冴大屁股！爸爸的襪子好臭！最喜歡去正男家吃水果！風間最喜歡的偶像是P醬～",
      ceatedAt: "Wed Dec 09 2020 14:34:22 GMT+0800 (Taipei Standard Time)",
      followerId: "1",
      followingId: "7",
      isFollowed: false
    }
  ]
};

// Todo: 到時候拿掉，會by路由params，用API拉取user資料
const dummyUser = {
  user: {
    id: 1,
    account: "@root",
    name: "root",
    tweetsCount: "29"
  }
};
import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";

export default {
  components: {
    Navbar,
    FollowRecommend
  },
  data() {
    return {
      followers: [],
      user: {
        id: -1,
        account: "",
        name: "",
        tweetsCount: ""
      }
    };
  },
  methods: {
    fetchData() {
      this.followers = [...dummyData.followers];
    },
    fetchUser() {
      //Todo: 透過路由params，拉取user資料
      const { user } = dummyUser;
      this.user = {
        ...this.user,
        ...user
      };
    }
  },
  created() {
    this.fetchData();
    this.fetchUser();
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

.follower {
  width: 100%;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
  padding: 12px 15px 10px 15px;
}

info {
  width: 100%;
}

.follow-badge {
  position: absolute;
  top: 12px;
  right: 15px;
}

.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
}

.info-text {
  width: calc(100% - 50px);
}

.info-text p {
  margin-bottom: 0;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
</style>