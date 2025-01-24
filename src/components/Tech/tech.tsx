import {  CheckCircle, Code, DeviceMobile, XCircle,  } from "@phosphor-icons/react";
import { LightbulbFilament, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

enum Time {
    monthly = "Monthly",
    annually = "Annually"
}

export function Tech () {
    const [time , setTime] = useState(Time.monthly)
    return (
        <section className="home-intro youtube tech">
              <div className="home-intro_main wrapper small">
                <div className="left">
                <h1 data-animation="header">
                Innovative Tech Solutions 
                </h1>
                <h1 data-animation="header">for Tomorrow’s Challenges</h1>
                <div className="icon">
                    <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66795af98b5e014c61f20c02_scribbble-1.svg" alt="icon" />
                </div>
                </div>
                <div className="right">
                    <h3 data-animation="para">
                    Stay ahead of the curve with cutting-edge technology designed to solve
                     tomorrow’s challenges. Our solutions are built to drive efficiency, growth, and innovation in your business.
                    </h3>
                    <h3 data-animation="para">
                    Embrace the future with technology that adapts to your evolving needs. We provide forward-thinking solutions 
                    that not only address current challenges but also prepare you for what’s next.
                    </h3>
                    <div className="arrow">
                <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66796fe43dc4764e1710c495_arrow-p-500.png" alt="arrow" />
               </div>
                </div>
               
            </div>
         
            <div className="intro-card">
              <div className="main wrapper small">
              <div className="left">
                    <h2 data-animation="header">
                    Define Your Brand, 
                    </h2>
                    <h2 data-animation="header">with Cutting-Edge</h2>
                    <h2 data-animation="header">Digital Solutions</h2>
               </div>
               <div className="right">
               <div className="card">
                    <div className="icon">
                    <ShoppingCart size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">E-commerceDevelopment <br /> & Managemen</h3>
                         <p data-animation="para"> Optimize and grow your online store
                         seamlessly.
                      </p>
                    </div>
               </div>
               <div className="card">
                    <div className="icon">
                    <Code size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">
                         Web Development 
                         </h3>
                         <p data-animation="para">
                         Build a powerful digital presence with responsive, engaging  websites.
                        </p>
                    </div >
               </div>
               <div className="card">
                    <div className="icon">
                    <DeviceMobile size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">
                         Mobile Development
                         </h3>
                         <p data-animation="para">    
                         Bring your brand into the mobile world with sleek, user-friendly.
                         </p>
                    </div>
               </div>
               <div className="card">
                    <div className="icon">
                    <LightbulbFilament size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">
                         Product Design
                         </h3>
                         <p data-animation="para">    
                           Design solutions that blend creativity and functionality.

                         </p>
                    </div>
               </div>
               </div>
              </div>
          </div>
          
           <div className="pricing">
              <div className="pricing_main wrapper tablet">
                  <div className="btn">
                  <button onClick={() => setTime(Time.monthly)} className={`${time == Time.monthly && 'active'}`}>Monthly</button>
                     <button onClick={() => setTime(Time.annually)} className={`${time == Time.annually && 'active'}`} >Annually</button>
                  </div>
                  <div className="price">
                   {  time == Time.monthly  &&  <div className="pricing-main monthly">
                         <div className="pricing-card">
                            <div className="card">
                                <div className="pre">
                                    <div className="txt">
                                    <h3>Premium</h3>
                                    <h2>$3,000/<span>monthly</span>
                                    </h2>
                                    </div>
                                    <div className="btn-top">
                                        <button>Buy plan</button>
                                </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2> Senior Full Stack Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior Mobile App Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior UI/UX Designers </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Content Strategists </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Graphics Designer
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro SEO Specialists
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Pro Quality Assurance Testers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Jobs Per Month
                                         </h2>
                                         <p>
                                             1 Max
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Custom Web Development
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Mobile App Development
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         SEO Optimization
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Website Maintenance and Support
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> E-commerce Development & Managment
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Product Design (UI/UX)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No-Code CMSDev. (Wordpress, Webflow, Drupal)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         API Integration
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         10 Days satisfaction guarantee
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (Cancel anytime)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                </div>
                               
                            </div>
                         </div>
                         <div className="pricing-card">
                         <div className="card">
                                <div className="pre">
                                    <div className="txt">
                                    <h3>Pro</h3>
                                    <h2>$7,500/<span>monthly</span>
                                    </h2>
                                    </div><div className="btn-top">
                                        <button>Buy plan</button>
                                </div>
                                    
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2> Senior Full Stack Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior Mobile App Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior UI/UX Designers </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Content Strategists </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Graphics Designer
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro SEO Specialists
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Pro Quality Assurance Testers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>50hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Jobs Per Month
                                         </h2>
                                         <p>
                                             3 Max
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Custom Web Development
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Mobile App Development
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         SEO Optimization
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Website Maintenance and Support
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> E-commerce Development & Managment
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Product Design (UI/UX)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No-Code CMSDev. (Wordpress, Webflow, Drupal)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         API Integration
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         10 Days satisfaction guarantee
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (Cancel anytime)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                </div>

                            </div>
                            </div>
                      </div> }

                     { time == Time.annually &&  <div className="pricing-main annually">
                         <div className="pricing-card">
                            <div className="card">
                                <div className="pre">
                                   <div className="txt">
                                   <h3>Premium</h3>
                                    <h2>$2,800/<span>annually</span>
                                    </h2>
                                    <p>Save $2,400</p>
                                   </div>
                                   <div className="btn-top">
                                        <button>Buy plan</button>
                                </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2> Senior Full Stack Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior Mobile App Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior UI/UX Designers </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Content Strategists </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Graphics Designer
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro SEO Specialists
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Pro Quality Assurance Testers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Jobs Per Month
                                         </h2>
                                         <p>
                                             1 Max
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Custom Web Development
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Mobile App Development
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         SEO Optimization
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Website Maintenance and Support
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> E-commerce Development & Managment
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Product Design (UI/UX)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No-Code CMSDev. (Wordpress, Webflow, Drupal)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         API Integration
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         10 Days satisfaction guarantee
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (Cancel anytime)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="pricing-card">
                         <div className="card">
                                <div className="pre">
                                   <div className="txt">
                                   <h3>Pro</h3>
                                    <h2>$7,200/<span>annually</span>
                                    </h2>
                                    <p>Save $3,600</p>
                                   </div>
                                   <div className="btn-top">
                                    <button>Buy plan</button>
                                </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2> Senior Full Stack Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior Mobile App Developers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Senior UI/UX Designers </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Content Strategists </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro Graphics Designer
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2> Pro SEO Specialists
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Pro Quality Assurance Testers
                                         </h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>50hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Jobs Per Month
                                         </h2>
                                         <p>
                                             3 Max
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Custom Web Development
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Mobile App Development
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         SEO Optimization
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Website Maintenance and Support
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> E-commerce Development & Managment
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Product Design (UI/UX)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No-Code CMSDev. (Wordpress, Webflow, Drupal)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         API Integration
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         10 Days satisfaction guarantee
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (Cancel anytime)
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                </div>
                              
                            </div>
                            </div>
                      </div> }
                  </div>
              </div>
           </div>

        </section>
    )
}