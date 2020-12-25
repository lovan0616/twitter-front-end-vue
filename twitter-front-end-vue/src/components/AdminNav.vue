<template>
  <div class="sidebar">
    <div class="sidebar-sticky d-flex flex-column" style="height: 100%">
      <div class="img-wrapper">
        <img
          src="https://imgur.com/JVhBuMg.png"
          alt="alphitterLogo"
          class="alphitterLogo"
        />
      </div>
      <ul>
        <li>
          <router-link to="/admin/main" class="nav-item d-flex"
            ><img src="../assets/Home.svg" alt="推文icon" class="tweeticon" />
            <img src="../assets/Home-hovered.svg" class="icon-hovered" />
            <h5 class="list">推文清單</h5></router-link
          >
        </li>
        <li>
          <router-link to="/admin/users" class="nav-item d-flex"
            ><img src="../assets/User.svg" alt="使用者icon" class="usericon" />
            <img src="../assets/User-hovered.svg" class="icon-hovered" />
            <h5 class="user">使用者列表</h5></router-link
          >
        </li>
        <div class="logout-wrapper">
          <router-link
            to="/admin/login"
            class="logout d-flex"
            @click="handleSignOut"
          >
            <img
              src="../assets/Signout.svg"
              alt="登出icon"
              class="logout-icon"
            />
            <h5 class="logout-text">登出</h5>
          </router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminNavbar",
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    handleSignOut() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/admin/login");
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  margin-left: 1rem;
}

li {
  list-style: none;
}

a:hover,
a:focus {
  text-decoration: none;
}
a {
  padding: 10px 5px 10px 5px;
  align-items: center;
}
h5 {
  margin: 0 10px 0 5px;
}
.alphitterLogo {
  margin: 0.5rem 0 2.5rem 3.5rem;
  width: 40px;
  height: 40px;
}
.tweeticon,
.usericon {
  margin: 10px;
  width: 24px;
  height: 24px;
}
.tweeticon:hover,
.usericon:hover,
.list:hover,
.user:hover {
  filter: invert(42%) sepia(19%) saturate(6136%) hue-rotate(2deg)
    brightness(106%) contrast(105%);
  /* https://www.zhangxinxu.com/sp/filter.html */
}

.nav-item .icon-hovered {
  display: none;
}

.nav-item:hover {
  background-color: #faceaf;
  border-radius: 25px;
}

.nav-item:hover .icon-hovered {
  display: block;
  margin: 10px;
}

.nav-item:hover .tweeticon {
  display: none;
}

.nav-item:hover .usericon {
  display: none;
}

.nav-item:hover .list {
  color: #ff6600;
}

.nav-item:hover .user {
  color: #ff6600;
}

.list,
.user,
.logout-text {
  font-size: 18px;
  color: black;
}

.logout {
  position: absolute;
  bottom: 0;
  margin: 10px 10px 10px 20px;
}

.logout-icon {
  margin: 0 15px;
}
</style>