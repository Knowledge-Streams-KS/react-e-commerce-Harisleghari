import axios from "axios"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/1')
    .then((res)=>{
      console.log(res.data)
    })
  }, [])

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
