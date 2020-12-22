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

// GET /api/admin/users
const dummyAllUsers = [
  {
    id: 21,
    email: "user2@example.com",
    password: "$2a$10$pqbQcf73EeNMDX8nxb0g7.wQSBFnXkrdW.E1eUJRbwuzSjwFaBUtm",
    name: "user2",
    avatar: "https://loremflickr.com/320/240/avatar/?random=66.74408201076929",
    introduction: "Et debitis error dolor sint voluptatem eveniet minima.",
    account: "@user2",
    cover:
      "https://loremflickr.com/320/240/background/?random=79.62272419337143",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    tweetsCount: 58,
    likesCount: 0,
    followersCount: 7000,
    followingsCount: 0,
  },
  {
    id: 4,
    email: "user2@example.com",
    password: "$2a$10$pqbQcf73EeNMDX8nxb0g7.wQSBFnXkrdW.E1eUJRbwuzSjwFaBUtm",
    name: "user2",
    avatar: "https://loremflickr.com/320/240/avatar/?random=66.74408201076929",
    introduction: "Et debitis error dolor sint voluptatem eveniet minima.",
    account: "@user2",
    cover:
      "https://loremflickr.com/320/240/background/?random=79.62272419337143",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    tweetsCount: 350,
    likesCount: 0,
    followersCount: 200,
    followingsCount: 250,
  },
  {
    id: 3,
    email: "user2@example.com",
    password: "$2a$10$pqbQcf73EeNMDX8nxb0g7.wQSBFnXkrdW.E1eUJRbwuzSjwFaBUtm",
    name: "user2",
    avatar: "https://loremflickr.com/320/240/avatar/?random=66.74408201076929",
    introduction: "Et debitis error dolor sint voluptatem eveniet minima.",
    account: "@user2",
    cover:
      "https://loremflickr.com/320/240/background/?random=79.62272419337143",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    tweetsCount: 280,
    likesCount: 0,
    followersCount: 2,
    followingsCount: 540,
  },
  {
    id: 2,
    email: "user2@example.com",
    password: "$2a$10$pqbQcf73EeNMDX8nxb0g7.wQSBFnXkrdW.E1eUJRbwuzSjwFaBUtm",
    name: "user2",
    avatar: "https://loremflickr.com/320/240/avatar/?random=66.74408201076929",
    introduction: "Et debitis error dolor sint voluptatem eveniet minima.",
    account: "@user2",
    cover:
      "https://loremflickr.com/320/240/background/?random=79.62272419337143",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    tweetsCount: 500,
    likesCount: 0,
    followersCount: 350,
    followingsCount: 350,
  },
  {
    id: 1,
    email: "user2@example.com",
    password: "$2a$10$pqbQcf73EeNMDX8nxb0g7.wQSBFnXkrdW.E1eUJRbwuzSjwFaBUtm",
    name: "user2",
    avatar: "https://loremflickr.com/320/240/avatar/?random=66.74408201076929",
    introduction: "Et debitis error dolor sint voluptatem eveniet minima.",
    account: "@user2",
    cover:
      "https://loremflickr.com/320/240/background/?random=79.62272419337143",
    role: "user",
    createdAt: "2020-12-16T08:46:08.000Z",
    updatedAt: "2020-12-16T08:46:08.000Z",
    tweetsCount: 10,
    likesCount: 0,
    followersCount: 0,
    followingsCount: 0,
  },
];

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
    fetchAllUsers() {
      this.allUsers = [...dummyAllUsers];
      this.allUsers.sort((a, b) => {
        // 根據物件值降序排列
        return b.tweetsCount - a.tweetsCount;
      });
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