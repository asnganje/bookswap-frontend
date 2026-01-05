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
  
  // const books1 = [
  //   {
  //     id:1,
  //     title:"Coding backend",
  //     author:"promise ukay",
  //     genre:"Technology",
  //     image: book
  //   },
  //   {
  //     id:2,
  //     title:"Business management",
  //     author:"Kevoo Software",
  //     genre:"Business",
  //     image: success
  //   },
  //   {
  //     id:3,
  //     title:"The art of love",
  //     author:"Josephine Nthiga",
  //     genre:"Love story",
  //     image: artOfLove
  //   },
  //   {
  //     id:4,
  //     title:"The edge of the unknown",
  //     author:"Abdul Auf",
  //     genre:"History",
  //     image: edge
  //   }
  // ]
  return (
    <section className="bg-gray-200">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 px-6 min-h-screen">
        <h1 className="text-lg md:text-4xl pt-4 md:pt-0 font-bold mb-6 text-black">
          Available books
        </h1>
        <AddBookButton onClick = {()=> setShowBooksModal(true)}/>
        <AddBookModal 
          isOpen = {showBooksModal}
          onClose = {()=>setShowBooksModal(false)}        
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
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