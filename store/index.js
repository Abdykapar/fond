import axios from 'axios'

axios.defaults.baseURL = 'http://api.iyman.kg/api'
axios.defaults.headers.common.Accept = 'application/json'

const newsPrefix = '/news'
const linksPrefix = '/links'
const galleryPrefix = '/gallery'
const activityPrefix = '/activity'
const frdkPrefix = '/frdk'
const charityPrefix = '/charity'
const donationPrefix = '/donate'
const frdkAboutPrefix = 'about-us/'
const searchPrefix = 'search/'
const mediaPrefix = 'youtube-media/'

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
  chairmans: [],
  chairman: {},
  histories: [],
  history: {},
  charity: {},
  donations: [],
  donation: {},
  frdk: [],
  totalCount: 0,
  searchResult: {},
  media: {},
})

export const actions = {
  fetchGallery({ commit }, page) {
    return axios
      .get(galleryPrefix, { params: { page } })
      .then((res) => {
        commit('SET_GALLERY', res.data.results || [])
        commit('SET_PAGINATION', res.data)
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
  fetchLinks({ commit }, page) {
    return axios
      .get(linksPrefix, { params: { page } })
      .then((res) => {
        commit('SET_LINKS', res.data.results || [])
        commit('SET_PAGINATION', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchMedia({ commit }, page) {
    return axios
      .get(mediaPrefix, { params: { page } })
      .then((res) => {
        commit('SET_MEDIA', res.data.results || [])
        commit('SET_PAGINATION', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchSearch({ commit }, query) {
    return axios
      .get(searchPrefix, { params: { query } })
      .then((res) => {
        commit('SET_SEARCH', res.data || {})
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchNews({ commit }, page) {
    return axios
      .get(newsPrefix, { params: { page } })
      .then((res) => {
        commit('SET_NEWS', res.data.results || [])
        commit('SET_PAGINATION', res.data)
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
      .get(`${activityPrefix}/project-activity/`)
      .then((res) => {
        commit('SET_PROJECTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchActivityProject({ commit }, id) {
    return axios
      .get(`${activityPrefix}/project-activity/${id}`)
      .then((res) => {
        commit('SET_PROJECT', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchFrdkChairmans({ commit }) {
    return axios
      .get(`${frdkPrefix}/chairman-of-the-board/`)
      .then((res) => {
        commit('SET_CHAIRMANS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchFrdkChairman({ commit }, id) {
    return axios
      .get(`${frdkPrefix}/chairman-of-the-board/${id}`)
      .then((res) => {
        commit('SET_CHAIRMAN', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchFrdk({ commit }) {
    return axios
      .get(`${frdkPrefix}/${frdkAboutPrefix}`)
      .then((res) => {
        commit('SET_FRDK', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchFrdkHistories({ commit }) {
    return axios
      .get(`${frdkPrefix}/history-of-creation/`)
      .then((res) => {
        commit('SET_HISTORIES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchFrdkHistory({ commit }, id) {
    return axios
      .get(`${frdkPrefix}/history-of-creation/${id}`)
      .then((res) => {
        commit('SET_HISTORY', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchCharity({ commit }) {
    return axios
      .get(`${charityPrefix}`)
      .then((res) => {
        commit('SET_CHARITY', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchDonations({ commit }) {
    return axios
      .get(`${donationPrefix}/`)
      .then((res) => {
        commit('SET_DONATIONS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchDonation({ commit }, id) {
    return axios
      .get(`${donationPrefix}/${id}`)
      .then((res) => {
        commit('SET_DONATION', res.data)
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
  SET_SEARCH(state, data) {
    state.searchResult = data
  },
  SET_FRDK(state, data) {
    state.frdk = data
  },
  SET_NEWS(state, data) {
    state.news = data
  },
  SET_PAGINATION(state, data) {
    state.totalCount = data.count
  },
  SET_CHARITY(state, data) {
    state.charity = data
  },
  SET_EVENTS(state, data) {
    state.events = data
  },
  SET_EVENT(state, data) {
    state.event = data
  },
  SET_MEDIA(state, data) {
    state.media = data
  },
  SET_DONATIONS(state, data) {
    state.donations = data
  },
  SET_DONATION(state, data) {
    state.donation = data
  },
  SET_CHAIRMANS(state, data) {
    state.chairmans = data
  },
  SET_CHAIRMAN(state, data) {
    state.chairman = data
  },
  SET_HISTORIES(state, data) {
    state.histories = data
  },
  SET_HISTORY(state, data) {
    state.history = data
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
