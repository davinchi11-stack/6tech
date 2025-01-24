import { CheckCircle } from "@phosphor-icons/react/dist/icons/CheckCircle";
import { useState } from "react";

enum Time {
    monthly = "Monthly",
    annually = "Annually" 
}
export function CopyWrite () {
    const [time , setTime] = useState(Time.monthly)
    return (
     <section className="home-intro youtube copy">     
          <div className="intro">
             <div className="txt">
                 <h1 data-animation="header">
                 Your Brand’s Voice, Amplified and Refined
                 </h1>
                 <p data-animation="para">Let us craft your brand’s online identity. From SEO-optimized social media campaigns to
                 captivating content creation, we make your brand memorable.</p>
             </div>
          </div>

          <div className="choose_main wrapper small">
             <div className="left">
                <h1 data-animation="para">Crafting Words That Captivate, <br /> Inspire, and Elevate  </h1>
                <div className="arrow">
                <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66796fe43dc4764e1710c495_arrow-p-500.png" alt="arrow" />
               </div>
             </div>
             <div className="right">
                <div className="box">
                <h2 data-animation="header">ContentWriting & Blogs</h2>
                <p data-animation="para"> 
                Transform your ideas into engaging content with our expert writing services. Whether you need captivating blogs or web content that speaks directly to your audience, we craft every word to connect, 
                inform, and inspire. Elevate your brand's voice and leave a lasting impression.
                </p>
                </div>

                <div className="box">
                <h2 data-animation="header">Book Writing & Press Releases
                </h2>
                <p data-animation="para">
                Bring your vision to life with our end-to-end support for book writing and press releases. Whether you're crafting your first novel or announcing your latest achievement, we 
                provide the expertise needed to ensure your message is powerful, polished, and perfectly tailored for your audience.
                </p>
                </div>

                <div className="box">
                <h2 data-animation="header">Songwriting & Music Distribution</h2>
                <p data-animation="para">
                Create unforgettable music with our professional songwriting services and strategic distribution plans. From crafting lyrics that hit the right note to promoting your music to the right audience, we ensure your talent gets the recognition it deserves.
                 </p>
                </div>

                <div className="box">
                <h2 data-animation="header">Reputation Management
                </h2>
                <p data-animation="para">
                Protect and enhance your public perception with customized strategies designed to foster positive engagement. We help build trust, manage your online reputation, and ensure your brand stands strong in the eyes of your audience.
                </p>
                </div>

                <div className="box">
                <h2 data-animation="header">Press Releases</h2>
                <p data-animation="para">
                Share your updates with impact through expertly crafted press releases. 
                Our writing ensures your announcements resonate with media 
                outlets and generate the buzz your news deserves.
                </p>
                </div>
                <div className="box">
                <h2 data-animation="header">Influencer Partnerships</h2>
                <p data-animation="para">
                Connect with key influencers to broaden your reach and
                 create meaningful engagement. We help identify the right partnerships to ensure
                your message is delivered authentically and effectively to the audiences that matter most.
                </p>
                </div>
                <div className="box">
                <h2 data-animation="header">Brand Story Development</h2>
                <p data-animation="para">
                Build a deeper connection with your audience through a compelling brand 
                narrative. We help craft a story that highlights your mission, values, and vision, 
                creating a lasting impression that drives loyalty and trust.
                </p>
                </div>
                <div className="box">
                <h2 data-animation="header">Social Media Copy</h2>
                <p data-animation="para">
                Capture attention and spark interaction with social media copy tailored to your brand’s voice.
                We create posts that resonate, drive engagement, and keep your audience coming back for more.
                </p>
                </div>
                <div className="box">
                <h2 data-animation="header">Script Writing</h2>
                <p data-animation="para">
                From videos and podcasts to presentations, our scriptwriting services bring your ideas to life. 
                We ensure your message is delivered with clarity, creativity, and the impact it deserves.
                </p>
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
                      {/* <div className="card">
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
                      </div> */}
                   </div>
                   <div className="pricing-card">
                   <div className="card">
                          <div className="pre">
                             <div className="txt">
                             <h3>Pro</h3>
                              <h2>$800/<span>monthly</span>
                              </h2>
                             </div>
                              <div className="btn-top">
                                        <button>Buy plan</button>
                                </div>
                          </div>
                          <div className="details">
                              <div className="box">
                                   <h2>CopyWriter</h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2>SongWriter
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   PR Specialist
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Editors
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   SEO / SEM Specialist
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Project & Social Media Managers
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Graphics Designer
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Workhours per week
                                   </h2>
                                   <p>50hrs</p>
                              </div>
                              <div className="box">
                                   <h2>Jobs Per Month</h2>
                                   <p>2 Max</p>
                              </div>
                              
                              <div className="box">
                                   <h2>
                                   Speech Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Brand Story Development
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Content Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Social Media Copy
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Script Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
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
                      {/* <div className="card">
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
                                   <p>50hrs</p>
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
                      </div> */}
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
                                   <h2>CopyWriter</h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2>SongWriter
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   PR Specialist
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Editors
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   SEO / SEM Specialist
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Project & Social Media Managers
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Graphics Designer
                                   </h2>
                                   <p>Dedicated</p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Workhours per week
                                   </h2>
                                   <p>50hrs</p>
                              </div>
                              <div className="box">
                                   <h2>Jobs Per Month</h2>
                                   <p>2 Max</p>
                              </div>
                              
                              <div className="box">
                                   <h2>
                                   Speech Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Brand Story Development
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Content Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Social Media Copy
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
                              </div>
                              <div className="box">
                                   <h2> 
                                   Script Writing
                                   </h2>
                                   <p><CheckCircle size={28} weight="fill" /></p>
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