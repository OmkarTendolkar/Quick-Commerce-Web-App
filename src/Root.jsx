import Header from "./components/Header"
import Footer from "./components/Footer.jsx"
import { Outlet } from "react-router-dom"
import { scrollToTop as ScrollTop } from "./assets/scrollToTop.js"


function Root() {

  return (
    <>
      <ScrollTop />
      
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
