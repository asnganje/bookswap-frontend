import Modal from "./Modal";
import InputField from "./InputField"
import { useState } from "react";
import { PaperClipIcon, XMarkIcon } from "@heroicons/react/16/solid";
import MotionWrapper from "./MotionWrapper";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createBook } from "../redux/thunks/booksThunk";

const GENRES = [
  "Technology",
  "Science",
  "Business",
  "Fiction",
  "Romantic",
  "Action",
  "Academic",
  "Others"
]

const AddBookModal = ({isOpen, onClose}) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [image, setImage ] = useState("")
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("book[title]", title)
    formData.append("book[author]", author)
    formData.append("book[genre]", genre)
    if(image) formData.append("book[image]", image)
    try {
      await dispatch(createBook(formData)).unwrap()
      toast.success("Book added successfully")
      onClose()
    } catch (error) {
      toast.error(error.msg || "Could not add the book")
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className="flex items-center justify-between text-2xl font-bold mb-6">
        Add a new book
        <MotionWrapper>
          <XMarkIcon onClick={onClose} className="h-10 w-10 cursor-pointer"/>
        </MotionWrapper>
      </h2>
      <form onSubmit={submitHandler} className="space-y-2">
        <InputField
          label="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}        
        />
        <InputField
          label="Author"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}        
        />
        <div>
          <label className="text-sm mb-1 block">Genre</label>
          <select
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">Select genre</option>
            {
              GENRES.map((gen)=>(
                <option key={gen} value={gen}>{gen}</option>
              ))
            }
          </select>
        </div>
        <div className="">
          <label className="text-sm mb-1 block">Cover image</label>
          <div className="flex gap-2 w-3/4">
            <PaperClipIcon className="h-5 w-5"/>
            <input 
              type="file"
              accept="image/*"
              onChange={(e)=>setImage(e.target.files[0])}
              className="text-sm cursor-pointer w-1/2"
            />
          </div>
        </div>
        <button
          className="w-full bg-blue-300 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
        >
          Add Book
        </button>
      </form>
    </Modal>
  )
}

export default AddBookModal;