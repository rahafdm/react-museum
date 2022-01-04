import axios from "axios"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast } from "react-toastify"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MuesumContext from "./utils/MuesumContext"

function App() {
  const [collections, setCollections] = useState([])
  const [userCollection, setUserCollection] = useState([])
  const [profile, setProfile] = useState([])

  const getCollection = async () => {
    const response = await axios.get("http://localhost:5000/api/collections")
    setCollections(response.data)
  }

  const getUserCollection = async () => {
    const response = await axios.get("http://localhost:5000/api/userCollections")
    setUserCollection(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile" , {
      headers: {
        Authorization: localStorage.tokenMesuem,
      },
    })
    setProfile(response.data)
  }

  const logout = () => {
    localStorage.removeItem("tokenMuseum")
    console.log("logout success")
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target 
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody )

    const token = response.data
    localStorage.tokenMesuem = token

    getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }

  const signUp = async e => {
    try{
     const form = e.target
     const userBody = {
       firstName : form.elements.firstName.value,
       lastName : form.elements.lastName.value,
       email : form.elements.lastName.value,
       phoneNumber : form.elements.phoneNumber.value,
       password : form.elements.password.value,
     }
        await axios.post("http://localhost:5000/api/auth/signup", userBody)

     toast.success("user created, pleace check your email for verification link ")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }

  const store = {
    logout,
    login,
    signUp,
  }

  return (
    <MuesumContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </MuesumContext.Provider>
  )
}

export default App
