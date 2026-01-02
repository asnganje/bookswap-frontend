import MotionWrapper from "./MotionWrapper";

const BookCard = ({book}) => {
  return(
    <MotionWrapper>
    <div className="md:h-60 max-w-md md:w-40 mx-auto md:mx-0 cursor-pointer">
      <img
        src={book.image} 
        alt={book.title}
        className="h-90 md:h-full w-full object-cover transform transition-transform duration-300 hover:scale-105" 
      />
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