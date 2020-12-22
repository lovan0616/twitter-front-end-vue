<template>
  <div class="usercontainer">
    <div class="usercard">
      <div class="row row-cols-1 row-cols-md-4 mx-1">
        <div class="col" style="max-width: 20rem">
          <div class="card">
            <img
              :src="user.cover | emptyImage"
              class="card-img-top"
              alt="user-cover"
            />
            <img :src="user.avatar" class="user-photo" />
            <div class="card-body">
              <h6 class="user-name">{{ user.name }}</h6>
              <h6 class="user-account">{{ user.account }}</h6>
              <div class="user-status d-flex">
                <img
                  src="http://i.imgur.com/kbKBExh.png"
                  alt=""
                  class="user-chat"
                />
                <p class="chat-number">{{ user.tweetsCount }}</p>
                <img
                  src="http://i.imgur.com/0euPu42.png"
                  alt=""
                  class="user-like"
                />
                <p class="like-number">{{ user.likesCount }}</p>
              </div>
              <div class="userfollowstatus d-flex">
                <p class="user-following">{{ user.followingsCount }}個</p>
                <p>跟隨中</p>
                <p class="user-follower">{{ user.followersCount }}位</p>
                <p>跟隨者</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" style="max-width: 20rem">
          <div class="card">
            <img
              :src="user.cover | emptyImage"
              class="card-img-top"
              alt="user-cover"
            />
            <img :src="user.avatar" class="user-photo" />
            <div class="card-body">
              <h6 class="user-name">{{ user.name }}</h6>
              <h6 class="user-account">{{ user.account }}</h6>
              <div class="user-status d-flex">
                <img
                  src="http://i.imgur.com/kbKBExh.png"
                  alt=""
                  class="user-chat"
                />
                <p class="chat-number">{{ user.tweetsCount }}</p>
                <img
                  src="http://i.imgur.com/0euPu42.png"
                  alt=""
                  class="user-like"
                />
                <p class="like-number">{{ user.likesCount }}</p>
              </div>
              <div class="userfollowstatus d-flex">
                <p class="user-following">{{ user.followingsCount }}個</p>
                <p>跟隨中</p>
                <p class="user-follower">{{ user.followersCount }}位</p>
                <p>跟隨者</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" style="max-width: 20rem">
          <div class="card">
            <img
              :src="user.cover | emptyImage"
              class="card-img-top"
              alt="user-cover"
            />
            <img :src="user.avatar" class="user-photo" />
            <div class="card-body">
              <h6 class="user-name">{{ user.name }}</h6>
              <h6 class="user-account">{{ user.account }}</h6>
              <div class="user-status d-flex">
                <img
                  src="http://i.imgur.com/kbKBExh.png"
                  alt=""
                  class="user-chat"
                />
                <p class="chat-number">{{ user.tweetsCount }}</p>
                <img
                  src="http://i.imgur.com/0euPu42.png"
                  alt=""
                  class="user-like"
                />
                <p class="like-number">{{ user.likesCount }}</p>
              </div>
              <div class="userfollowstatus d-flex">
                <p class="user-following">{{ user.followingsCount }}個</p>
                <p>跟隨中</p>
                <p class="user-follower">{{ user.followersCount }}位</p>
                <p>跟隨者</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";

export default {
  name: "AdminUserCard",
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    fetchUser() {
      this.user = this.initialUser;
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
h5 {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px 10px 30px;
}
.usercontainer,
.usercard,
.row {
  width: 100%;
  padding: 0;
  margin: 0;
}

.row-cols-md-4 {
  width: 100%;
  margin-right: 0;
}

.card {
  height: 350px;
  min-width: 200px;
  background-color: #f6f7f8;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
}

.card-body {
  padding: 0;
}

.user-name {
  margin-top: 2.2rem;
  text-align: center;
  font-weight: 700;
}
.user-account {
  text-align: center;
  color: #657786;
}
p {
  height: 100%;
  font-size: 8px;
  color: #657786;
  margin-top: 1rem;
}
.user-status {
  height: 30px;
  align-items: center;
  justify-content: center;
}
.user-following {
  color: black;
  font-weight: 700;
}
.user-follower {
  margin-left: 5px;
  color: black;
  font-weight: 700;
}
.user-chat,
.user-like {
  width: 20px;
  height: 18.9px;
}
.like-number,
.chat-number {
  font-size: 14px;
  color: black;
  line-height: 30px;
  margin: 0 1rem 0 5px;
}
.userfollowstatus {
  justify-content: center;
}
.user-photo {
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>