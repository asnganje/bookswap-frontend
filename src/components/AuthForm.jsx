import MotionWrapper from "./MotionWrapper";

const AuthForm = ({title, children, onSubmit, btnText, footer}) => {
  return(
    <form
      onSubmit={onSubmit}
      className="bg-gray-900 border border-white/10 rounded-3xl p-10 w-full max-w-md"
    >
      <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <div className="space-y-2">{children}</div>
      <button
        type="submit"
        className="mt-8 w-full py-3 bg-blue-300 rounded-xl cursor-pointer font-semibold hover:opacity-90 transition"
      >
        {btnText}
      </button>
      {footer && <div className="mt-6 text-sm text-white">{footer}</div>}
    </form>
  )
}

export default AuthForm;