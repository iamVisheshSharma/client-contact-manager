import axios from 'axios'

export default axios.create({
  baseURL: "https://service-contact-manager.herokuapp.com/contact",
})