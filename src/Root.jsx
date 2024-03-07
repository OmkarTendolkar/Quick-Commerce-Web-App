import Header from "./components/Header"
import Footer from "./components/Footer.jsx"
import { Outlet } from "react-router-dom"
import { scrollToTop as ScrollTop } from "./assets/scrollToTop.js"


function Root({data}) {

  return (
    <>
      <ScrollTop />
      
      <Header data={data} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
