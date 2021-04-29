export let axios

export default ({ store, $axios }) => {
  console.log(store)
  $axios.defaults.baseURL = process.env.BASE_URL + "/api/"
  $axios.onRequest((config) => {
    config.headers.common["Accept"] = "application/json"
  })
  $axios.onResponse((response) => {
    return Promise.resolve(response)
  })
  $axios.onError((error) => {
    return Promise.reject(error.response)
  })
  axios = $axios
}
