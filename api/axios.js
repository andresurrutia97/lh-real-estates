import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseUrl,
})

export default instance
