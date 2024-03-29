import { Header, Footer } from "./index.js"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { scrollToTop as ScrollTop } from "./assets/scrollToTop.js"
import { CartContext } from "./context/CartContext.js"


function Root() {
  let [cartQuantity, setCartQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);


  return (
    <>
      <CartContext.Provider value={{cartQuantity, setCartQuantity, cartProducts, setCartProducts}}>
        <ScrollTop />
        
        <Header/>
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </>
  )
}

export default Root
