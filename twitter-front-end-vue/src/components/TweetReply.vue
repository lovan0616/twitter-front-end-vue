<template>
  <div class="reply-container">
    <div class="reply-template d-flex" v-for="reply in replys" :key="reply.id">
      <div class="image-cropper">
        <img :src="reply.image" class="avatar" />
      </div>
      <div class="reply-all">
        <div class="user-profile d-flex">
          <div class="user-name">{{ reply.name }}</div>
          <div class="user-account">{{ reply.account }}</div>
          <div class="dot">・</div>
          <div class="createdAt">{{ reply.createdAt }}</div>
        </div>
        <div class="user-reply d-flex">
          <div class="reply-literal">回覆</div>
          <div class="reply-account">@apple</div>
        </div>
        <div class="reply-content">{{ reply.replyContent }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//Todo: 需要替換為API撈回資料
const dummyData = {
  replys: [
    {
      id: 1,
      name: "蠟筆小新",
      account: "@canyon",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      createdAt: "1小時",
      replyContent: "供尛？！",
    },
    {
      id: 2,
      name: "蠟筆小新",
      account: "@canyon",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      createdAt: "3小時",
      replyContent: "大屁股妖怪外星人",
    },
    {
      id: 3,
      name: "蠟筆小新",
      account: "@canyon",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      createdAt: "5小時",
      replyContent: "娜娜子姐接～",
    },
    {
      id: 4,
      name: "蠟筆小新",
      account: "@canyon",
      image:
        "https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg",
      createdAt: "7小時",
      replyContent: "師父你又在搞笑哦",
    },
  ],
};
export default {
  name: "TweetReply",
  data() {
    return {
      replys: {
        id: -1,
        name: "",
        account: "",
        image: "",
        createdAt: "",
        replyContent: "",
      },
    };
  },
  created() {
    this.fetchReply();
  },
  methods: {
    fetchReply() {
      this.replys = dummyData.replys;
    },
  },
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
