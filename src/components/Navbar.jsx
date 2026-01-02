import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <span className="text-white font-bold text-xl">
          <Link to="/">
            BookSwap
          </Link>
        </span>
        <div className="space-x-6 text-muted text-blue-300">
          <Link to="/books" className="hover:text-white font-bold">Books</Link>
          <Link to="/login" className="hover:text-white font-bold">Login</Link>
          <Link to="/register" className="hover:text-white font-bold">Signup</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;