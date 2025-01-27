import { CheckCircle } from "@phosphor-icons/react";
import audio from "../../assets/audio-1.jpg"
import video from '../../assets/video-1.jpg'
import { useContext } from 'react'
import { priceContext } from '../../context/priceContext'
import { Time } from '../../context/priceContext'



export function Editing () {
     const {time , setTime} = useContext<any>(priceContext)
    return (
        <section className="home-intro youtube edit">
            <div className="home-intro_main wrapper small">
                <div className="left">
                <h1 data-animation="header">
                Bring Your Story
                </h1>
                <h1 data-animation="header">to Life with Expertise.</h1>
                <div className="icon">
                    <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66795af98b5e014c61f20c02_scribbble-1.svg" alt="icon" />
                </div>
                </div>
                <div className="right">
                    <h3 data-animation="para"> Whether it’s video or audio, our team transforms raw content into polished works that
                    capture your brand’s message and leave a lasting impression.
                    </h3>
                    <h3 data-animation="para">Transform your raw footage into a masterpiece with our professional editing services. Whether it's a personal project or a business campaign, we craft compelling stories that captivate audiences and elevate your message. Let us enhance your vision and bring every frame to life with precision and creativity.</h3>
                    <div className="btn">
                        {/* <button className="main-discover">Get Started</button> */}
                    </div>
                    <div className="arrow">
                {/* <img src={icon} alt="arrow" /> */}
               </div>
                </div>
               
            </div>
         
            <div className="bg">
                <div style={{backgroundImage: `url(${audio})`}} className="fixed-bg">
                    <div className="back"></div>
                    <div className="content wrapper medium">
                        <h2 data-animation="header">AudioEditing</h2>
                        <p data-animation="para">Elevate the quality of your audio with our expert editing services. From crisp voiceovers to seamless music integration, we refine every sound to ensure clarity and impact. Whether you're creating podcasts, music tracks, or voice recordings, we enhance every word and note to perfection.</p>
                    </div>

                </div>
            </div>

            <div className="we-one wrapper small second">
              <div className="left">
                <div className="img">
                <img data-animation="skew" src={video} alt="" />
                </div>
              </div>
              <div className="right">
              <div className="right-main">
                    <div className="intro">
                      <div className="txt">
                      {/* <h3>Who we are</h3> */}
                      <h2 data-animation="header">tunning visuals that hold attention and elevate your message.</h2>
                      </div>
                      <p data-animation="para">Transform your ideas into stunning visuals that captivate and inspire. Our creative touch ensures every frame and design is crafted to grab attention and amplify your message, leaving a lasting impression on your audience.</p>
                    </div>
                    <div className="btn">
                        {/* <button >Discover more</button> */}
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
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Raw Footage size  </h2>
                                         <p> 1KB-25GB
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2>Final Export run time</h2>
                                         <p> 
                                         1-30 mins
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> Turnaround time
                                         </h2>
                                         <p> 2 busines days  </p>
                                    </div>
                                    <div className="box">
                                         <h2> Revisions
                                         </h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2>Project Files</h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>
                                         Licensed Music & Footage
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                  
                                    <div className="box">
                                         <h2> 
                                         English & Spanish Creatives
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Licensed Music & Footage
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
                                         Thumbnail and Graphic Design
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (cancel anytime)
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
                                         <h2> 
                                         14 Days satisfaction guarantee
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
                                    <h2>$1,400/<span>monthly</span>
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
                                         <h2>Raw Footage size  </h2>
                                         <p> 
                                         26GB-150GB
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2>Final Export run time</h2>
                                         <p> 
                                         31-120 mins
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> Turnaround time
                                         </h2>
                                         <p> 24hrs </p>
                                         {/* <h2> </h2> */}
                                    </div>
                                    <div className="box">
                                         <h2> Revisions
                                         </h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2>Project Files</h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>
                                         Licensed Music & Footage
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                  
                                    <div className="box">
                                         <h2> 
                                         English & Spanish Creatives
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Licensed Music & Footage
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
                                         Thumbnail and Graphic Design
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (cancel anytime)
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
                                         <h2> 
                                         14 Days satisfaction guarantee
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
                                         <h2>Video Editor</h2>
                                         <p>Dedicated</p>
                                    </div>
                                    <div className="box">
                                         <h2>Workhours per week</h2>
                                         <p>20hrs</p>
                                    </div>
                                    <div className="box">
                                         <h2>Raw Footage size  </h2>
                                         <p> 1KB-25GB
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2>Final Export run time</h2>
                                         <p> 
                                         1-30 mins
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> Turnaround time
                                         </h2>
                                         <p> 2 busines days  </p>
                                    </div>
                                    <div className="box">
                                         <h2> Revisions
                                         </h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2>Project Files</h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>
                                         Licensed Music & Footage
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                  
                                    <div className="box">
                                         <h2> 
                                         English & Spanish Creatives
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Licensed Music & Footage
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
                                         Thumbnail and Graphic Design
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (cancel anytime)
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
                                         <h2> 
                                         14 Days satisfaction guarantee
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
                                    <h2>$1,250<span>annually</span>
                                    </h2>
                                    <p>Save 1,800</p>
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
                                         <h2>Raw Footage size  </h2>
                                         <p> 
                                         26GB-150GB
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2>Final Export run time</h2>
                                         <p> 
                                         31-120 mins
                                         </p>
                                    </div>
                                    <div className="box">
                                         <h2> Turnaround time
                                         </h2>
                                         <p> 24hrs </p>
                                    </div>
                                    <div className="box">
                                         <h2> Revisions
                                         </h2>
                                         <p>Unlimted</p>
                                    </div>
                                    <div className="box">
                                         <h2>Project Files</h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Within-Hour Communication
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2>
                                         Licensed Music & Footage
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                  
                                    <div className="box">
                                         <h2> 
                                         English & Spanish Creatives
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> Licensed Music & Footage
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
                                         Thumbnail and Graphic Design
                                         </h2>
                                         <p><CheckCircle size={28} weight="fill" /></p>
                                    </div>
                                    <div className="box">
                                         <h2> 
                                         No Contract (cancel anytime)
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
                                         <h2> 
                                         14 Days satisfaction guarantee
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