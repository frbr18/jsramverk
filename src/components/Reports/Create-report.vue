<template>
  <div class="container-fluid text center">
    <div class="row">
      <form method="post">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="control-label">Title</label>
            <input type="text" class="form-control" v-model="title" />
          </div>
          <div class="form-group">
            <label class="control-label">Content</label>
            <textarea class="form-control input-large" v-model="content" />
          </div>
          <button v-on:click.prevent="createReport" type="submit" class="btn btn-success">Skapa</button>
        </div>
        <div class="col-md-4"></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "create-report",
  data() {
    return {
      title: "",
      content: "",
      errors: []
    };
  },
  methods: {
    createReport: function() {
      this.errors = [];
      //validate content
      if (!this.title || !this.content) {
        this.errors.push("Det fattas info");
      }
      //post content to db
      axios
        .post(this.$store.state.baseURL + "/reports/create", {
          title: this.title,
          content: this.content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      if (!this.errors.length) {
        this.$router.push("/report");
      }
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
  height: 200px;
}
</style>