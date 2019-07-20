<template>
  <div class="container post">
    <!--NOTE Individual post page-->
    <div class="row">
      <h5>Author: {{post.author}}</h5>
      <div class="col-12 justify-content-center">
        <h1>Title: {{post.title}}</h1>
        <div class="col-12 float-left">
          <!-- <button type="submit" class="btn btn-danger btn-sm text-align-center mb-2">Delete</button> -->
          <button class="btn btn-danger mb-2" @click="deletePost">Delete</button>
        </div>
      </div>
    </div>

    <form @submit.prevent="addComment">
      <div class="card card-body">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Add image URL</span>
          </div>
          <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
            v-model="newComment.img">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    <!-- <div class="row"> -->

    <!-- <div class="card" style="width: 18rem;">
  <img class="comment in comments" :src="comment.img" alt="">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->

    <div class="card card-body">
      <img v-for="comment in comments" :src="comment.img" alt="">

      <!-- </div> -->

    </div>


  </div>
</template>

<script>
  // import CommentComponent from '@/components/CommentComponent.vue'
  export default {
    name: 'post',
    props: ["postId"],
    data() {
      return {
        newComment: {
          img: "",
          postId: this.postId
        }
      }
    },
    mounted() {
      if (!this.$store.state.activePost._id) {
        this.$store.dispatch('getOnePost', this.$route.params.postId)
      }
    },
    computed: {
      post() {
        return this.$store.state.activePost
      },
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.postId)
      },
      addComment() {
        // debugger
        this.$store.dispatch('addComment', this.newComment)
      }
    },
    components: {
      // CommentComponent
    }
  }
</script>


<style scoped>
  img {
    object-fit: scale-down;
    height: 100px;
    /* background-repeat: no-repeat */
  }
</style>