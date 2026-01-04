import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Landing from "../src/pages/Landing"
import Books from "../src/pages/Books"
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path = "/"
            element={<Landing/>}
          />
          <Route
            path = "/books"
            element={<Books />}
          />
          <Route
            path = "/login"
            element={<Login />}
          />
          <Route
            path = "/register"
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose="3000"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App
