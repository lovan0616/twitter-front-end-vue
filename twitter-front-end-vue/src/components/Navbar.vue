<template>
  <nav class="sidebar" style="height: 100%">
    <div class="sidebar-sticky d-flex flex-column" style="height: 100%">
      <div class="top-area">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/Logo.svg" />
        </router-link>

        <div class="nav-list">
          <router-link class="nav-item" to="/main">
            <div class="d-flex" style="width: 115px">
              <img src="../assets/Home.svg" class="icon" />
              <img src="../assets/Home-hovered.svg" class="icon-hovered" />
              <p>首頁</p>
            </div>
          </router-link>
          <router-link
            class="nav-item"
            :to="{
              name: 'user-profile',
              params: { id: currentUser.id },
            }"
          >
            <div class="d-flex" style="width: 143px">
              <img src="../assets/User.svg" class="icon" />
              <img src="../assets/User-hovered.svg" class="icon-hovered" />
              <p>個人資料</p>
            </div>
          </router-link>
          <router-link class="nav-item" to="/user/setting">
            <div class="d-flex" style="width: 115px">
              <img src="../assets/Setting.svg" class="icon" />
              <img src="../assets/Setting-hovered.svg" class="icon-hovered" />
              <p>設定</p>
            </div>
          </router-link>
        </div>

        <div
          type="button"
          class="btn btn-primary post"
          data-toggle="modal"
          data-target="#postModal"
        >
          推文
        </div>
      </div>

      <div class="bottom-area mt-auto">
        <div
          class="signout-wrapper d-flex"
          style="width: 115px"
          @click.stop.prevent="handleSignOut"
        >
          <img src="../assets/Signout.svg" class="icon" />
          <p>登出</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  components: {},
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    handleSignOut() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
}

.nav-item div {
  height: 46px;
  padding: 10px;
  margin-top: 14px;
}
.nav-item img {
  margin-right: 21px;
}

.nav-item .icon-hovered {
  display: none;
  margin-right: 21px;
}

.nav-item:hover div {
  background-color: #faceaf;
  border-radius: 25px;
}

.nav-item:hover p {
  color: #ff6600;
}

.nav-item:hover .icon {
  display: none;
}

.nav-item:hover .icon-hovered {
  display: block;
}

.active p {
  color: #ff6600;
}

.active .icon {
  display: none;
}

.active .icon-hovered {
  display: block;
}

.post {
  width: 210px;
  border-radius: 20px;
  margin-top: 27px;
}

.btn-primary:not(:disabled):not(.disabled):active {
  background-color: #cc5302;
}

.signout-wrapper {
  cursor: pointer;
  height: 46px;
  padding: 10px;
}

.signout-wrapper .icon {
  margin-right: 21px;
}

.signout-wrapper:hover {
  background-color: #faceaf;
  border-radius: 25px;
}

a {
  color: black;
  text-decoration: none;
}
</style>