import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers:{
    "Authorization": "Key 9df3d07d827646999ac9738eddc75a3e"
  }
})
