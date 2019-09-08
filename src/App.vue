<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <Navbar />
    <Jumbotron />
    <router-view />
    <Bottom />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/layout/Jumbotron";
import Bottom from "./components/layout/Bottom";

export default {
  name: "app",
  components: {
    Navbar,
    Jumbotron,
    Bottom
  }
};
</script>

<style>
</style>
