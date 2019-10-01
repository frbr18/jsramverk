<template>
  <div class="container-fluid text-center">
    <form method="post">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <p v-if="errors.length">
                <b>Rätta dessa fel.</b>
                <ul class="errors">
                    <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
                </ul>
            </p>
          <div class="form-group">
            <label for="email" class="control-label">Email-address</label>
            <input class="form-control" type="email" id="email" v-model="email" />
          </div>
          <div class="form-group">
            <label for="pwd" class="control-label">Lösenord</label>
            <input class="form-control" type="password" id="pwd" v-model="password" />
          </div>
          <button type="submit" v-on:click.prevent="checkForm" class="btn btn-success">Logga in</button>
        </div>
        <div class="col-md-4"></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";
import {mapActions} from 'vuex';

export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    ...mapActions([]),
    checkForm: async function() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Ett e-mail behövs.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Emailet är inte komplett.");
      }
      if (!this.password) {
        this.errors.push("Skriv in ett lösenord");
      }
      if (!this.errors.length) {
        await axios
          .post(this.$store.state.baseURL + "/user/login", {
              email: this.email,
              password: this.password
            }
          )
          .then(res => this.$store.dispatch('setUser', res.data.data)).catch(err => console.log(err));
        this.$router.push("/");
      }
    },
    validEmail: function(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
</style>