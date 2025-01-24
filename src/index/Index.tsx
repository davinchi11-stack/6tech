import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Home/Footer"
import { useEffect } from "react"
import { useLocated } from "../Hook/useLocate"
import { scrollAnimate } from "../animation/animation"
import scrollLenis from "../animation/lenisScroll"
import { skew } from "../animation/skew"


export function Index () {
    const {loc} = useLocated()
  const { pathname } = useLocation();
  
  useEffect(() => {
   loc()
    scrollLenis()
      scrollAnimate()
      skew()
  }, [pathname]);
 

    return (
        <div className="index">
            <Header/>
             <main>
                <Outlet/>
             </main>
             <Footer/>
        </div>
    )
}