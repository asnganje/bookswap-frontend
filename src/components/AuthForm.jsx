import MotionWrapper from "./MotionWrapper";

const AuthForm = ({title, children, onSubmit, btnText}) => {
  return(
    <MotionWrapper.form
      onSubmit={onSubmit}
      className="bg-gray-900 border border-white/10 rounded-3xl p-10 w-full max-w-md"
    >
      <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
      <div className="space-y-6">{children}</div>
      <button
        type="submit"
        className="mt-8 w-full py-3 bg-blue-300 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {btnText}
      </button>
    </MotionWrapper.form>
  )
}

export default AuthForm;