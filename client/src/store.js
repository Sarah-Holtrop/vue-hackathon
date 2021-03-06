import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex)

const postApi = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    posts: [],
    activePost: {},
    comments: []
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data
    },
    setActivePost(state, data) {
      state.activePost = data
    },
    setComments(state, data) {
      state.comments = data
    }
  },
  actions: {
    // region --Posts --
    async getPosts({ commit, dispatch }) {
      try {
        let res = await postApi.get('posts')
        commit('setPosts', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addPost({ commit, dispatch }, payload) {
      try {
        await postApi.post('posts/', payload)
        dispatch('getPosts')
      } catch (error) {
        console.error(error)
      }
    },
    // #endregion
    // #region --Active Post--
    async deletePost({ commit, dispatch }, payload) {
      try {
        await postApi.delete('posts/' + payload)
        dispatch('getPosts')
        router.push({ name: 'CaptionHome' })
      } catch (error) {
        console.error(error)
      }
    },
    async getOnePost({ commit, dispatch }, payload) {
      try {
        let res = await postApi.get('posts/' + payload)
        commit('setActivePost', res.data)
        dispatch('getCommentsByPost', payload)
      } catch (error) {
        console.error(error)
      }
    },
    setActivePost({ commit }, payload) {
      commit("setActivePost", payload)
    },
    // #endregion
    // #region --Comments --
    async getCommentsByPost({ commit, dispatch }, payload) { //payload is the postId
      try {
        let res = await postApi.get('posts/' + payload + '/comments')
        commit('setComments', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addComment({ commit, dispatch }, payload) {
      try {
        // debugger
        let res = await postApi.post('comments/', payload)
        commit('setComments', res.data)
        // dispatch('getOnePost')s
        dispatch('getCommentsByPost', payload.postId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch }, payload) { //payload is commentId
      try {
        await postApi.delete('comments/' + payload)
        dispatch('getOnePost')
        dispatch('getCommentsByPost')
      } catch (error) {
        console.error(error)
      }
    }
    // #endregion
  }
})
