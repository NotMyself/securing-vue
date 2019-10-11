<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> The Ultimate Startup Battle Ground</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <UserWidget />
    </ul>
  </nav>
</template>

<script>
import UserWidget from '@/components/UserWidget.vue';

export default {
  name: 'AppNav',
  components: {
    UserWidget
  }
};
</script>

<style scoped>
.navbar-right {
  margin-right: 0px !important;
}

.log {
  margin: 5px 10px 0 0;
}
</style>
