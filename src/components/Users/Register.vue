<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3>Registrera för att använda våra fantastiska funktioner!</h3>
        <p v-if="errors.length">
          <b>Rätta dessa fel.</b>
          <ul class="errors">
            <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
          </ul>
        </p>
        <form @submit="checkForm" method="post" novalidate="true">
          <div class="form-group">
            <label for="name" class="control-label">Namn:</label>
            <input type="text" class="form-control" id="name" v-model="name"/>
          </div>
          <div class="form-group">
            <label for="email" class="control-label">Email-address:</label>
            <input type="email" class="form-control" id="email" v-model="email"/>
          </div>
          <div class="form-group">
            <label for="pwd" class="control-label">Lösenord:</label>
            <input type="password" class="form-control" id="pwd" v-model="password"/>
          </div>
          <div class="form-group">
            <label for="pwd" class="control-label">Lösenord igen:</label>
            <input type="password" class="form-control" id="pwd" v-model="rePassword"/>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-4">
                <label for="sel2">År:</label>
                <input type="number" class="form-control" min="1500" max="2019" v-model="date.year">
              </div>
              <div class="col-sm-4">
                <label for="sel1">Månad:</label>
                <select class="form-control" id="sel1" v-model="date.month">
                  <option v-for="(day, month) in months" v-bind:key="month">{{ month }}</option>
                </select>
              </div>
              <div class="col-sm-4">
                <label for="sel1">Dag:</label>
                <select class="form-control" id="sel1" v-model="date.day">
                  <option v-for="n in months[date.month]" v-bind:key="n">{{ n }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="gdpr" v-model="gdpr">Jag godkänner gdpr.
            </label>
          </div>
          <button v-on:click.prevent="checkForm" type="submit" class="btn btn-success">Registrera</button>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      password: "",
      rePassword: "",
      gdpr: "",
      date: {
        year: "",
        month: "",
        day: ""
      },
      months: {
        "Januari": 31,
        "Februari": 28,
        "Mars": 31,
        "April": 30,
        "Maj": 31,
        "Juni": 30,
        "Juli": 31,
        "Augusti": 31,
        "September": 30,
        "Oktober": 31,
        "November": 30,
        "December": 31
      }
    }
  },
  methods: {
    checkForm: function(e) {

      this.errors = [];

      if (!this.name) {
        this.errors.push("Fyll i ett namn.");
      }
      if (!this.email) {
        this.errors.push("Ett e-mail behövs.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Emailet är inte komplett.");
      }

      if(!this.gdpr) {
        this.errors.push("Kryssa i gdpr.");
      }

      if(!this.password) {
        this.errors.push("Skriv in ett lösenord")
      }

      if(this.password != this.rePassword) {
        this.errors.push("Lösenorden matcher ej.");
      }

      if(!this.date.month || !this.date.day || !this.date.year) {
        this.errors.push("Skriv in ditt födelsedatum");
      }
      if(!this.errors.length) {
        this.errors.push("Registration complete!");
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
input {
  text-align: center;
}
.errors {
  text-align: left;
}
</style>