import Products from "./pages/Products/index"
import ErrorHandling from "./pages/ErrorHandling/index"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import UserHome from "./pages/UserHome/index"
import Cart from "./pages/Cart/index"
import Header from "./components/Header/index"
import ProductDetail from './pages/ProductDetail/index';
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/products/:categoriesId?" element={<Products />} />
        <Route path="/product-details/:productId?" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorHandling />} />
        <Route path="/user" element={<Home />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>

        </Route>
      </Routes>

    </>
  )
}

export default App
