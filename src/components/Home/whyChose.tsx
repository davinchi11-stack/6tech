import { VideoCamera } from "@phosphor-icons/react"
import { Certificate, ChatsCircle, Video } from "@phosphor-icons/react/dist/ssr"
export function WhyChoose () {
    return (
        <section className="why-chose">
            <div className="back-two">
              <div className="drip"></div>
                  <img src="https://6tech.media/wp-content/uploads/2024/10/bg_img.png" alt="purple-backdrop" />
                </div>
            <div className="why-chose_main wrapper small">
              <div className="why-chose_main_intro">
              <div className="back">
                <img src="https://6tech.media/wp-content/uploads/2024/10/bg_header.png" alt="" />
               </div>
             
               <div className="txt">
                  <h3>Why Choose us</h3>
                  <h2>We make your business look good.</h2>
               </div>
              </div>
              <div className="why-chose_main_info">
                 <div className="main">
                    <div className="top tween">
                      <div className="card">
                        <div className="icon">
                        <Certificate size={40} color="#FD0988"  />
                        </div>
                        <div className="txt">
                          <h3>Certified Expert</h3>
                          <p>Our certified experts are seasoned professionals with extensive
                             knowledge and experience. With a proven track record of
                             delivering exceptional results, 
                             they possess the skills and expertise required to transform your dream
                             </p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="icon">
                        <VideoCamera size={40} color="#FD0988" />
                        </div>
                        <div className="txt">
                          <h3>Clean Editing</h3>
                          <p>Elevate Your Content with Precise and Polished Editing.
                             </p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom ">
                    <div className="card">
                        <div className="icon">
                        <Video  size={40} color="#FD0988" />
                        </div>
                        <div className="txt">
                          <h3>Affordable Price</h3>
                          <p> 
                          Unlock Exceptional Quality at Unbeatable Prices.Flexible packages to suit your budget
                             </p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="icon">
                        <ChatsCircle  size={40} color="#FD0988" />
                        </div>
                        <div className="txt">
                          <h3>
                          24/7 Support</h3>
                          <p>
                          Our dedicated support team is available 24 hours a day, 7 days a week to ensure seamless assistance whenever you need it.
                             </p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="why-chose_main_order ">
              
                 <div className="left">
                 <h3>How to order</h3>
                 <h2>Bringing your ideas to life through motion.
                 </h2>
                   <p>Our expert team helps bring your ideas to life through creative storytelling, innovative design, and cutting-edge production techniques.</p>
                   <div className="btn">
                     <button className="discover">Discover more</button>
                   </div>
                 </div>
                 <div className="right">
                     <div className="card">
                          <div className="icon">
                            <div className="img">
                            <img src="https://6tech.media/wp-content/uploads/elementor/thumbs/3-qvnh8h6kyuyvfr3bnkk2t2z3z07lqhrj1tllyv4fsw.png" alt="message icon" />
                            </div>
                          </div>
                          <div className="txt">
                             <h3>Consultations</h3>
                             <p>Our experts will work closely with you to understand your needs,
                               identify challenges, and develop tailored solutions.</p>
                          </div>
                     </div>

                     <div className="card">
                          <div className="icon">
                         <div className="img">
                         <img src="https://6tech.media/wp-content/uploads/elementor/thumbs/9-qvnh87s72im07ngz6ght45ci15hxliq7oj2r63idj4.png" alt="elementor icon" />
                         </div>

                          </div>
                          <div className="txt">
                             <h3>
                             Choose Package</h3>
                             <p>Find the Perfect Fit for Your Needs.</p>
                          </div>
                     </div>

                     <div className="card">
                          <div className="icon">
                          <div className="img">
                          <img src="https://6tech.media/wp-content/uploads/elementor/thumbs/5-qvnh89nvg6okuve8vhb294vf7x8o0wxocsdq4nfl6o.png" alt="folder icon" />
                          </div>
                          </div>
                          <div className="txt">
                             <h3>Get your video </h3>
                             <p> Our Comprehensive Process for Flawless Video Production is flawless.</p>
                          </div>
                     </div>
                 </div>
              </div>
            </div>
        </section>
    )
}