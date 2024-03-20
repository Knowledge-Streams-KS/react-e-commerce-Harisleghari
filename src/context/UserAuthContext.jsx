import { createContext, useState } from "react";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <UserAuthContext.Provider value={{isLogin, setIsLogin}}>
                {children}
            </UserAuthContext.Provider>
        </>
    )

}

export { UserAuthContext, UserAuthContextProvider }