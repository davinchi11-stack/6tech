import { CheckCircle, XCircle } from '@phosphor-icons/react'
import video from '../../assets/you-run-output-reduced.mp4'
import { useContext } from 'react'
import { priceContext } from '../../context/priceContext'
import { Time } from '../../context/priceContext'


export function YoutubeIndex () {
    
   const {time , setTime} = useContext<any>(priceContext)
   

     return (
        <>
         <section className="home-intro youtube">
            <div className="home-intro_main wrapper small">
                <div className="left">
                <h1 data-animation="header" >
                Grow Your Channel with 
                </h1>
                <h1 data-animation="header">Precision and Automation</h1>
                <div className="icon">
                    <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66795af98b5e014c61f20c02_scribbble-1.svg" alt="icon" />
                </div>
                </div>
                <div className="right">
                    <h3 data-animation="para">Harness the power of YouTube with expert channel automation and tailored management
                    services. </h3>
                    <h3 data-animation="para">We streamline your channel’s growth strategy, boosting engagement and reach</h3>
                 
                </div>
               
            </div>
         
            <div className="we-one wrapper small">
              <div className="left">
                <div className="img">
                 <video data-animation="skew" playsInline autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                 </video>
                </div>
              </div>
              <div className="right">
              <div className="right-main">
                    <div className="intro">
                      <div className="txt">
                      <h3 data-animation="header">Relax, Earn, Repeat</h3>
                      <h2 data-animation="para">Effortless YouTube Smart Automation, just relax and earn</h2>
                      </div>
                         <p data-animation="para">Experience the ease of YouTube automation. Focus on creating great content while we handle the heavy lifting, ensuring maximum reach, engagement, and earnings with minimal effort.</p>
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
                                    <h2>$600/<span>monthly</span>
                                    </h2>
                                   </div>
                                    <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Youtube Post per week</h2>
                                         <p>1</p>
                                    </div>
                                    <div className="box">
                                         <h2>Vidoe resolution</h2>
                                         <p>1080p HD</p>
                                    </div>
                                    <div className="box">
                                         <h2>Long form Lenth</h2>
                                         <p> 7- 30 Mins</p>
                                    </div>
                                    <div className="box">
                                         <h2>Shorts Lenth</h2>
                                         <p>15- 60 Sec</p>
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
                                         Creative Producer
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Video Proofing
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Project Files sharing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>Revisions</h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
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
                                         Scriptwriting & Voiceover
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Thumbnail & Graphic Design
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
                                         Performance & revenue tracking
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
                                    <h2>$1,650/<span>monthly</span>
                                    </h2>
                                   </div>
                                   <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>50hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Youtube Post per week</h2>
                                         <p>4</p>
                                    </div>
                                    <div className="box">
                                         <h2>Vidoe resolution</h2>
                                         <p>4k</p>
                                    </div>
                                    <div className="box">
                                         <h2>Long form Lenth</h2>
                                         <p> 7- 30 Mins</p>
                                    </div>
                                    <div className="box">
                                         <h2>Shorts Lenth</h2>
                                         <p>15- 60 Sec</p>
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
                                         Creative Producer
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Video Proofing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Project Files sharing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>Revisions</h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
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
                                         Scriptwriting & Voiceover
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Thumbnail & Graphic Design
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
                                         Performance & revenue tracking
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
                                    <h2>$500/<span>annually</span>
                                    </h2>
                                    <p>Save $1800</p>
                                    </div>
                                    <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Youtube Post per week</h2>
                                         <p>1</p>
                                    </div>
                                    <div className="box">
                                         <h2>Vidoe resolution</h2>
                                         <p>1080p HD</p>
                                    </div>
                                    <div className="box">
                                         <h2>Long form Lenth</h2>
                                         <p> 7- 30 Mins</p>
                                    </div>
                                    <div className="box">
                                         <h2>Shorts Lenth</h2>
                                         <p>15- 60 Sec</p>
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
                                         Creative Producer
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Video Proofing
                                         </h2>
                                         <p><XCircle className='x' size={32} weight="fill" color='red' /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Project Files sharing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>Revisions</h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
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
                                         Scriptwriting & Voiceover
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Thumbnail & Graphic Design
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
                                         Performance & revenue tracking
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
                                    <h2>$1,500/<span>annually</span>
                                    </h2>
                                    <p>Save $1800</p>
                                    </div>
                                    <div className="btn-top">
                                        <button>Buy plan</button>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="box">
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>50hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Youtube Post per week</h2>
                                         <p>4</p>
                                    </div>
                                    <div className="box">
                                         <h2>Vidoe resolution</h2>
                                         <p>4k</p>
                                    </div>
                                    <div className="box">
                                         <h2>Long form Lenth</h2>
                                         <p> 7- 30 Mins</p>
                                    </div>
                                    <div className="box">
                                         <h2>Shorts Lenth</h2>
                                         <p>15- 60 Sec</p>
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
                                         Creative Producer
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Video Proofing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Project Files sharing
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>Revisions</h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
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
                                         Scriptwriting & Voiceover
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         Thumbnail & Graphic Design
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
                                         Performance & revenue tracking
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
        </>
     )
}