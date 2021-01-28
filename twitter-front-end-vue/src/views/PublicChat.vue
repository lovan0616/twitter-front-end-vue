<template>
  <div class="container">
    <div id="navbar-area" class="navbar-area">
      <!-- 插入 Navbar -->
      <Navbar />
    </div>
    <div class="user-area">
      <div class="upper-area d-flex align-items-top">
        <div class="upper-area-content">
          <strong class="mr-5">上線使用者 (5)</strong>
        </div>
      </div>
      <!-- 插入 UserChatCard，待撈取使用者資料 -->
      <div class="user-card-area">
        <UserChatCard />
      </div>
    </div>
    <div class="public-chat-area">
      <div class="upper-area-right d-flex align-items-top">
        <div class="upper-area-content">
          <strong class="mr-5">公開聊天室</strong>
        </div>
      </div>
      <!-- 插入 PublicChatRoom，待撈取使用者資料、實裝socket.io -->
      <div class="chat-room-area">
        <PublicChatRoom />
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import UserChatCard from "../components/UserChatCard";
import PublicChatRoom from "../components/PublicChatRoom";

export default {
  name: "Chatroom",
  components: {
    Navbar,
    UserChatCard,
    PublicChatRoom,
  },
  // socket: {
  //   connect: function() {
  //     console.log('socket connected from page')
  //   },
  //   監聽後端回拋的事件及內容
  //   identity({ socketId, userId }) {
  //     console.log(socketId, userId)
  //   }
  // },
  // methods: {
  //   clickButton: function() {
  //     console.log(VueSocketIo)
  //   }
  // },
  // mounted() {
  //   console.log('page mounted')
  //   向後端拋出需求，等後端回拋內容回宅
  //   this.$socket.emit('loginmsg', { subscribe: true })

  //   this.$socket.on('identity', 25)
  // },
  // created() {
  //   this.$socket.on('identity', (data) => {
  //     console.log(data)
  //   })
  // }
};
</script>

<style scoped>
.container {
  height: 100%;
}
.user-area {
  width: 30%;
}

.upper-area-content {
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  border-bottom: 1px solid #e6ecf0;
}

.upper-area-right {
  height: 55px;
  border-right: 1px solid #e6ecf0;
}

.user-card-area {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  height: 100%;
}

.public-chat-area {
  width: 48%;
  height: 80%;
}

.chat-room-area {
  height: 100%;
  border-right: 1px solid #e6ecf0;
}
</style>
