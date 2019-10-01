<template>
  <div class="container-fluid text center">
    <div class="row">
      <form>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="control-label">Title</label>
            <input type="text" class="form-control" v-model="report.title" />
          </div>
          <div class="form-group">
            <label class="control-label">Content</label>
            <textarea class="form-control input-large" v-model="report.content" />
          </div>
          <button v-on:click.prevent="editReport" type="submit" class="btn btn-success">Redigera</button>
        </div>
        <div class="col-md-4"></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "edit-report",
  data() {
    return {
      report: {}
    };
  },
  methods: {
    editReport: function() {
      const id = this.report._id;
      const title = this.report.title;
      const content = this.report.content;
      const URL = this.$store.state.baseURL + "/reports/edit";
      axios
        .put(URL, {
          id,
          title,
          content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.$router.push("/");
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
textarea {
  resize: none;
  height: 200px;
}
</style>