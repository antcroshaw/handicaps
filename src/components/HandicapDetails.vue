<template>
<h1>Handicap Details</h1>
  <p>The handicap id is : {{ id }}</p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id === id">
    Name: {{ handicap.name }}
      <div v-for="(score,index) in handicap.scores" :key="index">
        <p> {{ score }} <button @click="increaseScore(index,handicap.name)">+</button><button>-</button></p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }
  },
  methods: {
    increaseScore (index, name) {
      console.log('Name:' + name)
      console.log('Index:' + index)
    }
  }
}
</script>

<style scoped>

</style>
