<template>
  <div class="hackathon caption this container">
    <div class="row">
      <div class="col-12">
        <h1>Caption THIS!</h1>

        <p>
          <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
            aria-controls="collapseExample">
            Add Caption
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <form @submit.prevent="addPost">
            <div class="card card-body">
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Author</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                  v-model="newPost.author">
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Caption</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                  v-model="newPost.title">
              </div>
              <button type="submit" class="btn btn-primary">Post</button>
            </div>
          </form>
        </div>

        <!-- <button type="button" class="btn btn-primary">Post</button> -->
        <hr>
      </div>
      <!--SECTION Sort-by dropdown-->
      <div class="row">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle mb-5" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <div class="col-8 card m-2" v-for="post in posts" @click="viewPost(post)">
        <!-- <router-link :to="{ name: 'post', params: { postId }}">
          <h3>{{post.title}}</h3>
          <h5>by {{post.author}}</h5>
        </router-link> -->
        <h3>{{post.title}}</h3>
        <h5>by {{post.author}}</h5>
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
        this.$router.push({ name: 'thread-page', params: { postId: post._id } })
        this.$store.dispatch("setActivePost", post)

      },
      addPost() {
        this.$store.dispatch('addPost', this.newPost)
      },
      // getOnePost() {
      //   this.$store.dispatch('getOnePost', params: { postId: post._id }) 
      // }
    },
    components: {}
  }
</script>


<style scoped>
  /* .card{ */
  /* TODO Style the caption cards however we wish */
  /* } */
</style>