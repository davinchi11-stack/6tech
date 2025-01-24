import { Palette, XCircle } from "@phosphor-icons/react";
import { ChartLineUp } from "@phosphor-icons/react/dist/icons/ChartLineUp";
import { CheckCircle } from "@phosphor-icons/react/dist/icons/CheckCircle";
import { CameraRotate } from "@phosphor-icons/react/dist/ssr/CameraRotate";
import { useState } from "react";

enum Time {
    monthly = "Monthly",
    annually = "Annually" 
}



export function SocialBranding () {
    const [time , setTime] = useState(Time.monthly)
    return (
        <section className="home-intro youtube social">
          
          <div className="intro">
             <div className="txt">
                 <h1 data-animation="header">
                 Stand Out in a Crowded Space with Strategic Social Media & Branding
                 </h1 >
                 <p data-animation="para">Let us craft your brand’s online identity. From SEO-optimized social media campaigns to
                 captivating content creation, we make your brand memorable.</p>
             </div>
          </div>

          <div className="intro-card">
              <div className="main wrapper small">
              <div className="left">
                    <h2 data-animation="header">
                    Amplify Your Presence, 
                    </h2 >
                    <h2 data-animation="header">Define Your Brand, </h2>
                    <h2 data-animation="header">Engage Your Audience</h2>
               </div>
               <div className="right">
               <div className="card">
                    <div className="icon">
                    <ChartLineUp size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">SocialMediaMarketing & SEO</h3>
                         <p data-animation="para">visibility and engagement with powerful social  
                      </p>
                    </div>
               </div>
               <div className="card">
                    <div className="icon">
                    <Palette size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">
                              Branding&Graphics Design 
                         </h3>
                         <p data-animation="para">
                         Create a unique brand image that’s instantly recognizable.
                        </p>
                    </div>
               </div>
               <div className="card">
                    <div className="icon">
                    <CameraRotate size={32} weight="fill" />
                    </div>
                    <div className="txt">
                         <h3 data-animation="header">Content Creation
                         </h3>
                         <p data-animation="para">    
                         Custom-tailored content that speaks directly to your audience.                   
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
                                <h2>$500/<span>monthly</span>
                                </h2>
                               </div>
                               <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                            </div>
                            <div className="details">
                                <div className="box">
                                     <h2>Social Media Manager</h2>
                                     <p>Dedicated</p>
                                </div>
                                <div className="box">
                                     <h2> Work hours per week                                    
                                         </h2>
                                     <p>20hrs</p>
                                </div>
                                <div className="box">
                                     <h2>Post per week</h2>
                                     <p>1</p>
                                </div>
                                <div className="box">
                                     <h2>Vidoe resolution</h2>
                                     <p>1080p HD</p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Audience Engagement
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Project Manager
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>                              
                                       </div>
                                <div className="box">
                                     <h2> 
                                     Creative producer
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Post Proofing & Revision
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Content Creation
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scriptwriting
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Voiceovers
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Multiple Platforms management
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Within-Hour Communication
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Licensed Music & Footage
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2>  English & Spanish Creatives
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Content Planning & Strategy
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
          
                                <div className="box">
                                     <h2> 
                                     Video Editing & Post-Production
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Graphic Design & Thumbnails
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Analytics, reporting & revenue tracking
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Promotion & Sharing managemnt
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scheduling & Publishing
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                
                                <div className="box">
                                     <h2> 
                                     Spell-checked Subtitles
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
                                <h2>$1,700/<span>monthly</span>
                                </h2>
                               </div>
                               <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                            </div>
                            <div className="details">
                                <div className="box">
                                     <h2>Social Media Manager</h2>
                                     <p>Dedicated</p>
                                </div>
                                <div className="box">
                                     <h2> Work hours per week                                    
                                         </h2>
                                     <p>50hrs</p>
                                </div>
                                <div className="box">
                                     <h2>Post per week</h2>
                                     <p>4</p>
                                </div>
                                <div className="box">
                                     <h2>Vidoe resolution</h2>
                                     <p>4K</p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Audience Engagement
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Project Manager
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Creative producer
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Post Proofing & Revision
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Content Creation
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scriptwriting
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Voiceovers
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Multiple Platforms management
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Within-Hour Communication
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Licensed Music & Footage
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2>  English & Spanish Creatives
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Content Planning & Strategy
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
          
                                <div className="box">
                                     <h2> 
                                     Video Editing & Post-Production
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Graphic Design & Thumbnails
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Analytics, reporting & revenue tracking
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Promotion & Sharing managemnt
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scheduling & Publishing
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                
                                <div className="box">
                                     <h2> 
                                     Spell-checked Subtitles
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
                                <h2>$400/<span>annually</span>
                                </h2>
                                <p>Save $1200</p>
                               </div>
                               <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                            </div>
                            <div className="details">
                                <div className="box">
                                     <h2>Social Media Manager</h2>
                                     <p>Dedicated</p>
                                </div>
                                <div className="box">
                                     <h2> Work hours per week                                    
                                         </h2>
                                     <p>20hrs</p>
                                </div>
                                <div className="box">
                                     <h2>Post per week</h2>
                                     <p>1</p>
                                </div>
                                <div className="box">
                                     <h2>Vidoe resolution</h2>
                                     <p>1080p HD</p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Audience Engagement
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Project Manager
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>                              
                                       </div>
                                <div className="box">
                                     <h2> 
                                     Creative producer
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Post Proofing & Revision
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Content Creation
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scriptwriting
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Voiceovers
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Multiple Platforms management
                                     </h2>
                                     <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Within-Hour Communication
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Licensed Music & Footage
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2>  English & Spanish Creatives
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Content Planning & Strategy
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
          
                                <div className="box">
                                     <h2> 
                                     Video Editing & Post-Production
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Graphic Design & Thumbnails
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Analytics, reporting & revenue tracking
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Promotion & Sharing managemnt
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scheduling & Publishing
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                
                                <div className="box">
                                     <h2> 
                                     Spell-checked Subtitles
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
                                <h2>$1,550/<span>annually</span>
                                </h2>
                                <p>Save $1800</p>
                               </div>
                               <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                            </div>
                            <div className="details">
                                <div className="box">
                                     <h2>Social Media Manager</h2>
                                     <p>Dedicated</p>
                                </div>
                                <div className="box">
                                     <h2> Work hours per week                                    
                                         </h2>
                                     <p>50hrs</p>
                                </div>
                                <div className="box">
                                     <h2>Post per week</h2>
                                     <p>4</p>
                                </div>
                                <div className="box">
                                     <h2>Vidoe resolution</h2>
                                     <p>4K</p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Audience Engagement
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Project Manager
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Creative producer
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Post Proofing & Revision
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Content Creation
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scriptwriting
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Voiceovers
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Multiple Platforms management
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Within-Hour Communication
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Licensed Music & Footage
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2>  English & Spanish Creatives
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> Content Planning & Strategy
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
          
                                <div className="box">
                                     <h2> 
                                     Video Editing & Post-Production
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Graphic Design & Thumbnails
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Analytics, reporting & revenue tracking
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Promotion & Sharing managemnt
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                <div className="box">
                                     <h2> 
                                     Scheduling & Publishing
                                     </h2>
                                     <p><CheckCircle size={28} weight="fill" /></p>
                                </div>
                                
                                <div className="box">
                                     <h2> 
                                     Spell-checked Subtitles
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