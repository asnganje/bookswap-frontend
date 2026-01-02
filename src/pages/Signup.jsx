import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = () => {}

  const changeHandler = (e) => {
    if (e.target == "fullname") {
      setFullname(e.target.value)
    }

    if (e.target == "email") {
      setEmail(e.target.value)
    }

    if (e.target == "password") {
      setPassword(e.target.value)
    }
  }

  return(
    <section className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-dark to-slate-900 px-6 pt-20 pb-5">
        <AuthForm 
          title="REGISTER"
          onSubmit={submitHandler}
          btnText="Register"
          footer={<>
            Already registered? {"  "}
              <Link to="/login" className="text-blue-300">
                Login
              </Link>
          </>}
        >
          <InputField 
            label="Fullname"
            value={fullname}
            onChange={changeHandler}
            placeHolder="Your fullname"
          />
          <InputField 
            label="email"
            type="email"
            value={email}
            onChange={changeHandler}
            placeHolder="you@gmail.com"
          />
          <InputField 
            label="password"
            type="password"
            value={password}
            onChange={changeHandler}
            placeHolder="*********"
          />
        </AuthForm>
      </div>
      <Footer />
    </section>
  )
}

export default Signup;