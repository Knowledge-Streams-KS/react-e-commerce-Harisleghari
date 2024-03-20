import { useContext } from "react"
import { UserAuthContext } from "../../context/UserAuthContext"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsLogin } = useContext(UserAuthContext);
  const navigate = useNavigate()
  const handleClickBtn = () => {
    setIsLogin(true)
    navigate("/")
  }
  return (
    <>
      <div>Login Form</div>
      <button onClick={() => {
        handleClickBtn()
      }}>Login</button>
    </>

  )
}

export default Login