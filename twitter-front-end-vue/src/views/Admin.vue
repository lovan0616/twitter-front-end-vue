<template>
  <div class="container">
    <form class="form-container d-flex" @submit.prevent.stop="handleLogin">
      <img src="../assets/Logo.svg" alt="alphitterLogo" class="alphitterLogo" />
      <h5>後台登入</h5>
      <input type="text" placeholder="帳號" v-model="admin.account" required />
      <input
        type="password"
        placeholder="密碼"
        v-model="admin.password"
        required
      />
      <div class="buttonContainer">
        <button class="button" :disabled="isProcessing">登入</button>
        <router-link to="/" class="toFront">前台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import authorizationAPI from "../apis/authorization";

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
    async handleLogin() {
      try {
        // 首先過濾無輸入任何資訊的情境
        if (!this.admin.account || !this.admin.password) {
          Toast.fire({
            icon: "warning",
            title: "請確實填入帳號和密碼！",
          });
          return;
        }

        this.isProcessing = true;

        const response = await authorizationAPI.adminSignIn({
          account: this.admin.account,
          password: this.admin.password,
        });

        // 報錯處理
        const { data } = response;
      
        // 將token存放入本地瀏覽器localStorage
        localStorage.setItem("token", data.token);

        //成功驗證後轉址
        this.$router.push({ name: "admin-main" });
      } catch (error) {
        console.log("error:", error);
        this.isProcessing = false;
        this.admin.password = "";
        // 錯誤提示
        Toast.fire({
          icon: "error",
          title: "帳號或密碼輸入有誤，請重新確認！",
        });
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
  background-color: #f5f8fa;
}
button {
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  border: none;
  color: white;
  background-color: #ff6600;
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