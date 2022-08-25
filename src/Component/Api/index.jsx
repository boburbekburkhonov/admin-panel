import axios from "axios"

const getCategory = 'http://localhost:1900/category'
const getData = 'http://localhost:1900/'
const getUsers = 'https://reqres.in/api/users'

const Layout ={

  Get_Category: ()=> axios.get(getCategory),

  Get_Post: (params) => axios.post(getCategory, params)

}

const data = {

  Get_Fetch: () => axios.get(getData),

  Get_Users: () => axios.get(getUsers)

}

export default {Layout, data}