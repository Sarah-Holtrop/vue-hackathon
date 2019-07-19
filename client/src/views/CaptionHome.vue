<template>
  <div class="hackathon caption this container">
    <div class="row justify-content-center">
      <div class="col-12">
    <h1>Caption THIS!</h1>
    <button type="button" class="btn btn-primary">Post</button>
</div>
<!--SECTION Sort-by dropdown-->
<div class="row">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      Sort By
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Newest</a>
      <a class="dropdown-item" href="#">Popular</a>
      <a class="dropdown-item" href="#">Favorites</a>
    </div>
  </div>
</div>

</div>

  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {
        newCar: {}
      }
    },
    mounted() {
      this.$store.dispatch('getCars')
    },
    computed: {
      // this references the collection on our store's state
      cars() {
        return this.$store.state.cars
      }
    },
    methods: {
      viewCar(car) {
        // we could pass the car to the state to set as active, but if we refresh we would lose the data in our state and our car view will break, we will trust the view itself to load the correct car from the server
        this.$router.push({ name: 'car', params: { carId: car._id } })

      },
      addCar() {
        this.$store.dispatch('addCar', this.newCar)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 200px;
  }
</style>