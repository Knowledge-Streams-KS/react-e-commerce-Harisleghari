import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log("This is cart", cart)
  return (
    <>
      <div>Cart</div>
      <div>Details of added Cart</div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  )
}

export default Cart