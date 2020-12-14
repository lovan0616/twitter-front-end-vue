<template>
  <div class="container">
    <img
      src="https://imgur.com/JVhBuMg.png"
      alt="alphitterLogo"
      class="alphitterLogo"
    />
    <h5>後台登入</h5>
    <input type="email" placeholder="帳號" autofocus />
    <input type="text" placeholder="密碼" />
    <div class="buttonContainer">
      <button class="button">登入</button>
      <router-link to="/" class="toFront">前台登入</router-link>
    </div>
  </div>
</template>

<script>
const dummyAdmin = {
  account: "root@example.com",
  password: "12345678",
};

export default {
  data() {
    return {
      admin: {},
    };
  },
  created() {
    this.fetchAdmin();
  },
  methods: {
    fetchAdmin() {
      this.admin = dummyAdmin;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.alphitterLogo {
  margin-top: 72.51px;
  height: 50px;
  width: 50px;
}
h5 {
  margin-top: 40px;
}
input {
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-top: 10px;
  border-left: 10px;
  border-right: 10px;
  border-color: #9d9d9d;
  background-color: #f0f0f0;
}
button {
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  border: none;
  color: white;
  background-color: #ff8800;
}
.buttonContainer {
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px 0 10px 0;
}
.button {
  width: 100%;
  margin-left: 0;
}
.toFront {
  position: absolute;
  bottom: -2.5rem;
  right: 0;
}
</style>