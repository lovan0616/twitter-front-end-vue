<template>
 <div class="container d-flex justify-content-center py-5">
    <form class="w-50 mx-0" @submit.stop.prevent="handleSubmit">
      <div class="text-center">
        <img src="../assets/Logo.svg">
        <h4 class="mt-4">建立你的帳號</h4>
      </div>

      <div class="form-group my-4">
        <input type="text" id="account" name="account" class="form-control" placeholder="帳號" v-model="account">
      </div>

      <div class="form-group my-4">
        <input type="email" id="email" name="email" class="form-control" placeholder="Email" v-model="email">
      </div>

      <div class="form-group my-4">
        <input type="text" id="name" name="name" class="form-control" placeholder="名稱" v-model="name">
      </div>
     
      <div class="form-group my-4">
        <input type="password" id="password" name="password" class="form-control" placeholder="密碼" v-model="password">
      </div>

      <div class="form-group my-4">
        <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="密碼確認" v-model="confirmPassword">
      </div>

      <button class="btn btn-primary btn-block my-4" type="submit">註冊</button>

      <p class="text-center"><a href="">取消</a></p>
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
      confirmPassword: ""
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword
      })

      //Todo：向後端驗證使用者登入是否合法
      console.log('data', data)
    }
  }
}
</script>