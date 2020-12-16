<template>
  <div class="container">
      <div id="navbar-area" class="navbar-area">
        <!-- 插入 Navbar -->
       <Navbar />
      </div>

      <div class="right-content">
        <div class="upper-area">
          <div class="upper-area-content">
            <strong>帳戶設定</strong>
          </div>
        </div>
        <main>
          <form class="ml-2" @submit.stop.prevent="handleSubmit" style="width: 60%">
            <div class="form-group my-4">
              <input
                type="text"
                id="account"
                name="account"
                class="form-control"
                placeholder="帳號"
                v-model="user.account"
              />
            </div>

            <div class="form-group my-4">
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Email"
                v-model="user.email"
              />
            </div>

            <div class="form-group my-4">
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder="名稱"
                v-model="user.name"
              />
            </div>

            <div class="form-group my-4">
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="密碼"
                v-model="user.password"
              />
            </div>

            <div class="form-group my-4">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                placeholder="密碼確認"
                v-model="user.confirmPassword"
              />
            </div>

            <div class="btn-control d-flex justify-content-end">
              <button class="btn btn-primary ml-auto save" type="submit">儲存</button>
            </div>
          </form>
        </main>
      </div>
  </div>
</template>

<script>
// Todo: 暫用dummyUser，需改回真實資料
const dummyUser = {
  user: {
    id: 1,
    account: "@root",
    name: "root",
    email: "root@example.com",
    password: "12345678",
    confirmPassword: "12345678",
    isAdmin: true
  }
};
import Navbar from '../components/Navbar'

export default {
  data() {
    return {
      user: {
        account: "",
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword
      });

      //Todo：發送請求給後端，修改使用者資料
      console.log("data", data);
    },
    fetchUser() {
      const { account, name, email, password, confirmPassword } = dummyUser.user
      this.user = {
        ...this.user,
        account,
        name,
        email,
        password,
        confirmPassword
      }
    }
  },
  created() {
    this.fetchUser()
  }
};
</script>

<style scoped>
  .right-content {
    flex-grow: 1;
  }
  .upper-area-content {
    border-bottom: 1px solid #E6ECF0;
    padding-left: 15px;
  }

  .upper-area strong {
    line-height: 55px;
  }

  input {
    background-color: #F5F8FA;
    border:hidden;
    border-bottom: 2px solid #657786;
    height: 50px;
  }

  .save {
    width: 122px;
    border-radius: 20px;
  }

</style>