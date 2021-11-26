<template>
<h1>Handicap Details</h1>
  <p>The handicap id is : {{ id }}</p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id === id">
    Name: {{ handicap.name }}
      <div v-for="(score,index) in handicap.scores" :key="index">
        <p> {{ score }} <button @click="increaseScore(index,handicap.name)">+</button><button @click="decreaseScore(index,handicap.name)">-</button>
        <button @click="deleteHandicap(index,handicap.name)">Delete</button></p>
      </div>
      <div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="addHandicap">Add Handicap: </label>
            <input class="text" name="addHandicap" id="addHandicap" v-model="newHandicap.value"/>
            <button type="submit" @click="addHandicap(handicap.name)" >Add</button>
          </div>

        </form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      // this is required as you cannot send more than one item of data in an action call
      payload: {
        name: '',
        index: null
      },
      newHandicap: {
        value: '',
        name: ''
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
    },
    addHandicap (name) {
      this.newHandicap.name = name
      this.$store.dispatch('handicaps/addNewHandicap', this.newHandicap)
    },
    deleteHandicap (index, name) {
      this.payload.name = name
      this.payload.index = index
      this.$store.dispatch('handicaps/deleteHandicap', this.payload)
    }
  }
}
</script>

<style scoped>

</style>
