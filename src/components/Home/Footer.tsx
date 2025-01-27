import { FacebookLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"

export function Footer () {
    const date = new Date().getFullYear()
   const year = date.toString()

    return (
        <footer className="footer ">
            <div className="footer_lead wrapper small">
                <div className="text">
                <h1 data-animation="header">Let's Work</h1>
                 <button >Contact Us</button>
                </div>
            </div>
            <div className="footer_main wrapper small">
              <div className="top">
              <div className="left">
              <div className="grp-one">
                <div className="btn">
                    <button>Visit Us</button>
                </div>
                <div className="txt">
                <div className="loc">
                     <h3>MaryLand, USA</h3>
                    <ul>
                        
                    </ul>
                </div>
                
                </div>
              </div>
                {/* <div className="grp-one">
                <div className="btn">
                    <button className="vidibile"></button>
                </div>
                <div className="loc">
                     <h3>services</h3>
                     <ul>
                    <li>Youtube</li>
                    <li>Video Editing</li>
                    <li>Social Media</li>
                    <li>Branding</li>
                    <li>CopyWriting</li>
                    <li>Tech</li>
                   </ul>
                </div>
                </div> */}
                {/* <div className="grp-one">
                <div className="btn">
                    <button className="vidibile"></button>
                </div>
                <div className="loc">
                     <h3></h3>
                     <ul>
                   
                 </ul>
                </div>
                </div> */}
                </div>
                <div className="right">
                <div className="grp-one">
                <div className="btn">
                    {/* <button>Stay in Touch</button> */}
                </div>
                {/* <div className="txt">
                <div className="loc">
                     <h3>+1 333 209840</h3>
                     <h3>info@ultimate.com</h3>
                     <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                
                </div> */}
                <div className="icon">
                    <ul>
                        <li><XLogo size={26} weight="fill" /></li>
                        <li><LinkedinLogo size={26} weight="fill" /></li>
                        <li><FacebookLogo size={26} weight="fill" /></li>
                        <li><InstagramLogo size={26} weight="fill" /></li>
                    </ul>
                </div>
              </div>
                </div>
                <div className="right">
                <div className="grp-one">
                <div className="btn">
                    <button>Stay in Touch</button>
                </div>
                <div className="txt">
                <div className="loc">
                     <h3>+1 333 209840</h3>
                     <h3>Service@6tech.media</h3>
                     <ul>
                    {/* <li></li>
                    <li></li>
                    <li></li>
                    <li></li> */}
                  </ul>
                </div>
                
                </div>
              </div>
                </div>
              </div>
              <div className="bottom">
                <div className="first">
                    <div className="img">
                        <img src="https://6tech.media/wp-content/uploads/elementor/thumbs/6Tech-01-qwf41nlldao4eat98yv1ycsg8zc1mouu1dudet61vu.png" alt="logo" />
                    </div>
                </div>
                <div className="second">
                    <p className='reserve'>Copyright ©{year} <span>6tech</span> All rights reserved. Powered by Techpowerinc.</p>
                    </div>
              </div>
            </div>
        </footer>
    )
}