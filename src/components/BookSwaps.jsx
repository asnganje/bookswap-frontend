import Footer from "./Footer";
import Navbar from "./Navbar";

const BookSwaps = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-200">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 text-black text-center">
        <div className="text-center max-w-md">
          <h1 className="text-4l font-semibold tracking-tight text-gray-900">
            Book swaps
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            A smarter way to exchange books is on the way
          </p>
          <div className="mt-8 inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-medium cursor-pointer text-white">
            Coming soon!
          </div>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default BookSwaps;