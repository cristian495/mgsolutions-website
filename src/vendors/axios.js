import Axios from 'axios'

const axios = Axios.create({
    // baseURL: `http://128.199.52.118/api`,
    // baseURL: `https://mgsolutiongroup.com/api`,
    // baseURL: "http://localhost:8081",
    baseURL: "http://http://3.134.253.37",
    headers: { 'Accept': 'application/json' }
})

export const axiosNextAPI = Axios.create({
    // baseURL: `http://128.199.52.118/api`,
    // baseURL: `https://mgsolutiongroup.com/api`,
    baseURL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    headers: { 'Accept': 'application/json' }
})

export default axios