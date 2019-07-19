import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/posts'
})
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
