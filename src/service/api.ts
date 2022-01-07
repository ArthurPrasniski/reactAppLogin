import axios from "axios"

export const api = axios.create({
  baseURL: 'http://ec2-18-228-245-210.sa-east-1.compute.amazonaws.com:3000/auth'
})