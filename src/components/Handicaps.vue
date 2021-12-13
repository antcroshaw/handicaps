<template>
<h1>Handicaps</h1>
 <div v-for="handicap in handicaps" :key="handicap.id">
   <router-link :to="{
     name: 'HandicapDetails',
     params: {
       id: handicap.id,
       name: handicap.name,
     }
   }">{{ handicap.name }}</router-link>
 </div>
  <router-view></router-view>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="addHandicapName">Add Handicap Name: </label>
      <input class="text" name="addHandicapName" id="addHandicapName" v-model="newHandicapName"/>
      <button type="submit" @click="addHandicapName(newHandicapName)">Add</button>
      <p class="errors" v-if="!formIsValid">Please enter a valid and non-empty name</p>

    </div>

  </form>
</template>
<script>
export default {
  computed: {
    handicaps () {
      return this.$store.getters['handicaps/handicaps']
    }

  },
  data () {
    return {
      newHandicapName: '',
      formIsValid: true
    }
  },
  methods: {
    addHandicapName () {
      this.formIsValid = true
      if (this.newHandicapName === '') {
        this.formIsValid = false
        return
      }
      this.$store.dispatch('handicaps/addNewHandicapName', this.newHandicapName)
      this.newHandicapName = ''
    }
  }
}
</script>
<style scoped>
.errors {
  font-weight: bold;
  color: red;
}

</style>
