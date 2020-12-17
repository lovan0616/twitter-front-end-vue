<template>
  <div>
    <div class="follower">
      <div class="info d-flex">
        <div class="image-cropper">
          <img :src="follower.avatar | emptyImage " class="avatar" />
        </div>
        <div class="info-text d-flex flex-column">
          <strong class="name">{{ follower.name }}</strong>
          <p class="account">{{ follower.account }}</p>
          <p class="introduction">{{ follower.introduction }}</p>
        </div>
      </div>
      <div class="follow-badge">
        <div
          class="badge badge-pill badge-primary"
          v-if="follower.isFollowed"
          @click.stop.prevent="unfollow"
        >正在跟隨</div>
        <div class="badge badge-pill badge-outline-primary" v-else @click.stop.prevent="follow">跟隨</div>
      </div>
    </div>
  </div>
</template>


<script>
import { emptyImageFilter } from "../utils/mixins";
export default {
  name: "Follower",
  mixins: [emptyImageFilter],
  props: {
    initialFollower: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      follower: {
        name: "",
        account: "",
        avatar: "",
        introduction: "",
        isFollowed: false
      }
    };
  },
  methods: {
    fetchData() {
      const { follower, isFollowed } = this.initialFollower;
      const { name, account, avatar, introduction } = follower;
      this.follower = {
        ...this.follower,
        name,
        account,
        avatar,
        introduction,
        isFollowed
      };
    },
    follow() {
      // 使用API發送追蹤請求
      this.follower = {
        ...this.follower,
        isFollowed: true
      };
    },
    unfollow() {
      // 使用API發送取消追蹤請求
      this.follower = {
        ...this.follower,
        isFollowed: false
      };
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.follower {
  width: 100%;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
  padding: 12px 15px 10px 15px;
}

.info {
  width: 100%;
}

.follow-badge {
  position: absolute;
  top: 12px;
  right: 15px;
}

.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
}

.info-text {
  width: calc(100% - 50px);
}

.info-text .name {
  line-height: 12px;
}

.info-text p {
  margin-bottom: 0;
}

.info-text .account {
  color: #657786
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}

.badge-pill {
  padding: 7px 16px;
  cursor: pointer;
}
</style>