<template>
<h1>Handicap Details</h1>
  <p><button @click="showDialog" v-if="!dialogIsVisible">Edit</button><button @click="hideDialog" v-if="dialogIsVisible">Done</button></p>
  <div v-for="handicap in handicaps" :key="handicap.id">
    <div v-if="handicap.id === id">
    Name: {{ handicap.name }}
      <div v-for="(score,index) in handicap.scores" :key="index">
        <p> {{ score }} <transition-group name="fade"><button @click="increaseScore(index,handicap.name)" v-if="dialogIsVisible">+
        </button><button @click="decreaseScore(index,handicap.name)" v-if="dialogIsVisible">-</button>
        <button @click="deleteHandicap(index,handicap.name)" v-if="dialogIsVisible">Delete</button></transition-group></p>
      </div>
      <transition-group name="fade">
      <div class="form-group" v-if="dialogIsVisible">
        <form @submit.prevent="submitForm">
            <label for="addHandicap">Add Handicap: </label>
            <input class="text" name="addHandicap" id="addHandicap" v-model="newHandicap.value"/>
            <button type="submit" @click="addHandicap(handicap.name)" >Add</button>
        </form>
      </div>
      </transition-group>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter, .fade-leave-to {
  transition: opacity 0.5s ease-in;
}
</style>
