<template>
  <div class="reply-container">
    <div class="reply-template d-flex">
      <div class="image-cropper">
        <img :src="initialReply.User.avatar" class="avatar" />
      </div>
      <div class="reply-all">
        <div class="user-profile d-flex">
          <div class="user-name">{{ initialReply.User.name }}</div>
          <div class="user-account">{{ initialReply.User.account }}</div>
          <div class="dot">・</div>
          <div class="createdAt">
            {{ initialReply.createdAt | fromNow }}
          </div>
        </div>
        <div class="user-reply d-flex">
          <div class="reply-literal">回覆</div>
          <div class="reply-account">{{ tweet.User.account }}</div>
        </div>
        <div class="reply-content">{{ initialReply.comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "TweetReply",
  mixins: [fromNowFilter],
  data() {
    return {};
  },
  props: {
    initialReply: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    tweet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.reply-template {
  border-bottom: 1px solid #e6ecf0;
}
.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 1rem 10px 0 15px;
}
.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
.reply-all {
  margin: 1rem 1rem 1rem 0;
  width: 80%;
}
.user-account,
.dot,
.createdAt,
.reply-literal {
  color: #657786;
}
.user-name,
.dot {
  font-weight: 700;
}
.user-account {
  margin-left: 5px;
}
.reply-account {
  color: #ff6600;
  margin-left: 5px;
}
.reply-content {
  font-size: 15px;
}
</style>>
