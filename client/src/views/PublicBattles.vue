<template>
  <div>
    <h3 class="text-center">Daily Startup Battles</h3>
    <hr />

    <div v-for="battle in publicBattles" :key="battle.id" class="col-sm-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{ battle.name }}</h3>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Sponsor: </span> {{ battle.sponsor }}</p>
          <p>
            <span class="badge alert-danger"> SeedFund: </span>
            <strong> ${{ battle.seedFund }} </strong>
          </p>
        </div>
      </div>
    </div>

    <div v-if="$auth.isAuthenticated && !$auth.loading" class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View Private Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/private-battles"
          >Private Startup Battles</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
const url = `${process.env.VUE_APP_API_URL}/api/battles/public`;

export default {
  name: 'PublicBattles',
  data() {
    return {
      publicBattles: []
    };
  },
  async mounted() {
    await this.getPublicStartupBattles();
  },
  methods: {
    async getPublicStartupBattles() {
      const { data } = await this.$http.get(url);
      this.publicBattles = data;
    }
  }
};
</script>

<style scoped></style>
