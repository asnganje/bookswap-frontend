import { useNavigate } from "react-router-dom";
import MotionWrapper from "./MotionWrapper";

const BookCard = ({book, onClick}) => {
  const navigate = useNavigate()
  const swapNavigator = () => {
    navigate("/book-swaps")
  }

  return(
    <MotionWrapper>
    <div className="relative flex flex-col items-center justify-center max-w-md mx-auto md:mx-0 cursor-pointer md:mb-5">
      <img
        src={book.image_url} 
        alt={book.title}
        className="h-80 w-[80%] object-cover" 
      />
      <div onClick={onClick} className="absolute flex items-center justify-center font-semibold opacity-0 hover:opacity-100 transition-opacity text-sm text-white inset-0 h-[75%] w-[80%] mx-auto bg-black/50">
        Click to view
      </div>
      <div className="p-1 w-[80%]">
        <h3 className="font-semibold text-sm">{book.title}</h3>
        <p className="text-sm">By {book.author}</p>
        <div className="">
          <button
            onClick={swapNavigator}
            className="bg-blue-300 mt-5 w-[80%] cursor-pointer text-white py-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            Request swap
          </button>
        </div>
      </div>
    </div>
    </MotionWrapper>
  )
}

export default BookCard;