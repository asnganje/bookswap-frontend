import { PlusIcon } from "@heroicons/react/16/solid";

const AddBookButton = ({onClick}) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center bg-blue-300 text-white px-5 py-2 rounded-xl hover:scale-105 transition fixed shadow-lg z-50 text-base sm:text-lg md:text-xl right-5 top-18 cursor-pointer">
      <PlusIcon className="h-5 w-5"/>
      Add Book
    </button>
  )
}

export default AddBookButton;