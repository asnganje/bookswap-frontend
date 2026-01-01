import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "../src/pages/Landing"
import Books from "../src/pages/Books"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
