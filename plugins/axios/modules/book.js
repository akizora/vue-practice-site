import { axios } from '../index.js';

export default {
  getBook(id) {
    return axios.$get(`books/${id}`)
  },

  getBooks() {
    return axios.$get(`books`)
  }
}