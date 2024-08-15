import Axios from "axios"

const axios = Axios.create({
  baseURL: "https://api.mymemory.translated.net",
  headers: {
    "Content-Type": "application/json",
  },
})

export default axios
