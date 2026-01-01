import MotionWrapper from "./MotionWrapper"
import { BookOpenIcon,
        ArrowsRightLeftIcon,
        UserGroupIcon
} from "@heroicons/react/16/solid";

const features = [
  {
    icon: BookOpenIcon,
    title: "Browse books",
    description: "Explore books listed by other readers and find your new story!"
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Swap with others",
    description: "Easily request swaps and manage your book exchanges"
  },
  {
    icon: UserGroupIcon,
    title: "Join a community",
    description: "Connect with other readers and grow your personal library!"
  },
]
  
const Features = () => {
  return (
    <section className="py-15 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          Why readers love BookSwap!
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {
            features.map((feature, idx) => (
              <MotionWrapper key={idx} delay={idx*3}>
                <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-5 cursor-pointer">
                  <feature.icon className="w-10 h-10 text-blue-300"/>
                  <h3 className="mt-6 font-semibold text-xl">{feature.title}</h3>
                  <p className="mt-3 text-muted">{feature.description}</p>
                </div>
              </MotionWrapper>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features;