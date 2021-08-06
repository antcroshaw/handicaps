<template>
<h1>Handicaps</h1>
 <div v-for="handicap in handicaps" :key="handicap.id">
   <router-link :to="{
     name: 'handicaps',
     params: handicap.id
   }">{{ handicap.name }}</router-link>
 </div>
  <router-view></router-view>
</template>
<script>
export default {
  inject: ['handicaps']
}
</script>
<style scoped>

</style>
