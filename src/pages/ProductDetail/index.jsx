import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { CartContext } from "../../context/CartContext"

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState({})
    const { setCart } = useContext(CartContext)
    const { productId } = useParams()
    const Navigate = useNavigate()
    const fetchPorducts = () => {
        if (productId) {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then((productRes) => {
                    setProductDetail(productRes.data)
                })
                .catch((e) => {
                    console.log("Error", e)
                })

        }
        else {
            Navigate("/*")

        }
    }

    useEffect(() => {
        fetchPorducts();
    }, [])

    const addToCartBtn = (pd) => {
        console.log("this is pd", pd)
        setCart((prev)=> {
            return [...prev, pd]
        })
        Navigate("/cart")
    }
    return (
        <>
            <div>ProductDetail</div>
            <div>{productDetail.title}</div>
            <button onClick={() => {
                addToCartBtn(productDetail)
            }}>Add to Cart</button>
        </>

    )
}

export default ProductDetail