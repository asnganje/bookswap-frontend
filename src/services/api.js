import axios from "axios"

const api = axios.create({
  // baseURL: "http://localhost:3000/api/v1",
  baseURL: "https://bookswap-backend-production-3175.up.railway.app/api/v1",
  headers: {
    Accept: "application/json"
  }
})

api.interceptors.request.use((config)=> {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api;