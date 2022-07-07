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
  singleNews: {},
  singleGallery: {
    images: [],
  },
})

export const actions = {
  fetchGallery({ commit }) {
    return axios
      .get(galleryPrefix)
      .then((res) => {
        commit('SET_GALLERY', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchGallerySingle({ commit }, id) {
    return axios
      .get(`${galleryPrefix}/${id}`)
      .then((res) => {
        commit('SET_SINGLE_GALLERY', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchLinks({ commit }) {
    return axios
      .get(linksPrefix)
      .then((res) => {
        commit('SET_LINKS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchNews({ commit }) {
    return axios
      .get(newsPrefix)
      .then((res) => {
        commit('SET_NEWS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchSingleNews({ commit }, id) {
    return axios
      .get(`${newsPrefix}/${id}`)
      .then((res) => {
        commit('SET_SINGLE_NEW', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

export const mutations = {
  SET_GALLERY(state, data) {
    state.gallery = data
  },
  SET_SINGLE_GALLERY(state, data) {
    state.singleGallery = data
  },
  SET_LINKS(state, data) {
    state.links = data
  },
  SET_NEWS(state, data) {
    state.news = data
  },
  SET_SINGLE_NEW(state, data) {
    state.singleNews = data
  },
}
