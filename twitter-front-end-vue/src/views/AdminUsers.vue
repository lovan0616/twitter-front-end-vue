<template>
  <div class="container d-flex">
    <AdminNav />
    <AdminUserCard />
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminUserCard from "../components/AdminUserCard";

export default {
  components: {
    AdminNav,
    AdminUserCard,
  },
};
</script>

<style scoped>
</style>