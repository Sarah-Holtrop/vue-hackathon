import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/posts'
})

export default new Vuex.Store({
  state: {
    posts: [],
    activePost: {}
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data
    },
    setActivePost(state, data) {
      state.activePost = data
    }
  },
  actions: {
    async getPosts({ dispatch, commit }) {
      try {
        let res = await api.get('')
        commit("setPosts", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    // if we need to receive more than one value we use a payload parameter and expect it to be an object
    async getPostById({ dispatch, commit }, payload) {
      try {
        let res = await api.get('' + payload.postId)
        commit('setActivePost', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deletePost({ dispatch, commit }, payload) {
      try {
        //payload was our carId from the car.vue component method deleteCar
        let res = await api.delete('posts/' + payload)
        //we could go get all the cars again but we are just gonna push back to the cars view which already on mounted makes a request to get all the cars. if we were able to delete on the cars view we would call get all cars again
        // dispatch('getCars')
        router.push({ name: 'posts' })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async addPost({ dispatch, commit }, payload) {
      try {
        let res = await api.post('', payload)
        dispatch('getPosts')
      } catch (error) {
        console.error(error)
        console.log("It works!")
      }
    },
  }
})
