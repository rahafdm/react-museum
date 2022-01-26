import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import AllCollections from "./pages/AllCollections"
import AllUserCollections from "./pages/AllUserCollections"
import OneUserCollection from "./pages/OneUserCollection"
import MuesumContext from "./utils/MuesumContext"
import AddUserCollection from "./pages/AddUserCollection"

function App() {
  const [collections, setCollections] = useState([])
  const [userCollections, setUserCollection] = useState([])
  const [profile, setProfile] = useState({})
  const [types, setTypes] = useState([])
  const [profileShow, setShowProfile] = useState(false)
  const [locations, setLocation] = useState([])
  const [eras, setEras] = useState([])
  const navigate = useNavigate()

  const handleOpenProfile = () => {
    setShowProfile(true)
  }

  const handleCloseProfile = () => {
    setShowProfile(false)
  }

  const addFavCollection = async collectionId => {
    await axios.get(`http://localhost:5000/api/collections/${collectionId}/favCollection`, {
      headers: {
        Authorization: localStorage.tokenMesuem,
      },
    })
    getCollection()
    getProfile()
  }

  const getCollection = async () => {
    const response = await axios.get("http://localhost:5000/api/collections")
    setCollections(response.data)
  }

  const getUserCollection = async () => {
    const response = await axios.get("http://localhost:5000/api/userCollections")
    setUserCollection(response.data)
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })

      setProfile(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getTypes = async () => {
    const response = await axios.get("http://localhost:5000/api/types")
    setTypes(response.data)
  }

  const getLocation = async () => {
    const response = await axios.get("http://localhost:5000/api/locations")
    setLocation(response.data)
    console.log(response.data)
  }

  const getEra = async () => {
    const response = await axios.get("http://localhost:5000/api/eras")
    setEras(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getTypes()
    getCollection()
    getUserCollection()
    if (localStorage.tokenMesuem) {
      getProfile()
    }
    getEra()
    getLocation()
  }, [])

  const logout = () => {
    localStorage.removeItem("tokenMesuem")
    setProfile(null)
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
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody, {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })

      const token = response.data
      localStorage.tokenMesuem = token

      getProfile()
      navigate("/")
    } catch (error) {
      if (error.response) toast.error("المستخدم غير موجود")
    }
  }

  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phoneNumber: form.elements.phoneNumber.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userBody)

      navigate("/")
    } catch (error) {
      if (error.response.data) toast.error(" !المستخدم مسجل بالفعل ")
    }
  }

  const editProfile = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        phoneNumber: form.elements.phoneNumber.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put("http://localhost:5000/api/auth/profile", profileBody, {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })

      getProfile()
    } catch (error) {
      if (error.response) toast.error(" خطأ من السيرفر ")
    }
  }

  // const addComment = async (e, userCollectionId) => {
  //   e.preventDefault()
  //   try {
  //     const form = e.target
  //     const commentBody = {
  //       comment: form.elements.comment.value,
  //     }

  //     form.reset()
  //     await axios.post(`http://localhost:5000/api/userCollections/${userCollectionId}/comments`, commentBody, {
  //       headers: {
  //         Authorization: localStorage.tokenMesuem,
  //       },
  //     })
  //     getUserCollection()
  //     getProfile()
  //     toast.success("  تم اضافة تعليق")
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  // const deleteComment = async (commentId, userCollectionId) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/userCollections/${userCollectionId}/comments/${commentId}`, {
  //       headers: {
  //         Authorization: localStorage.tokenMesuem,
  //       },
  //     })
  //     getUserCollection()
  //     getProfile()
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  const addUserCollection = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }
      const userCollectionBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        location: form.elements.location.value,
        era: form.elements.era.value,
        types: types,
      }
      await axios.post("http://localhost:5000/api/userCollections", userCollectionBody, {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })
      getUserCollection()
      navigate("/userCollection")
    } catch (error) {
      if (error.response) toast.error(" خطأ من السيرفر ")
    }
  }

  const deleteUserCollection = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/userCollections/${id}`, {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })
      getUserCollection()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editUserCollection = async (e, id) => {
    e.preventDefault()
    try {
      const form = e.target
      const types = []
      if (form.elements.types.forEach) {
        form.elements.types.forEach(type => {
          if (type.checked) {
            types.push(type.value)
          }
        })
      } else {
        if (form.elements.types.checked) {
          types.push(form.elements.types.value)
        }
      }
      const userCollectionBody = {
        title: form.elements.firstName.value,
        description: form.elements.lastName.value,
        image: form.elements.phoneNumber.value,
        location: form.elements.location.value,
        era: form.elements.era.value,
        types: types,
      }
      await axios.put(`http://localhost:5000/api/userCollections/${id}`, userCollectionBody, {
        headers: {
          Authorization: localStorage.tokenMesuem,
        },
      })
      getUserCollection()
    } catch (error) {
      if (error.response) toast.error(" خطأ من السيرفر ")
    }
  }

  const store = {
    logout,
    login,
    signUp,
    types,
    collections,
    profile,
    editProfile,
    profileShow,
    handleCloseProfile,
    handleOpenProfile,
    addFavCollection,
    userCollections,
    // addComment,
    // deleteComment,
    addUserCollection,
    deleteUserCollection,
    editUserCollection,
    locations,
    eras,
  }

  return (
    <MuesumContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userCollections" element={<AllUserCollections />} />
        {/* <Route path="/userCollections/:userCollectionId" element={<OneUserCollection />} /> */}
        <Route path="/collections" element={<AllCollections />} />
        <Route path="/addCollection" element={<AddUserCollection />} />
      </Routes>
    </MuesumContext.Provider>
  )
}

export default App
