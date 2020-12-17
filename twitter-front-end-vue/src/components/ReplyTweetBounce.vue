<template>
  <div class="container">
    <div class="reply-container">
      <div class="reply-upper-div">
        <img
          src="https://i.imgur.com/rIEZwV5.png"
          alt="cancel"
          class="reply-cancel"
          @click="goBack"
        />
      </div>
      <div class="reply-all d-flex">
        <div class="reply-photo-area">
          <img
            src="https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg"
            alt=""
            class="reply-to-photo"
          />
          <div class="reply-line"></div>
          <img
            src="https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg"
            alt=""
            class="reply-photo"
          />
        </div>
        <div class="reply-content-area">
          <div class="reply-post-info d-flex">
            <strong class="reply-name">蠟筆小新</strong>
            <p class="reply-account">@Canyon</p>
            <p class="reply-created-at">・3小時</p>
          </div>
          <div class="reply-post-content">
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
            <div class="reply-to-container d-flex">
              <div class="reply-to">回覆給</div>
              <div class="reply-to-account">@Canyon</div>
            </div>
            <textarea
              name="yourreply"
              id=""
              cols="30"
              rows="4"
              placeholder="推你的回覆"
            ></textarea>
            <div class="btn btn-primary post">回覆</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reply-Bounce",
  methods: {
    goBack() {
      this.$router.push("/tweet/:id/reply-list");
    },
  },
};
</script>

<style scoped>
.container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #9d9d9d;
  opacity: 0.5;
  z-index: inherit;
}

.reply-container {
  position: absolute;
  width: 600px;
  height: 450px;
  background-color: #fff;
  z-index: 999;
  border-radius: 14px;
  top: 54px;
  left: 420px;
  -webkit-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
}

.reply-upper-div {
  height: 54px;
  border-bottom: 1px solid #e6ecf0;
}

.reply-content-area {
  width: 525px;
  height: 395px;
}

.reply-cancel {
  height: 15px;
  width: 15px;
  margin: 19.5px;
  cursor: pointer;
}

.reply-post-info {
  margin: 15px 365px 6px 0;
  width: 100%;
  font-size: 15px;
}

.reply-name {
  height: 22px;
}

p {
  margin-bottom: 0;
}

.reply-account {
  margin-left: 5px;
  color: #657786;
}

.reply-created-at {
  color: #657786;
}

.reply-post-content {
  margin: 0px 15px 286px 0;
  font-size: 15px;
}

.reply-to-container {
  margin-top: 1rem;
}

.reply-to {
  color: #657786;
  font-size: 13px;
  line-height: 13px;
}

.reply-to-account {
  color: #ff6600;
  font-size: 13px;
  line-height: 13px;
  margin-left: 2px;
}

.upper-area-content {
  padding-top: 15px;
  padding-left: 15px;
}

.image-cropper,
.reply-to-photo,
.reply-photo {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.reply-to-photo {
  margin: 18px 0 5px 15px;
}

.reply-line {
  margin: auto;
  background-color: #ccd6dd;
  width: 2px;
  height: 80px;
}

.reply-photo {
  margin: 10px 10px 182px 15px;
}

textarea {
  margin: 35px 0;
  width: 100%;
  border: none;
  resize: none;
  -moz-appearance: none;
}

textarea:focus {
  outline: 0;
}

.btn {
  width: 64px;
  height: 40px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 100px;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
</style>
