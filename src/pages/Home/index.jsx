import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>This is Home Page</div>
            <Outlet></Outlet>
        </>

    )
}

export default Home
