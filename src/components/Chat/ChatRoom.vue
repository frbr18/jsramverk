<template>
  <div>
    <div class="chat-window"></div>
    <div class="messages">
      <div class="message" v-for="message in messages" v-bind:key="message.index">
        <div class="username">{{ message.username }} says:</div>
        <div class="message-text">{{ message.msg }}</div>
      </div>
    </div>
    <form v-on:submit="sendMessage">
      <input type="text" v-model="msg" />
      <button v-on:clic.prevent="sendMessage" v-bind:disabled="!msg">Skicka</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "chatroom",
  props: ["messages"],
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendMessage: function() {
      //   if (!this.msg) {
      //     alert("Skriv in ett meddelande.");
      //     return;
      //   }
      this.$emit("sendMessage", this.msg);
      this.msg = "";
    }
  }
};
</script>

<style>
</style>