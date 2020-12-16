<template>
  <div class="container">
    <form class="form-container d-flex" @submit.prevent.stop="handleLogin">
      <img
        src="https://imgur.com/JVhBuMg.png"
        alt="alphitterLogo"
        class="alphitterLogo"
      />
      <h5>後台登入</h5>
      <input type="email" placeholder="帳號" v-model="admin.account" required />
      <input type="text" placeholder="密碼" v-model="admin.password" required />
      <div class="buttonContainer">
        <button class="button" :disabled="isProcessing">登入</button>
        <router-link to="/" class="toFront">前台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";

const dummyAdmin = {
  account: "root@example.com",
  password: "12345678",
};

export default {
  data() {
    return {
      admin: {
        account: "",
        password: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    //Todo: 改使用 Async/await 串接 API
    handleLogin() {
      if (!this.admin.account || !this.admin.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 email 和 password",
        });
        return;
      } else if (
        this.admin.account === dummyAdmin.account &&
        this.admin.password === dummyAdmin.password
      ) {
        // 避免急躁管理員瘋狂點擊
        this.isProcessing = true;
        this.$router.push("/admin/main");
      } else {
        Toast.fire({
          icon: "error",
          title: "帳號或密碼輸入有誤，請重新確認！",
        });
        return;
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
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
  border: 10px;
  border-bottom: 3px solid #9d9d9d;
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