import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import AddBookButton from "../components/AddBookButton";
import { useEffect, useState } from "react";
import AddBookModal from "../components/AddBookModal";
import BookModal from "../components/BookModal";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/thunks/booksThunk";

const Books = () => {
  const [showBooksModal, setShowBooksModal] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)
  const dispatch = useDispatch()

  const { books } = useSelector((state)=>state.books)
  
  useEffect(()=> {
    dispatch(getBooks())
  },[dispatch])
  return (
    <section className="flex flex-col bg-gray-200 min-h-screen">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto pt-16 px-6">
        <h1 className="text-lg md:text-4xl pt-4 md:pt-0 font-bold mb-6 text-black">
          Available books
        </h1>
        <AddBookButton onClick = {()=> setShowBooksModal(true)}/>
        <AddBookModal 
          isOpen = {showBooksModal}
          onClose = {()=>setShowBooksModal(false)}        
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {
            books.map((book)=> (
              <BookCard
                key={book.id}
                book={book}
                onClick= {()=>setSelectedBook(book)}
              />
            ))
          }
        </div>
        <BookModal
          book={selectedBook}
          isOpen={!!selectedBook}
          onClose={()=>setSelectedBook(null)}
        />
      </div>
      <Footer />
    </section>
  )
}

export default Books;