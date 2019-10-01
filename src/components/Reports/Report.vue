<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>{{ report.title }}</h1>
        <p>{{ report.content }}</p>
        <router-link
          v-show="isUserLoggedIn"
          :to="'/report/edit/'+ $route.params.id"
          class="btn btn-success"
        >Redigera rapport</router-link>
        <button
          v-show="isUserLoggedIn"
          v-on:click.prevent="deletePost"
          class="btn btn-danger"
        >Ta bort post</button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "report",
  components: {},
  data() {
    return {
      report: {}
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.user.token;
    }
  },
  methods: {
    deletePost: function() {
      const id = this.report._id;
      console.log(id);
      const URL = this.$store.state.baseURL + "/reports/delete/" + id;
      axios
        .delete(URL)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.$router.push("/report");
    }
  },
  created() {
    const route =
      this.$store.state.baseURL + "/reports/" + this.$route.params.id;
    axios
      .get(route)
      .then(res => (this.report = res.data.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 20px;
}
.btn {
  margin: 2px;
}
</style>