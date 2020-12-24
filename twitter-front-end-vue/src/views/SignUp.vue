<template>
  <div class="container">
    <form class="w-100 d-flex flex-column align-items-center" @submit.stop.prevent="handleSubmit">
      <img class="alphitterLogo" src="../assets/Logo.svg" />
      <h5>建立你的帳號</h5>

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
        type="email"
        id="email"
        name="email"
        class="form-control"
        placeholder="Email"
        v-model="email"
        required
      />

      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        placeholder="名稱"
        v-model="name"
        required
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

      <input
        type="password"
        id="checkPassword"
        name="checkPassword"
        class="form-control"
        placeholder="密碼確認"
        v-model="checkPassword"
        required
      />

      <button class="btn btn-primary btn-block my-4" type="submit">註冊</button>

      <div class="others d-flex justify-content-center">
        <router-link to="/signin">取消</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      email: "",
      name: "",
      password: "",
      checkPassword: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        email: this.email,
        name: this.name,
        password: this.password,
        checkPassword: this.checkPassword
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