import Swal from 'sweetalert2'
import axios from 'axios'

const baseURL = 'https://krll-twitter-api.herokuapp.com/'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 3000,
})

