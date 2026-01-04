import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <span className="text-white font-bold text-xl">
          <Link to="/">
            BookSwap
          </Link>
        </span>
        {
          !user?
          (<div className="space-x-6 text-muted text-blue-300">
          <Link to="/books" className="hover:text-white font-bold">Books</Link>
          <Link to="/login" className="hover:text-white font-bold">Login</Link>
          <Link to="/register" className="hover:text-white font-bold">Signup</Link>
        </div>): 
          (<div className="space-x-6 text-muted text-blue-300">
          <Link to="/books" className="hover:text-white font-bold">Books</Link>
          <button onClick={logoutHandler} className="hover:text-white cursor-pointer font-bold">Logout</button>
          <Link to="#" className="hover:text-white font-bold">{user.fullname}</Link>
        </div>)
        }
      </div>
    </nav>
  )
}

export default Navbar;