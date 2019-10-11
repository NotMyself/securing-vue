<template>
  <div>
    <h3 class="text-center">Secret Startup Battles</h3>
    <hr />

    <div v-for="battle in privateBattles" :key="battle.id" class="col-sm-4">
      <div class="panel panel-danger">
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

    <div class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View Public Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/"> Public Startup Battles </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const url = `${process.env.VUE_APP_API_URL}/api/battles/private`;

export default {
  name: 'PrivateBattles',
  data() {
    return {
      privateBattles: []
    };
  },
  async mounted() {
    this.getPrivateStartupBattles();
  },
  methods: {
    async getPrivateStartupBattles() {
      const accessToken = await this.$auth.getTokenSilently();
      const { data } = await this.$http.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      this.privateBattles = data;
    }
  }
};
</script>

<style scoped></style>
