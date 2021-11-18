<template>
<h1>Handicaps</h1>
 <div v-for="handicap in handicaps" :key="handicap.id">
   <router-link :to="{
     name: 'HandicapDetails',
     params: {
       id: handicap.id
     }
   }">{{ handicap.name }}</router-link>
 </div>
  <router-view></router-view>
</template>
<script>
export default {
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }

  }
}
</script>
<style scoped>

</style>
