<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li>
            <router-link class="link" to="/">Rapporter</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">Om</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  components: {}
};
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
  border-radius: 0;
}

.link {
  font-weight: bold;
  font-size: 20px;
}
</style>