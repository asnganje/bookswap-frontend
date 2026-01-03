import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import InputField from "../components/InputField"
import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler = () =>{}
  const changeHandler = (e) =>{
    if(e.target == "email") {
      setEmail(e.target.value)
    }
    if(e.target == "password") {
      setPassword(e.target.value)
    }
    
  }
  return(
    <MotionWrapper className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-slate-900 px-6">
        <AuthForm
          title="LOGIN"
          onSubmit={submitHandler}
          btnText="Login"
          footer={
            <>
              Don't have an account? {"  "}
              <Link to="/register" className="text-blue-300">
                Signup
              </Link>
            </>
          }
        >
          <InputField 
            label="email"
            type="email"
            value={email}
            onChange={changeHandler}
            placeHolder="oscar@gmail.com"
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
    </MotionWrapper>
  )
}

export default Login;