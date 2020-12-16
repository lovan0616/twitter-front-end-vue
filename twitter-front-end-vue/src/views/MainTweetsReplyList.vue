<template>
  <div class="container d-flex">
    <AdminNav />
    <div class="main">
      <div class="main-title d-flex">
        <a href=""></a>
        <h5 class="title my-3">推文</h5>
      </div>
      <div class="tweet-container">
        <div class="userphoto mx-2 ml-3 d-flex">
          <img
            src="https://imgur.com/JVhBuMg.png"
            alt="user-pic"
            class="user-pic"
          />
          <div class="user-info">
            <div class="user-name">Apple</div>
            <div class="user-account">@apple</div>
          </div>
        </div>
        <div class="tweet-content">
          Nulla Lorem mollitcupidatat irure. Laborum magna!!Nulla Lorem
          mollitcupidatat irure. Laborum magna!!Nulla Lorem mollitcupidatat
          irure. Laborum magna!!Nulla Lorem mollitcupidatat irure. Laborum
          magna!!
        </div>
        <div class="tweet-time d-flex">
          <div class="tweet-hour">上午 10:05</div>
          <div class="dot">·</div>
          <div class="tweet-date">2020年6月10日</div>
        </div>
      </div>
    </div>
    <!--跟隨誰-->
    <div class="following"></div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

export default {
  name: "MainTweetsReplyList",
  components: {
    AdminNav,
  },
};
</script>

<style scoped>
.main {
  padding: 0;
  width: 600px;
}
.main-title {
  border-bottom: 2px solid #f0f0f0;
}
a {
  background-image: url("https://i.imgur.com/MHQuvWA.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 1.3rem 3rem 1.3rem 1.3rem;
  width: 17px;
  height: 14px;
}
.title {
  padding: 0 10px 10px 0;
}
.following {
  width: 450px;
}
.tweet-container {
  margin: 1rem;
  border: 1px solid #000;
}
</style>