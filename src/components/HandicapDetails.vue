<template>
<h1>Handicap Details</h1>
  <base-card>
  <p><base-button @click="showDialog" v-if="!dialogIsVisible">Edit</base-button><button @click="hideDialog" v-if="dialogIsVisible">Done</button></p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id === id" >
      <table id="scores"><th id="table-heading">{{ handicap.name }}</th><tr v-for="(score,index) in handicap.scores" :key="index">
          <td>{{ score }}</td><td><button @click="increaseScore(index,handicap.name)" v-if="dialogIsVisible">+
        </button><button @click="decreaseScore(index,handicap.name)" v-if="dialogIsVisible">-</button>
          <button @click="deleteHandicap(index,handicap.name)" v-if="dialogIsVisible">Delete</button></td></tr></table>
      </div>
    </div>
    <div class="form-group" v-if="dialogIsVisible">
      <form @submit.prevent="submitForm">
        <label for="addHandicap">Add Handicap: </label>
        <input class="text" name="addHandicap" id="addHandicap" v-model="newHandicap.value"/>
        <button type="submit" @click="addHandicap(handicap.name)" >Add</button>
      </form>
    </div>
  </base-card>
</template>

<script>
import BaseButton from './ui/BaseButton'
import BaseCard from './ui/BaseCard'
export default {
  components: { BaseCard, BaseButton },
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
      },
      animatedBlock: false,
      dialogIsVisible: false
    }
  },
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }
  },
  methods: {
    showEdit () {
      this.showEditControls = !this.showEditControls
    },
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
    },
    animateBlock () {
      this.animatedBlock = true
    },
    showDialog () {
      this.dialogIsVisible = true
    },
    hideDialog () {
      this.dialogIsVisible = false
    }
  }
}
</script>

<style scoped>
#scores {
  margin: 0 auto; /* or margin: 0 auto 0 auto */
  text-align: center;
  border: none;
}
#table-heading {
  text-align: center;

}
</style>
