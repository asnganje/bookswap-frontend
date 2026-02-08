import { Link } from "react-router-dom";

const DropModal = ({name, logout, closeMenu}) => {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-0 top-17 h-screen">
      <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm pl-10 pr-5"
      onClick={closeMenu}
      >
      <div
        className="absolute top-0 right-5 bg-white flex flex-col w-50"
      >
        { !name?
          <div className="flex flex-col py-5">
              <Link to="/books" onClick={closeMenu} className="block px-4 py-3 text-sm hover:bg-gray-300">
                Books
              </Link>
              <Link to="/login" onClick={closeMenu} className="block px-4 py-3 text-sm hover:bg-gray-300">
                Login
              </Link>
              <Link to="/register" onClick={closeMenu} className="block px-4 py-3 text-sm hover:bg-gray-300">
                Signup
              </Link>
            </div>
        :
        <>
        <div className="px-4 py-3 text-sm font-semibold border-b hover:bg-gray-300 cursor-pointer">
          {name}
        </div>
        <Link
          to="/book-swaps"
          onClick={closeMenu}
          className="block px-4 py-3 text-sm hover:bg-gray-300"
        >
          Swap requests
        </Link>
        <Link to="/books" onClick={closeMenu} className="block px-4 py-3 hover:text-sm hover:bg-gray-300">Books</Link>
        <button
          onClick={logout}
          className="w-full text-left px-4 py-3 text-sm text-red-300 hover:bg-gray-300 cursor-pointer"
        >
          Logout
        </button>
        </>
        }
      </div>
      </div>
    </div>
  );
};
export default DropModal;
