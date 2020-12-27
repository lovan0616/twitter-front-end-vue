<template>
  <div class="chatroom-container">
    <h1 class="text-center">聊天室</h1>
    <div class="message-panel">
      <ul>
        <li v-for="{ message, index } in messages" :key="'message' + index">
          {{message}}
        </li>
      </ul>
    </div>
    
    <div class="input-control">
      <form class="d-flex justify-content-center mt-3">
        <input type="text" class="message-input" v-model="input">
        <button class="btn btn-primary" @click.stop.prevent="clickButton(input)">送出</button>
      </form>
    </div>
  </div>
</template>

<script>
import VueSocketIo from 'vue-socket.io'
export default {
  name: 'Chatroom',
  data() {
    return {
      input: '',
      messages: []
    }
  },
  socket: {
    connect: function() {
      console.log('socket connected from page')
    },
    //監聽後端回拋的事件及內容
    send(message) {
      this.messages.push(message)
    }
  },
  methods: {
    clickButton: function() {
      console.log(VueSocketIo)
      this.$socket.emit('send', this.input)
      this.input= ""
    },
  },
  mounted() {
    console.log('page mounted')
    //向後端拋出需求，等後端回拋內容回宅
    this.$socket.emit('loginmsg', { subscribe: true })
  },
}
</script>

<style scoped>
.chatroom-container {
  width: 100%;
  height: 100%
}

.message-panel {
  width: 80%;
  margin: 0 auto;
  height: 500px;
  border: 1px solid;
}
</style>