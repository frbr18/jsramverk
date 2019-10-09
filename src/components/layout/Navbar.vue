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
          <li>
            <router-link class="link" to="/chat">Chatt</router-link>
          </li>
          <li></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-show="!isUserLoggedIn">
            <router-link class="link" to="/register">
              <span class="glyphicon glyphicon-user"></span> Registrera
            </router-link>
          </li>
          <li>
            <router-link v-show="!isUserLoggedIn" class="link" to="/login">
              <span class="glyphicon glyphicon-log-in"></span> Logga in
            </router-link>
            <router-link v-on:click.native="logOut" v-show="isUserLoggedIn" class="link" to="/">
              <span class="glyphicon glyphicon-log-in"></span> Logga Ut
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isUserLoggedIn() {
      return this.$store.state.user.token;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("cleanUser");
    }
  }
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