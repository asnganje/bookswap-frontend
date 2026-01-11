import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField"
import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/thunks/authThunk";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading} = useSelector((state)=>state.auth)

  const submitHandler = async (e) =>{
    e.preventDefault()
    const user = {
      email,
      password
    }
    try {
      
      const result = await dispatch(loginUser(user)).unwrap()      
      toast.success(result.msg)
      navigate("/books")
    } catch (error) {
      toast.error(error.error || "Login failed!")
    }
  }

  const changeHandler = (e) =>{
    const {name, value} = e.target
    if(name == "email") setEmail(value)
    if(name == "password") setPassword(value)    
  }
  return(
    <MotionWrapper className="">
      <Navbar />
      <div className="min-h-[90vh] flex items-center justify-center bg-linear-to-br from-dark to-slate-900 pt-5 -mb-5 px-6">
        <AuthForm
          title="LOGIN"
          onSubmit={submitHandler}
          disabled={loading}
          btnText={loading? "Logging you in...":"Login"}
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
            name="email"
            value={email}
            onChange={changeHandler}
            placeHolder="oscar@gmail.com"
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

export default Login;