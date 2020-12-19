<template>
  <div class="reply-container">
    <div class="reply-template d-flex">
      <div class="image-cropper">
        <img :src="userprofile.currentUser.avatar" class="avatar" />
      </div>
      <div class="reply-all">
        <div class="user-profile d-flex">
          <div class="user-name">{{ userprofile.currentUser.name }}</div>
          <div class="user-account">{{ userprofile.currentUser.account }}</div>
          <div class="dot">・</div>
          <div class="createdAt">
            {{ userprofile.currentUser.createdAt | fromNow }}
          </div>
        </div>
        <div class="user-reply d-flex">
          <div class="reply-literal">回覆</div>
          <div class="reply-account">{{ userprofile.currentUser.account }}</div>
        </div>
        <!--API為reply.comment-->
        <div class="reply-content">{{ initialReply.comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

//Todo: 需要替換為API撈回資料，API含有user資料，不必fetch兩次
export default {
  name: "TweetReply",
  mixins: [fromNowFilter],
  data() {
    return {
      userprofile: this.user,
    };
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
  },
  // methods: {
  //   fetchReplies() {
  //     for (let reply of this.initialReplies) {
  //       this.replies = reply;
  //     }
  //   },
  // },
  // created() {
  //   this.fetchReplies();
  // },
};
</script>

<style scoped>
.reply-template {
  height: 105px;
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
  margin-top: 1rem;
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
