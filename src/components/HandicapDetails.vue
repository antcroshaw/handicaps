<template>
<h1>Handicap Details</h1>
  <p>The handicap id is : {{ id }}</p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id === id">
    Name: {{ handicap.name }}
      <div v-for="(score,index) in handicap.scores" :key="index">
        <p> {{ score }} <button @click="increaseScore(index,handicap.name)">+</button><button @click="decreaseScore(index,handicap.name)">-</button></p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      payload: {
        name: '',
        index: null
      }
    }
  },
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }
  },
  methods: {
    increaseScore (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/addOneToScore', this.payload)
    },
    decreaseScore (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/subtractOneFromScore', this.payload)
    }
  }
}
</script>

<style scoped>

</style>
