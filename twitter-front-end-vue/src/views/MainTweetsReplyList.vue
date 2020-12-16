<template>
  <div class="d-flex">
    <AdminNav />
    <div class="main">
      <div class="main-title d-flex">
        <a href=""></a>
        <h5 class="title my-3">推文</h5>
      </div>
      <div class="tweet-container">
        <div class="user-photo d-flex">
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
      <div class="status-container d-flex">
        <div class="reply-number">34</div>
        <div class="reply">回覆</div>
        <div class="like-number">808</div>
        <div class="like">喜歡次數</div>
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
  border-right: 2px solid #e6ecf0;
}
.main-title {
  border-bottom: 2px solid #e6ecf0;
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
.user-info {
  margin-left: 10px;
}
.user-name {
  font-size: 15px;
  font-weight: 700;
}
.user-account {
  font-size: 15px;
  font-weight: 500;
}
.tweet-time {
  margin-bottom: 10px;
}
.tweet-container {
  margin: 1rem 1rem 0 1rem;
  border-bottom: 2px solid #e6ecf0;
}
.user-photo,
.user-pic {
  width: 50px;
  height: 50px;
  border: 1px solid red;
  margin-left: 0;
}
.user-account {
  color: #657786;
}
.tweet-content {
  margin: 1.5rem 0;
  font-size: 23px;
  font-weight: 500;
}
.tweet-hour,
.tweet-date,
.dot {
  color: #657786;
}
.status-container {
  border-bottom: 2px solid #e6ecf0;
  line-height: 68px;
  margin: 0 10px;
  padding: 10px 10px;
}
.reply-number,
.like-number,
.reply,
.like {
  font-size: 19px;
  font-weight: 500;
}
.reply,
.like {
  color: #657786;
  margin-left: 5px;
}
.reply {
  margin-right: 1.5rem;
}
.following {
  width: 450px;
}
</style>