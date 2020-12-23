<template>
  <div class="d-flex">
    <div id="navbar-area">
      <AdminNav />
    </div>
    <div class="row" id="all-container" style="height: 100%">
      <h5 class="my-3" style="width: 100%">使用者列表</h5>
      <AdminUserCard
        v-for="user in allUsers"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminUserCard from "../components/AdminUserCard";
import AdminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    AdminUserCard,
  },
  data() {
    return {
      allUsers: [],
    };
  },
  methods: {
    async fetchAllUsers() {
      try {
        const { data } = await AdminAPI.getAdminUsers();
        console.log(data);
        this.allUsers = [...data];
        this.allUsers.sort((a, b) => {
          // 根據物件值降序排列
          return b.tweetsCount - a.tweetsCount;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "暫時無法取得用戶資料，請稍候再試！",
        });
      }
    },
  },
  created() {
    this.fetchAllUsers();
  },
};
</script>

<style scoped>
.all-container {
  width: 100%;
}

h5 {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px 10px 30px;
}
</style>