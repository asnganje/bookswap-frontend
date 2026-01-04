import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"

const ProtectedRoute = ({children}) => {
  const {token} = useSelector((state)=>state.auth)
  // const [showToast, setShowToast] = useState(false)
  useEffect(()=>{
    if(!token){
      toast.error("You must login to access this page!", {toastId:"login-toast"})
    }  
  })
  if(!token) return <Navigate to="/login" replace/>
  return children
}

export default ProtectedRoute