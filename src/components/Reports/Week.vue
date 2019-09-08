<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Week {{ $route.params.id }}</h1>
        <p>För att skapa ett vue projekt skriver man "vue create projektnamn" i cygwin eller liknande. Det viktiga är att man står i den katalogen som vill skapa projektet i. Med vue ui kommandot får man ett användargräns snitt istället om man inte vill jobba i consolen.</p>
        <h3>Project setup</h3>
        <p>npm install</p>

        <h3>Compiles and hot-reloads for development</h3>
        <p>npm run serve</p>
        <h3>Compiles and minifies for production</h3>
        <p>npm run build</p>
        <h3>Run your tests</h3>
        <p>npm run test</p>
        <h3>Lints and fixes files</h3>
        <p>npm run lint</p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "week",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 20px;
}
</style>