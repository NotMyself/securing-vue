<template>
  <li role="presentation" class="dropdown">
    <a
      class="dropdown-toggle"
      data-toggle="dropdown"
      href="#"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <strong>{{ user.name }}</strong>
      &nbsp;
      <img :src="user.picture" alt="user" class="img-circle" width="36" />
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li role="separator" class="divider"></li>
      <li v-if="!$auth.isAuthenticated && !$auth.loading">
        <a href="#" @click.prevent="login">
          Log In <span class="pull-right glyphicon glyphicon-log-in"></span>
        </a>
      </li>
      <li v-if="$auth.isAuthenticated && !$auth.loading">
        <a href="#" @click.prevent="logout">
          Log Out <span class="pull-right glyphicon glyphicon-log-out"></span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import defaultAvatar from '@/assets/chaos.png';

export default {
  name: 'UserWidget',
  data() {
    return {
      defaultAvatar,
      defaultName: 'Anonymous'
    };
  },
  computed: {
    user() {
      if (this.$auth.user) {
        return this.$auth.user;
      } else {
        return {
          name: 'Anonymous',
          picture: defaultAvatar
        };
      }
    }
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: '/' });
    }
  }
};
</script>
