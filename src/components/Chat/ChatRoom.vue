<template>
  <div>
    <div class="messages">
      <div class="message" v-for="message in messages" v-bind:key="message.index">
        <div class="message-text">{{ message.msg }}</div>
      </div>
    </div>
    <form v-on:submit="sendMessage">
      <div class="form-group">
        <input class="form-control input-lg" type="text" v-model="msg" />
      </div>
      <button
        class="btn btn-primary btn-lg btn-block"
        v-on:clic.prevent="sendMessage"
        v-bind:disabled="!msg"
      >Skicka</button>
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
      if (!this.msg) {
        alert("Skriv in ett meddelande.");
        return;
      }
      this.$emit("sendMessage", this.msg);
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.input-lg {
  margin-top: 10px;
}
</style>