<template>
  <div class="container-fluid text-center">
    <router-link v-show="isUserLoggedIn" to="/report/create" class="btn btn-primary">Skapa ny post</router-link>
    <h3>Veckorapporter</h3>
    <h3 v-for="report in reports" v-bind:key="report._id">
      <router-link :to="{name: 'report', params:{id: report._id}}">{{ report.title }}</router-link>
    </h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "reports",
  components: {},
  data() {
    return {
      idtest: 1,
      reports: []
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.user.token;
    }
  },
  methods: {
    getReports: function() {
      axios
        .get(this.$store.state.baseURL + "/reports")
        .then(res => (this.reports = res.data.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getReports();
  }
};
</script>

<style scoped>
.link {
  font-size: 100px;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>