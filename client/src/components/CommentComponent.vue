<template>
  <div class="tutorial">
    <img  v-for="comment in comments" src="comment.img" alt="comment image">
  </div>
</template>


<script>
  export default {
    name: 'comment',
    data() {
      return {}
    },
    computed: {
      comments(){
        return this.$store.state.comments
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>