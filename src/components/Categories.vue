<template>
  <h1>Categories</h1>
  <ul>
    <li v-for="category in categories" :key="category.id"> {{ category.name }}</li>
  </ul>
<!--  <div v-for="handicap in handicaps" :key="handicap.id">-->
<!--    <router-link :to="{-->
<!--     name: 'HandicapDetails',-->
<!--     params: {-->
<!--       id: handicap.id,-->
<!--       name: handicap.name,-->
<!--     }-->
<!--   }">{{ handicap.name }}</router-link>-->
<!--  </div>-->
  <router-view></router-view>
<!--  <form @submit.prevent="submitForm">-->
<!--    <div class="form-group">-->
<!--      <label for="addHandicapName">Add Handicap Name: </label>-->
<!--      <input class="text" name="addHandicapName" id="addHandicapName" v-model="newHandicapName"/>-->
<!--      <button type="submit" @click="addHandicapName(newHandicapName)">Add</button>-->
<!--      <p class="errors" v-if="!formIsValid">Please enter a valid and non-empty name</p>-->

<!--    </div>-->

<!--  </form>-->
</template>
<script>
export default {
  computed: {
    categories () {
      return this.$store.getters['handicaps/categories']
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
