<template>
<h1>Handicap Details</h1>
  <p>The handicap id is : {{ id }}</p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id == id">
    Name: {{ handicap.name }}
    Scores: {{ handicap.scores }}</div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      scores: '',
      handicap: []
    }
  },
  inject: ['handicaps'],
  created (id) {
    console.log(this.handicaps)
  }
}
</script>

<style scoped>

</style>
