<template>
  <div class="chat-container">
    <div class="chat-message-container chatbox p-3">
      <div class="publicMessages">

      </div>

      <div class="realtimeMessages d-flex flex-column">
        <div v-for="message in messages" :key="message.id" :class="['message', 'd-flex', {selfMessage : currentUser.id === message.user.id}, {publicMessage : message.type === 'publicMessage'}]">
          <div class="sender-avatar-area mr-1" v-if="currentUser.id !== message.user.id">
            <div class="image-cropper">
                  <img :src="message.user.avatar" class="avatar" />
            </div>
          </div>
          <div class="message-area d-flex flex-column">
            <div class="message-box p-2">{{message.content}}</div>
            <span class="small text-secondary sent-time">{{message.timeStamp | timeNow }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-text-container d-flex">
      <form
        class="form d-flex justify-content-center mx-2"
        @submit.stop.prevent="send"
      >
        <input class="text-input" type="text" placeholder="say hi to everyone!" v-model="message.content" />
        <button type="submit" class="send-out-btn" :disabled="!message.content">
          <img src="../assets/send-message.svg" alt="send-out-the-text" class="send-out" />
        </button>
      </form>

      <!-- Todo: 測試按鈕，導入scoket-io-client後拔除 -->
      <button class="join-rrom" @click="joinRoom">joinRoom</button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { timeNowFilter } from '../utils/mixins'
import { uuid } from 'uuidv4'
import socketio from "socket.io-client";
const io = socketio("https://krll-twitter-api-dev.herokuapp.com/");

export default {
  // socket: {
  //   join: function(message) {
  //     console.log(message);
  //   }
  // },
  // methods: {
  //   join: function() {
  //     this.$socket.emit("join", '23');
  //   }
  // },
  // mounted() {
  //   console.log("page mounted");
  //   //向後端拋出需求，等後端回拋內容回宅
  //   this.join();
  // }
  name: "PublicChatRoom",
  data() {
    return {
      // Todo: 修改message內容
      message: {
        id: uuid(),
        type: '',
        user: {
          id: 11,
          name: 'user1',
          avatar: "https://i.imgur.com/qrr11vy.jpg"
        },
        content: '',
        timeStamp: new Date()
      },
      messages: [],
    }
  },
  mixins: [timeNowFilter],
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    handleMessageSubmit(){
      if (!this.message.content) return

      //將此則 message 設定為 chatMessage 
      this.message.type = 'chatMessage'

      this.messages.push({...this.message})
      // Todo: 修改message內容
      this.message = {
        id: uuid(),
        type: '',
        user: {
          id: Math.random(),
          name: 'user1',
          avatar: "https://i.imgur.com/qrr11vy.jpg"
        },
        content: '',
        timeStamp: new Date()
      }

      //使對話框置底:對話框
      this.$nextTick(function() {
        const chatbox = document.querySelector('.chatbox')
        chatbox.scrollTop = chatbox.scrollHeight
      })
    },
    // Todo: 測試功能，導入scoket-io-client後改寫
    joinRoom() {
      //將此則 message 設定為 publicMessage 
      this.message.type = 'publicMessage'

      this.message = {
        id: uuid(),
        type: 'publicMessage',
        user: {
          id: 5,
          name: '@user5',
          avatar: "https://i.imgur.com/qrr11vy.jpg",
        },
        content: '@user5 is online',
        timeStamp: new Date()
      }

      this.messages.push({...this.message})

      // Todo: 修改message內容
      this.message = {
        id: uuid(),
        type: '',
        user: {
          id: Math.random(),
          name: 'user1',
          avatar: "https://i.imgur.com/qrr11vy.jpg"
        },
        content: '',
        timeStamp: new Date()
      }

      //使對話框置底:對話框
      this.$nextTick(function() {
        const chatbox = document.querySelector('.chatbox')
        chatbox.scrollTop = chatbox.scrollHeight
      })
    },

    socketMsg() {
      // const io = socketio("https://krll-twitter-api-dev.herokuapp.com/", {
      //   withCredentials: true,
      //   extraHeaders: {
      //     "my-custom-header": "my-custom-header",
      //   },
      // });
      io.on("connection", () => {
        console.log("connection succeed!");
      });
    },
  }
}
  // created() {
  //   this.socketMsg();
  // },

//   sockets: {
//     connect() {
//       console.log("connect");
//     },
//     other(data) {
//       console.log("other", data);
//       var dark = document.createElement("p");
//       dark.innerHTML = data.msg + "\r\n";
//       var inin = document.getElementById("chat-message-container");
//       inin.append(dark);
//     },
//     self(data) {
//       console.log("self", data);
//       var dark = document.createElement("p");
//       dark.innerHTML = data.msg + "\r\n";
//       var inin = document.getElementById("chat-message-container");
//       inin.append(dark);
//     },

// import io from "socket.io-client";
// const socket = io("https://krll-twitter-api-dev.herokuapp.com:24577", {
//   withCredentials: true,
//   extraHeaders: {
//     "krll-twitter": "abcd",
//   },
// });
</script>

<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chat-container {
  height: 100%;
}

.chat-message-container {
  height: 80%;
}

.chat-text-container {
  width: 100%;
  border-top: 1px solid #e6ecf0;
}

.form {
  width: 100%;
  margin-top: 1rem;
}

.text-input {
  width: 90%;
  margin-right: 1rem;
  border: none;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px;
}

.send-out-btn {
  all: unset;
}

.send-out {
  width: 30px;
  height: 30px;
}

.send-out:hover {
  cursor: pointer;
  filter: invert(42%) sepia(19%) saturate(6136%) hue-rotate(2deg)
    brightness(106%) contrast(105%);
}

.send-out-btn[disabled="disabled"] .send-out {
  cursor: auto;
  filter: invert(50%) brightness(130%)
}

.chatbox {
  width: 100%;
  height:100%;
  overflow: scroll;
}

.selfMessage {
  color: blueviolet;
  margin-left: auto;
}

.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}

.message-box {
  background-color: #E6ECF0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.selfMessage .message-box {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 20px;
  background-color: #FF6601;
  color: white;
}

.publicMessage .sender-avatar-area {
  display: none;
}

.publicMessage .sent-time {
  display: none;
}

.publicMessage {
  margin: 5px auto;
}

.publicMessage .message-box {
  background-color: #E5E5E5;
  color: #7A8995;
  text-align: center;
  border-radius: 20px;
}

</style>>