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
        @submit.stop.prevent="handleMessageSubmit"
      >
        <input
          class="text-input"
          type="text"
          placeholder="say hi to everyone!"
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
// import io from "socket.io-client"
// const socket = io("https://krll-twitter-api-dev.herokuapp.com:57750", {
//   withCredentials: true,
//   extraHeaders: {
//     "krll-twitter": "abcd"
//   }
// })
// import VueSocketIo from 'vue-socket.io'

export default {
  socket: {
    join: function (message) {
      console.log(message);
    },
  },
  methods: {
    join: function () {
      this.$socket.emit("join", "23");
    },
  },
  mounted() {
    console.log("page mounted");
    //向後端拋出需求，等後端回拋內容回宅
    this.join();
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