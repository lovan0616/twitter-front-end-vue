<template>
  <div class="d-flex">
    <AdminNav />
    <AdminTweets />
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminTweets from "../components/AdminTweets";

export default {
  components: {
    AdminNav,
    AdminTweets,
  },
};
</script>