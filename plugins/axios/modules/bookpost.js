import { axios } from "../index.js"

export default {
  getPost(id) {
    return axios.$get(`post/${id}`)
  },

  getBookPost(asin) {
    return axios.$get(`bookPost/${asin}`, {})
  },
}
