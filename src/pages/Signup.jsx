import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import MotionWrapper from "../components/MotionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/thunks/authThunk";
import { toast } from "react-toastify";

const Signup = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading } = useSelector((state)=>state.auth)
  const submitHandler = async (e) => {
    e.preventDefault()
    const user = { email,
      password,
      fullname
      }
    try {
      const result = await dispatch(registerUser(user)).unwrap()
      toast.success(result.msg)
      navigate("/login")
    } catch (error) {
      toast.error(error.error || "Registration failed!")
    }
    
  }

  const changeHandler = (e) => {
    const {name, value} = e.target
    if (name == "fullname") setFullname(value)
    if (name == "email") setEmail(value)
    if (name == "password") setPassword(value)
  }

  return(
    <MotionWrapper className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-dark to-slate-900 px-6 pt-20 pb-5">
        <AuthForm 
          title="REGISTER"
          onSubmit={submitHandler}
          disabled={loading}
          btnText={loading? "Registering...":"Register"}
          footer={<>
            Already registered? {"  "}
              <Link to="/login" className="text-blue-300">
                Login
              </Link>
          </>}
        >
          <InputField 
            label="Fullname"
            name="fullname"
            type="text"
            value={fullname}
            onChange={changeHandler}
            placeHolder="Your fullname"
          />
          <InputField 
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeHolder="you@gmail.com"
          />
          <InputField 
            label="password"
            type="password"
            name="password"
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

export default Signup;