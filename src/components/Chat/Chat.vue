<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 chat">
        <h1>Chattrum</h1>
        <p v-show="!isUserLoggedIn">Logga in för att spara/hämta meddelanden.</p>
        <p>Username: {{ username }}</p>
        <ChatRoom v-bind:messages="messages" v-on:sendMessage="this.sendMessage" />
        <button
          v-show="isUserLoggedIn"
          v-on:click.prevent="saveMessages"
          class="btn btn-success btn-lg"
        >Spara meddelanden</button>

        <button
          v-show="isUserLoggedIn"
          v-on:click.prevent="getMessages"
          class="btn btn-warning btn-lg"
        >Hämta meddelanden</button>
        <p class="text-center" v-show="isUserLoggedIn">(Kan ta lite tid)</p>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import ChatRoom from "./ChatRoom";
import axios from "axios";
/* eslint-disable */
export default {
  name: "chat",
  components: {
    ChatRoom
  },
  data() {
    return {
      username: "",
      //socket: io("http://localhost:8334"),
      socket: io("https://me-socket.frbr18-jsramverk.me"),
      messages: [],
      users: []
    };
  },
  computed: {
    // Computed variable to check if user is logged in
    isUserLoggedIn() {
      return this.$store.state.user.token;
    }
  },
  methods: {
    // Joins the socket server
    joinServer: function() {
      this.socket.emit("newuser", this.username);
      this.socket.on("loggedIn", data => {
        this.messages = data.messages;
        this.users = data.users;
      });

      this.listen();
    },
    // Listens to socket requests?
    listen() {
      this.socket.on("userOnline", user => {
        this.users.push(user);
      });

      this.socket.on("userLeft", user => {
        this.users.splice(this.users.indexOf(user), 1);
      });
      this.socket.on("msg", msg => {
        this.messages.push(msg);
      });
    },
    // Sends message to socket server
    sendMessage(message) {
      this.socket.emit("msg", this.username + ": " + message);
    },
    // Saves the messages to the database
    saveMessages() {
      // Structure some data to send to api
      const messages = this.messages;
      const url = this.$store.state.baseURLmongo + "/msg/add";
      const email = this.$store.state.user.user;
      // Make the api request to save messages
      axios
        .post(url, {
          messages: messages,
          email: email
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    getMessages() {
      const email = this.$store.state.user.user;
      const url = this.$store.state.baseURLmongo + "/msg/message/" + email;

      axios
        .get(url)
        .then(res => (this.messages = res.data.messages))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    // Get the username from the store
    this.username = this.$store.state.user.user;
    if (!this.username) {
      this.username = "Anonym";
    }
    // Send to socket server that a user has come online
    this.socket.emit("msg", this.username + " har anslutit till chatten.");
    this.joinServer();
  },
  beforeDestroy() {
    this.socket.emit("disconnet");
    this.socket.emit("msg", this.username + " har lämnat chatten.");
    this.messages = [];
  }
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
  width: 100%;
}
</style>