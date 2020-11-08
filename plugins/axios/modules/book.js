import { axios } from '../index.js';

export default {
  getBook(id) {
    return axios.$get(`book/${id}`)
  },

  getBooks() {
    return axios.$get(`books`)
  }

  // searchBooks(search) {
  //   return axios.$get(`search/${search}`)
  // }
}