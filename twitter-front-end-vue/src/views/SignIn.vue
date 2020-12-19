<template>
 <div class="container d-flex justify-content-center py-5">
    <form class="w-50 mx-0" @submit.stop.prevent="handleSubmit">
      <div class="text-center">
        <img src="../assets/Logo.svg">
        <h4 class="mt-4">登入 Alphitter</h4>
      </div>

      <div class="form-group my-4">
        <input type="text" id="account" name="account" class="form-control" placeholder="帳號" v-model="account" required autofocus>
      </div>
     
      <div class="form-group my-4">
        <input type="password" id="password" name="password" class="form-control" placeholder="密碼" v-model="password" required>
      </div>

      <button class="btn btn-primary btn-block" type="submit">登入</button>

      <p class="text-right pt-4">
        <router-link to="/signup">註冊 Alphitter</router-link>·
        <router-link to="/admin">後台登入</router-link></p>
    </form>
 </div>
  
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password
      })

      //Todo：向後端驗證使用者登入是否合法
      console.log('data', data)
    }
  }
}
</script>

<style scoped>


</style>