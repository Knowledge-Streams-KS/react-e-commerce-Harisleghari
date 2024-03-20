import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { UserAuthContext } from "../../context/UserAuthContext"
import { useNavigate } from "react-router-dom"

const UserHome = () => {
    const { setIsLogin } = useContext(UserAuthContext)
    const navigate = useNavigate()
    const signOutClickHandler = () => {
        console.log("xyz");
        setIsLogin(false);
        navigate('/user/login')

    }
    return (
        <>
            <div>This is UserHome Page. You are logedIn</div>
            <Outlet />
            <button onClick={() => {
                signOutClickHandler()
            }}>
                SignOut
            </button>
        </>

    )
}

export default UserHome