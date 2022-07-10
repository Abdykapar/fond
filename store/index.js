import axios from 'axios'

axios.defaults.baseURL = 'http://165.227.147.217:8888/api'
axios.defaults.headers.common.Accept = 'application/json'

const newsPrefix = '/news'
const linksPrefix = '/links'
const galleryPrefix = '/gallery'
const activityPrefix = '/activity'

export const state = () => ({
  gallery: [],
  links: [],
  news: [],
  singleNews: {},
  singleGallery: {
    images: [],
  },
  events: [],
  event: {},
  orgs: [],
  org: {},
  projects: [],
  project: {},
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
  fetchActivityEvents({ commit }) {
    return axios
      .get(`${activityPrefix}/event`)
      .then((res) => {
        commit('SET_EVENTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityEvent({ commit }, id) {
    return axios
      .get(`${activityPrefix}/event/${id}`)
      .then((res) => {
        commit('SET_EVENT', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityOrgs({ commit }) {
    return axios
      .get(`${activityPrefix}/organization/`)
      .then((res) => {
        commit('SET_ORGS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityOrgSingle({ commit }, id) {
    return axios
      .get(`${activityPrefix}/organization/${id}`)
      .then((res) => {
        commit('SET_ORG', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityProjects({ commit }) {
    return axios
      .get(`${activityPrefix}/activity/project-activity//`)
      .then((res) => {
        commit('SET_PROJECTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityProject({ commit }, id) {
    return axios
      .get(`${activityPrefix}//activity/project-activity/${id}`)
      .then((res) => {
        commit('SET_PROJECT', res.data)
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
  SET_EVENTS(state, data) {
    state.events = data
  },
  SET_EVENT(state, data) {
    state.event = data
  },
  SET_ORGS(state, data) {
    state.orgs = data
  },
  SET_ORG(state, data) {
    state.org = data
  },
  SET_PROJECTS(state, data) {
    state.projects = data
  },
  SET_PROJECT(state, data) {
    state.project = data
  },
  SET_SINGLE_NEW(state, data) {
    state.singleNews = data
  },
}
