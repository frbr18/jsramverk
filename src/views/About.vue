<template>
  <div class="container-fluid text-center">
    <div class="row"></div>
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <h2>{{ user.token }}</h2>
      <h1 v-show="user.token">This is an about page</h1>
      <p>Här finner ni en ambitiös kille på 26 år vars födelseplats är Aneby men numera bor i Jönköping. Mina största intressen är datorer och datorspel, vilket har lett till ett intresse för programmering. Annars gillar jag att åka snowboard, umgås med vänner och familj. Jag är arbetsvillig, effektiv, tålmodig, noggrann och samarbetsvillig. Allmänt är jag en mycket lugn person, som vill alla väl.</p>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = this.$store.state.user;
  }
};
</script>
