import { useEffect, useState } from "react";
import Modal from "./Modal";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { deleteBook, updateBook } from "../redux/thunks/booksThunk";
import { toast } from "react-toastify";
import MotionWrapper from "./MotionWrapper"
import { XMarkIcon } from "@heroicons/react/16/solid";

const BookModal = ({isOpen, onClose, book}) => {
  
  const [title, setTitle] = useState(book?.title || "")
  const [author, setAuthor] = useState(book?.author || "")
  const [genre, setGenre] = useState(book?.genre || "")
  const dispatch = useDispatch()

  useEffect(()=> {
    if(book) {
      setTitle(book.title || "")
      setAuthor(book.author || "")
      setGenre(book.genre || "")
    }
  }, [book])
  const data = { title, author, genre }
  const id = book?.id  

  const deleteHandler = async () => {
    try {      
      await dispatch(deleteBook(id)).unwrap() 
      toast.success("Book deleted!")
      onClose()
    } catch (error) {
      toast.error(error.message.split(" ").slice(0,5).join(" ") || "Delete failed")
    }
  }

  const updateBkHandler = async () => {
    try {      
      await dispatch(updateBook({id, data})).unwrap()
      toast.success("Book updated")
      onClose()
    } catch (error) {          
      toast.error(error?.error || error?.message?.split(" ").slice(0,5).join(" ") || "Could not update a book")
    }
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-end justify-end">
        <MotionWrapper>
          <XMarkIcon onClick={onClose} className="h-10 w-10 cursor-pointer"/>
        </MotionWrapper>
      </div>
      <img
        src={book?.image_url}
        className="w-full h-64 object-cover rounded-xl mb-1"
      />
      <InputField
        label = "Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <InputField
        label = "Author"
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
      />
      <InputField
        label = "Genre"
        value={genre}
        onChange={(e)=>setGenre(e.target.value)}
      />
      <div className="flex justify-between mt-3">
        <button
          className="bg-red-400 text-white px-3 py-2 rounded-xl hover:opacity-90 transition cursor-pointer hover:scale-105"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <button
          onClick={updateBkHandler}
          className="bg-blue-300 text-white px-3 pt-2 rounded-xl hover:opacity-90 transition cursor-pointer hover:scale-105"
        >
          Update
        </button>
      </div>
    </Modal>
  )
}

export default BookModal;