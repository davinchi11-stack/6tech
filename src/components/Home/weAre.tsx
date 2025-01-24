import second from '../../assets/liza-summer.jpg'

export function  WeAre () {
      return (
        <section className="we">
          
           <div className="we-one wrapper small">
              <div className="left">
                <div className="img">
                <img data-animation="skew" src="https://6tech.media/wp-content/uploads/2024/10/male-videographer-edits-and-cuts-footage-and-sound-on-his-person-1.jpg" alt="" />
                </div>
              </div>
              <div className="right">
              <div className="right-main">
                    <div className="intro">
                      <div className="txt">
                      <h3 data-animation="header">Who we are</h3>
                      <h2 data-animation="para">Video production that’s creative and affordable.</h2>
                      </div>
                         <p data-animation="para">Elevate your brand’s story with captivating video content that resonates with your audience. Bring your vision to life</p>
                    </div>
                    <div className="btn">
                        <button >Discover more</button>
                    </div>
                </div>
              </div>
           </div>

           <div className="we-one wrapper small second">
              <div className="left">
                <div className="img">
                <img  data-animation="skew"  src={second} alt="" />
                </div>
              </div>
              <div className="right">
              <div className="right-main">
                    <div className="intro">
                      <div className="txt">
                      {/* <h3>Who we are</h3> */}
                      <h2 data-animation="header">We’re here to turn your ideas into impactful brand stories.</h2>
                      </div>
                         <p data-animation="para"> From social media marketing to PR and copywriting, our team specializes in crafting tailored solutions that drive your message home, no matter the platform.</p>
                    </div>
                    <div className="btn">
                        {/* <button >Discover more</button> */}
                    </div>
                </div>
              </div>
           </div>

       
        </section>
      )
}