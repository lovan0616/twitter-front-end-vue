<template>
  <div class="container d-flex">
    <div id="navbar-area" class="navbar-area">
      <Navbar />
    </div>
    <div class="main">
      <div class="main-title d-flex">
        <router-link to="/" class="arrow"></router-link>
        <div class="title">推文</div>
      </div>
      <div class="tweet-container">
        <div class="user-info-container d-flex">
          <div class="image-cropper">
            <img
              src="https://imgur.com/JVhBuMg.png"
              alt="user-pic"
              class="avatar"
            />
          </div>
          <div class="user-info-context">
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
      <div class="reation-container d-flex">
        <div class="reply-icon">
          <img src="../assets/Reply.svg" class="reply-img" />
        </div>
        <div class="like-icon">
          <img src="../assets/Like.svg" class="like-img" />
        </div>
      </div>
      <div class="tweet-reply-container">
        <TweetReply />
      </div>
    </div>
    <!--跟隨誰-->
    <div id="follow-recommend-area" class="follow-recommend-area">
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FollowRecommend from "../components/FollowRecommend";
import TweetReply from "../components/TweetReply";

export default {
  name: "MainTweetsReplyList",
  components: {
    Navbar,
    FollowRecommend,
    TweetReply,
  },
};
</script>

<style scoped>
.main {
  padding: 0;
  width: 600px;
  height: 1200px;
  border: 1px solid #e6ecf0;
}
.main-title {
  border-bottom: 1px solid #e6ecf0;
  height: 55px;
}
.arrow {
  background-image: url("https://i.imgur.com/MHQuvWA.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto 43px auto 1.3rem;
  width: 17px;
  height: 14px;
}
.title {
  padding: 0 10px 10px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 55px;
}
.image-cropper {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  padding: 0;
}
.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
.user-info-context {
  margin-top: 10px;
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
  margin: 1rem 10px 0 15px;
  border-bottom: 1px solid #e6ecf0;
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
  margin-right: 5px;
  font-weight: 500;
}
.dot {
  font-weight: 700;
}
.status-container {
  border-bottom: 1px solid #e6ecf0;
  line-height: 68px;
  margin: 0 10px 0 15px;
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
.reation-container,
.reply-icon,
.like-icon {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e6ecf0;
}
.reply-icon:hover,
.like-icon:hover {
  cursor: pointer;
}
.reply-img,
.like-img {
  margin: 0 10px 0 15px;
  width: 25px;
  height: 25px;
}
.like-img {
  margin-left: 150px;
}
</style>