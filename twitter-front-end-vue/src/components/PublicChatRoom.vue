<template>
  <div class="chat-container">
    <div class="chat-message-container" id="chat-message-container"></div>
    <div class="chat-text-container d-flex">
      <form
        class="form d-flex justify-content-center mx-2"
        @click.stop.prevent="send"
      >
        <input
          class="text-input"
          type="text"
          placeholder="say hi to everyone!"
          v-model="message"
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

export default {
  name: "PublicChatRoom",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    socketMsg() {
      //因为是本地测试，所以地址是我本地的，这里替换成你们服务的实际地址即可
      let io = socketio("http://localhost:8080", {
        //transports和服务端统一，否则会跨域
        transports: ["websocket"],
      });
      //向服务端发送消息
      io.emit("sendMsg", { time: new Date() });

      //接收服务端相对应的setId数据
      io.on("setId", (data) => {
        this.message = data.id;
      });
    },
    send() {
      this.$socket.emit("send message", {
        message: this.message,
      });
      var dark = document.createElement("p");
      dark.innerHTML = this.message + "\r\n";
      var inin = document.getElementById("chat-message-container");
      inin.append(dark);
      this.message = "";
    },
  },
  mounted() {
    this.socketMsg();
  },
  sockets: {
    connect() {
      console.log("connect");
    },
    other(data) {
      console.log("other", data);
      var dark = document.createElement("p");
      dark.innerHTML = data.msg + "\r\n";
      var inin = document.getElementById("chat-message-container");
      inin.append(dark);
    },
    self(data) {
      console.log("self", data);
      var dark = document.createElement("p");
      dark.innerHTML = data.msg + "\r\n";
      var inin = document.getElementById("chat-message-container");
      inin.append(dark);
    },
  },
};
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