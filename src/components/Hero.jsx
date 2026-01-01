import MotionWrapper from "../components/MotionWrapper"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-slate-900/90 text-white p-8 rounded-lg">
      <div className="max-w-7xl mx-auto pz-6 grid md:grid-cols-2 gap-16">
        <MotionWrapper>
          <h1 className="tex-6xl font-extrabold leading-tight">
            Share Books
            <br/>
            <span className="text-white">Discover new stories!</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-xl">
            BookSwap helps readers exchange books they love instead of letting
            them collect dust. Browse, request swaps, and grow your personal
            library - effortlessly.
          </p>
          <div className="mt-10 flex gap-6">
            <Link to="/books" className="bg-blue-400 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
              Browse books
            </Link>
            <button className="border border-muted hover:border-gray-300 px-8 py-4 hover:scale-105 transition rounded-xl cursor-pointer">
              How it works
            </button>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
            <ul className="list-disc list-inside space-y-2">
              <li>List books you own</li>
              <li>Request swaps</li>
              <li>Read more</li>
              <li>Spend less</li>
            </ul>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}

export default Hero;