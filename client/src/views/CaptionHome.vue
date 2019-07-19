<template>
  <div class="hackathon caption this container">
    <div class="row">
      <div class="col-12">
    <h1>Caption THIS!</h1>
    
    <button type="button" class="btn btn-primary">Post</button>
    <hr>
</div>
<!--SECTION Sort-by dropdown-->
<div class="row">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle mb-5" type="button" id="dropdownMenuButton" data-toggle="dropdown"
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
<!--SECTION Captions/Title -->
<div class="row justify-content-center">
  <div class="col-8 card m-1">
    This is some text within a card body where the post "title" will go.
  </div>
  </div>
</div>

</template>


<script>
  export default {
    name: 'captionThis',
    data() {
      return {
        newPost: {}
      }
    },
    mounted() {
      this.$store.dispatch('getPosts')
    },
    computed: {
      // this references the collection on our store's state
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {
      viewPost(post) {
        // we could pass the car to the state to set as active, but if we refresh we would lose the data in our state and our car view will break, we will trust the view itself to load the correct car from the server
        this.$router.push({ name: 'post', params: { postId: post._id } })

      },
      addPost() {
        this.$store.dispatch('addPost', this.newPost)
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