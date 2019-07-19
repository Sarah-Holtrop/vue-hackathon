<template>
  <div class="post"> <!--NOTE Individual post page-->


  </div>
</template>


<script>
  export default {
    name: 'post',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        postId: this.$route.params.postId
      }
      // if we need to pass more than one argument, we build a payload object to send "dataToSend"
      this.$store.dispatch('getPostById', dataToSend)
    },
    computed: {
      post() {
        return this.$store.state.activePost
      }
    },
    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.post._id)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>