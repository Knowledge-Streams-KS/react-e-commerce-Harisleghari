import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserAuthContext } from "../../context/UserAuthContext"
const Header = () => {
    const { isLogin } = useContext(UserAuthContext)
    return (
        <>
            {isLogin ? <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
            </> : <>
                <NavLink to="/user">Home</NavLink>
                <NavLink to="/user/login">Products</NavLink>
            </>}
        </>
    )
}

export default Header