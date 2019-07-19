import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const postApi = axios.create({
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
    // region --Posts --
    async getPosts({ commit, dispatch }) {
      try {
        let res = await postApi.get('')
        commit('setPosts', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addPost({ commit, dispatch }, payload) {
      try {
        await postApi.post('', payload)
        dispatch('getPosts')
      } catch (error) {
        console.error(error)
      }
    },
    // #endregion
    // #region --Active Post--
    async deletePost({ commit, dispatch }, payload) {
      try {
        await postApi.delete('' + payload)
        dispatch('getPosts')
      } catch (error) {
        console.error(error)
      }
    },
    async getOnePost({ commit, dispatch }, payload) {
      try {
        let res = await postApi.get('' + payload)
        commit('setActivePost', res.data)
      } catch (error) {
        console.error(error)
      }
    }
    // #endregion
  }
})
