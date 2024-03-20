import { useContext } from "react";
import { Navigate } from "react-router-dom";
 
const PrivateRoute = (props) => {
    const {isLogin}  = useContext(UserAuthContext)
    return (
        <>
        {isLogin?<>
            <div>Start of PrivateRoute</div>
            {props.children}
            <div>End of PrivateRoute</div>
        </>:<>
            <Navigate to={"/user/login"} />
        </>}
        </>
    )
}

export default PrivateRoute