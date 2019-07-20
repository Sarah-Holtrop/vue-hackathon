<template>
  <div class="container post"> <!--NOTE Individual post page-->
<div class="row">
  <h5>{{post.author}}</h5>
  <div class="col-10 justify-content-center">
    <h1>{{post.title}}</h1>
    <div class="col-10 float-left">
      <button type="submit" class="btn btn-danger btn-sm">Delete</button>
    </div>
  </div>
</div>

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