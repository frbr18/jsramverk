<template>
  <div class="container-fluid">
    <h1>Chattrum</h1>
    <p>Username: {{ username }}</p>
    <p>Online: {{ users.length }}</p>
    <ChatRoom v-bind:messages="messages" v-on:sendMessage="this.sendMessage" />
  </div>
</template>

<script>
import io from "socket.io-client";
import ChatRoom from "./ChatRoom";

export default {
  name: "chat",
  components: {
    ChatRoom
  },
  data() {
    return {
      username: "",
      socket: io("http://localhost:3000"),
      messages: [],
      users: []
    };
  },
  methods: {
    joinServer: function() {
      this.socket.on("loggedIn", data => {
        this.messages = data.messages;
        this.users = data.users;
        this.socket.emit("newuser", this.username);
      });

      this.listen();
    },

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
    sendMessage(message) {
      this.socket.emit("msg", message);
    }
  },
  mounted() {
    this.username = prompt("Skriv in ditt användarnamn.", "Anonym");
    if (!this.username) {
      this.username = "Anonym";
    }

    this.joinServer();
  }
};
</script>

<style scoped>
</style>