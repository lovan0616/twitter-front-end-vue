<template>
  <div class="chat-container">
    <div class="chat-message-container">
      <!-- <ul>
        <li v-for="{ message, index } in messages" :key="'message' + index">
          {{message}}
        </li>
      </ul>-->
    </div>

    <div class="chat-text-container d-flex">
      <form
        class="form d-flex justify-content-center mx-2"
        @submit.stop.prevent="send"
      >
        <input
          class="text-input"
          type="text"
          placeholder="say hi to everyone!"
          v-model="text"
        />
        <button type="submit" class="send-out-btn">
          <img
            src="../assets/send-message.svg"
            alt="send-out-the-text"
            class="send-out"
          />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import socketio from "socket.io-client";
const io = socketio("https://krll-twitter-api-dev.herokuapp.com/");

export default {
  name: "PublicChatRoom",
  data() {
    return {
      text: "",
    };
  },
  methods: {
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
    send() {
      this.$socket.emit("send message", {
        text: this.text,
      });
      var dark = document.createElement("p");
      dark.innerHTML = this.text + "\r\n";
      var inin = document.getElementById("show");
      inin.append(dark);
      this.text = "";
    },
  },
  // created() {
  //   this.socketMsg();
  // },
};
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
</style>>