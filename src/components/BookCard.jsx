import MotionWrapper from "./MotionWrapper";

const BookCard = ({book, onClick}) => {
  return(
    <MotionWrapper>
    <div className="relative md:h-60 max-w-md md:w-40 mx-auto md:mx-0 cursor-pointer">
      <img
        src={book.image} 
        alt={book.title}
        className="h-90 md:h-full w-full object-cover" 
      />
      <div onClick={onClick} className="absolute flex items-center justify-center font-semibold opacity-0 hover:opacity-100 transition-opacity text-sm text-white inset-0 bg-black/50">
        Click to view
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm">By {book.author}</p>
        <div className="">
          <button
            className="bg-blue-300 mt-5 w-full cursor-pointer text-white py-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
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