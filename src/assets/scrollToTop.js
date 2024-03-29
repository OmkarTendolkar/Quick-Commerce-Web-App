import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export const scrollToTop = () => {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])
  
}