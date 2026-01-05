import { useEffect, useState } from "react";
import Modal from "./Modal";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/thunks/booksThunk";
import { toast } from "react-toastify";

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
  
  const deleteHandler = async () => {
    try {      
      await dispatch(deleteBook(book.id)).unwrap() 
      toast.success("Book deleted!")
      onClose()
    } catch (error) {
      toast.error(error.message || "Delete failed")
    }
  }
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <img
        src={book?.image}
        className="w-full h-64 object-cover rounded-xl mb-2"
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
      <div className="flex justify-between mt-6">
        <button
          className="bg-red-400 text-white px-3 py-2 rounded-xl hover:opacity-90 transition cursor-pointer hover:scale-105"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <button
          className="bg-blue-300 text-white px-3 py-2 rounded-xl hover:opacity-90 transition cursor-pointer hover:scale-105"
        >
          Update
        </button>
      </div>
    </Modal>
  )
}

export default BookModal;