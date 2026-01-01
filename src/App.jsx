import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "../src/pages/Landing"
import Books from "../src/pages/Books"
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"

function App() {

  return (
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
          path = "/signup"
          element={<Signup />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
