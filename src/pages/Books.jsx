import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import book from "../assets/coding.jpg"
import success from "../assets/success.jpg"
import edge from "../assets/edge.jpg"
import artOfLove from "../assets/artOfLove.jpg"
import BookCard from "../components/BookCard";

const Books = () => {
  const books = [
    {
      id:1,
      title:"Coding backend",
      author:"promise ukay",
      genre:"Technology",
      image: book
    },
    {
      id:2,
      title:"Business management",
      author:"Kevoo Software",
      genre:"Business",
      image: success
    },
    {
      id:3,
      title:"The art of love",
      author:"Josephine Nthiga",
      genre:"Love story",
      image: artOfLove
    },
    {
      id:4,
      title:"The edge of the unknown",
      author:"Abdul Auf",
      genre:"History",
      image: edge
    }
  ]
  return (
    <section className="bg-gray-200">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 px-6 min-h-[90vh]">
        <h1 className="text-lg md:text-4xl pt-4 md:pt-0 font-bold mb-6 text-black">
          Available books
        </h1>
        <button className="bg-blue-300 text-white px-5 py-2 rounded-xl hover:scale-105 transition fixed shadow-lg z-50 text-base sm:text-lg md:text-xl right-5 top-18 cursor-pointer">Add Book</button>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {
            books.map((book)=> (
              <BookCard
                key={book.id}
                book={book}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Books;