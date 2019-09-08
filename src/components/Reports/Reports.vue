<template>
  <div class="container-fluid text-center">
    <h3>Veckorapporter</h3>
    <router-link to="/report/week/1">Week 1</router-link>
  </div>
</template>

<script>
export default {
  name: "reports",
  components: {},
  data() {
    return {};
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