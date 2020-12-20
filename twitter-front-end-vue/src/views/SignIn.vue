<template>
  <div class="container">
    <form class="w-100 d-flex flex-column align-items-center" @submit.stop.prevent="handleSubmit">
        <img class="alphitterLogo " src="../assets/Logo.svg" />
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

      <button class="btn btn-primary btn-block" type="submit">登入</button>

      <div class="others d-flex justify-content-end pt-4">
        <router-link to="/signup">註冊 Alphitter</router-link>·
        <router-link to="/admin">後台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password
      });

      //Todo：向後端驗證使用者登入是否合法
      console.log("data", data);
    }
  }
};
</script>

<style scoped>
.alphitterLogo  {
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
  background-color: #F5F8FA;
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