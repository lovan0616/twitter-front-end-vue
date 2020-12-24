<template>
  <div class="container">
    <form
      class="w-100 d-flex flex-column align-items-center"
      @submit.stop.prevent="handleSubmit"
    >
      <img class="alphitterLogo" src="../assets/Logo.svg" />
      <h5>登入 Alphitter</h5>

      <input
        type="text"
        id="account"
        name="account"
        class="form-control"
        placeholder="帳號"
        v-model="account"
        required
        autofocus
      />

      <input
        type="password"
        id="password"
        name="password"
        class="form-control"
        placeholder="密碼"
        v-model="password"
        required
      />

      <button
        class="btn btn-primary btn-block"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>

      <div class="others d-flex justify-content-end pt-4">
        <router-link to="/signup">註冊 Alphitter</router-link>·
        <router-link to="/admin">後台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入account和password",
          });
          return;
        }

        this.isProcessing = true;

        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });

        localStorage.setItem("token", data.token);

        //將user資料放到vuex當中
        this.$store.commit("setCurrentUser", data.user);

        this.$router.push("/main");
      } catch (error) {
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "error",
          title: "請確認您輸入了正確的密碼",
        });
        console.log("error", error);
      }
    },
  },
};
</script>

<style scoped>
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
  height: 48px;
  margin: 10px;
  padding: 10px;
  border: 10px;
  border-bottom: 3px solid #9d9d9d;
  background-color: #f5f8fa;
}

.others {
  width: 40%;
}

button {
  width: 40%;
  margin: 15px 0 10px 0;
  padding: 10px;
  border-radius: 30px;
}
</style>