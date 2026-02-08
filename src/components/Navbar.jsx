import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";
import logo from "../assets/bkswap.JPG";
import Hamburger from "../assets/Hamburger";
import XIcon from "../assets/XIcon";
import DropModal from "./DropModal";

const Navbar = () => {
  const name = localStorage.getItem("user");
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logged out successfully");
    setIsOpen(false)
  };

  const toggleHandler = () => setIsOpen((prev) => !prev);
  const closeMenu = ()=>setIsOpen(false)
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="" className="w-10 h-8" />
        </Link>
        {isOpen ? <XIcon color="white" onClick={toggleHandler} /> : <Hamburger color="white" size={30} onClick={toggleHandler} />}
        {isOpen && <DropModal name={name} closeMenu={closeMenu} logout={logoutHandler}/>}
        <div className="hidden md:block">
          {!name ? (
            <div className="space-x-6 text-muted text-blue-300">
              <Link to="/books" className="hover:text-white font-bold">
                Books
              </Link>
              <Link to="/login" className="hover:text-white font-bold">
                Login
              </Link>
              <Link to="/register" className="hover:text-white font-bold">
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-6 text-muted text-blue-300">
              <Link to="/books" className="hover:text-white font-bold">
                Books
              </Link>
              <div className="relative">
                <button
                  onClick={() => setVisible((prev) => !prev)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <UserCircleIcon className="h-8 w-8" />
                </button>
                {visible && (
                  <div
                    className="absolute -right-10 w-48 z-50 bg-white rounded-xl shadow-lg border overflow-hidden"
                    onMouseLeave={() => setVisible(false)}
                  >
                    <div className="px-4 py-3 text-sm font-semibold border-b hover:bg-gray-300 cursor-pointer">
                      {name}
                    </div>
                    <Link
                      to="/book-swaps"
                      className="block px-4 py-3 text-sm hover:bg-gray-300"
                    >
                      Swap requests
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left px-4 py-3 text-sm text-red-300 hover:bg-gray-300 cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
