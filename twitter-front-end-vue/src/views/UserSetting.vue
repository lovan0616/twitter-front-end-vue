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
        <form
          class="ml-2"
          @submit.stop.prevent="handleSubmit"
          style="width: 60%"
        >
          <div class="form-group my-4">
            <input
              type="text"
              id="account"
              name="account"
              class="form-control"
              placeholder="帳號"
              v-model="account"
              required
            />
          </div>

          <div class="form-group my-4">
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
              required
            />
          </div>

          <div class="form-group my-4">
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="名稱"
              v-model="name"
              required
            />
          </div>
          <input type="radio" id="password-toggle" class="password-toggle" />
          <label for="password-toggle" class="password-toggle-label"
            >修改密碼</label
          >
          <div class="password-group-wrapper">
            <div class="form-group my-4">
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                class="form-control"
                placeholder="舊密碼"
                v-model="oldPassword"
              />
            </div>
            <div class="form-group my-4">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                class="form-control"
                placeholder="新密碼"
                v-model="newPassword"
              />
            </div>

            <div class="form-group my-4">
              <input
                type="password"
                id="checkPassword"
                name="checkPassword"
                class="form-control"
                placeholder="密碼確認"
                v-model="checkPassword"
              />
            </div>
          </div>

          <div class="btn-control d-flex justify-content-end">
            <button class="btn btn-primary ml-auto save" type="submit">
              儲存
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserSetting",
  data() {
    return {
      account: "",
      email: "",
      name: "",
      oldPassword: "",
      newPassword: "",
      checkPassword: "",
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  components: {
    Navbar,
  },
  methods: {
    fetchData() {
      this.account = this.currentUser.account;
      this.email = this.currentUser.email;
      this.name = this.currentUser.name;
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        const id = this.currentUser.id;
        const passwordItems = ["oldPassword", "newPassword", "checkPassword"];

        //如果必填項目空白
        if (!this.account || !this.email || !this.name) {
          Toast.fire({
            icon: "error",
            title: "必填項目不能為空白",
          });
        }

        //如果未修改密碼，則只回傳前三筆資料
        if (!this.oldPassword || !this.newPassword || !this.checkPassword) {
          passwordItems.forEach((item) => {
            formData.delete(item);
          });
        }

        const { data } = await usersAPI.updateUser(id, { formData });
        console.log(data);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法修改資料，請稍後再試",
        });
      }
    },

    // async handleSubmit() {
    //   try {
    //     const { id, account, email, name } = this.currentUser;
    //     // const oldPassword = this.oldPassword;
    //     // const newPassword = this.newPassword;
    //     // const checkPassword = this.checkPassword;

    //     const response = await usersAPI.updateUser(id, {
    //       account,
    //       email,
    //       name
    //     });

    //     const { data } = response;
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法修改資料，請稍後再試"
    //     });
    //   }
    // }
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.right-content {
  flex-grow: 1;
}
.upper-area-content {
  border-bottom: 1px solid #e6ecf0;
  padding-left: 15px;
}

.upper-area strong {
  line-height: 55px;
}

input {
  background-color: #f5f8fa;
  border: hidden;
  border-bottom: 2px solid #657786;
  height: 50px;
}

.save {
  width: 122px;
  border-radius: 20px;
}

.password-toggle {
  visibility: hidden;
  position: absolute;
}

.password-toggle:checked ~ .password-group-wrapper {
  transform: scale(1, 1);
}

.password-toggle-label {
  cursor: pointer;
  border-radius: 20px;
  padding: 3px 10px;
}

.password-toggle-label:hover {
  color: #ff6600;
  background-color: #faceaf;
}

.password-group-wrapper {
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}
</style>