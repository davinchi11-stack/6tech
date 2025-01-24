import { Link } from "react-router-dom"
import { Slant as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react"

export function Header () {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {



        if (isOpen) {
            document.querySelector("body")?.classList.add("scroll-lock");
        }else{
            document.querySelector("body")?.classList.remove("scroll-lock")
        }

        
        const list = document.querySelectorAll(".header-main .nav-list ul li ")
        
        list.forEach((li) => {
            li.addEventListener("click" , () => {
                setOpen(!open)
            }) 
        })
        

        return () => {
            document.querySelector("body")?.classList.remove("scroll-lock")
        }


    }, [isOpen])

    return (
        <header className="header">
            <div className="header-main wrapper large">
                <nav>
                    <ul className="logo">
                        <li>
                        <img src="https://6tech.media/wp-content/uploads/elementor/thumbs/6techlight-e1730583269632-qwhfbl0kvslzstmfbjyborcr04m8uvthqg5nf3eyfm.png" alt="" />
                        </li>
                    </ul>
                     <div className={`nav-list ${isOpen && 'show'}`}>
                        <ul>
                            <li>
                                <Link to={"/"}>
                                 Home
                                </Link>
                            </li>
                            <li>
                              <Link to={"youtube"}>
                                 Youtube
                                </Link>
                            </li>
                            <li>
                              <Link to={"editing"}>
                               Video  Editing
                                </Link>
                            </li>
                            <li>
                              <Link to={"social-branding"}>
                              Social Media 
                                </Link>
                            </li>
                            <li>
                              <Link to={"social-branding"}>
                              Branding
                                </Link>
                            </li>
                            <li>
                              <Link to={"copy-writing"}>
                                CopyWriting
                                </Link>
                            </li>
                            <li>
                              <Link to={"/tech"}>
                                 Tech
                                </Link>
                            </li>
                            <li>
                            <Link to={"/contact"}>
                            Contact Us
                                </Link>
                            </li>
                        </ul>
                     </div>
                     <div className="mobile">
                     <Hamburger toggled={isOpen} toggle={setOpen}  size={28}/>
                     </div>
                </nav>
            </div>
        </header>
    )
}