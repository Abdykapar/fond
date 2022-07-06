import axios from 'axios'

axios.defaults.baseURL = 'http://165.227.147.217:8888/api'
axios.defaults.headers.common.Accept = 'application/json'

const newsPrefix = '/news'
const linksPrefix = '/links'
const galleryPrefix = '/gallery'

export const state = () => ({
  gallery: [],
  links: [],
  news: [],
})

export const actions = {
  fetchGallery({ commit }) {
    return axios.get(galleryPrefix).then((res) => {
      commit('SET_GALLERY', res.data)
    })
  },
  fetchLinks({ commit }) {
    return axios.get(linksPrefix).then((res) => {
      commit('SET_LINKS', res.data)
    })
  },
  fetchNews({ commit }) {
    return axios.get(newsPrefix).then((res) => {
      commit('SET_NEWS', res.data)
    })
  },
}

export const mutations = {
  SET_GALLERY(state, data) {
    state.gallery = data
  },
  SET_LINKS(state, data) {
    state.links = data
  },
  SET_NEWS(state, data) {
    state.news = data
  },
}
