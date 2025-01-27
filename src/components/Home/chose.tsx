import { useEffect } from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export function Choose () {

    // useEffect(() => {
    //     // ScrollTrigger.create({
    //     //     trigger: ".choose",
    //     //     start:"top top",
    //     //     end:"bottom bottom",
    //     //     pin: ".choose_main .left",
    //     //     scrub: true,
    //     //     markers: true
            
    //     // })

     
    // }, [])

    useEffect(()=> {
   const pinnedElement = document.querySelector('.pinned-section') as HTMLElement;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pinnedElement.classList.add('active');
          } else {
            pinnedElement.classList.remove('active');
          }
        });
      });

      observer.observe(pinnedElement);
      
      console.log(pinnedElement);
      
    }, [])

    return (
        <section className="choose ">
          <div className="choose_main wrapper small">
             <div className="left pinned-section">
                <h1 data-animation="header">Why <br /> Choose us ?</h1>
                <div className="arrow">
                <img src="https://cdn.prod.website-files.com/667956764d8134f48e27354b/66796fe43dc4764e1710c495_arrow-p-500.png" alt="arrow" />
               </div>
             </div>
             <div className="right">
                <div className="box">
                <h2 data-animation="header">Building Your Brand's Future</h2>
                <p data-animation="para">We work alongside you to create meaningful experiences that elevate your brand. Our tailored strategies drive engagement, loyalty, and long-term growth.</p>
                </div>

                <div className="box">
                <h2 data-animation="header">Innovative Solutions for Every Need</h2>
                <p data-animation="para">Our team thrives on delivering creative solutions that push boundaries and achieve remarkable results, transforming your ideas into actionable strategies.</p>
                </div>

                <div className="box">
                <h2 data-animation="header">Driven by Results</h2>
                <p data-animation="para">We focus on outcomes. Our mission is to provide measurable success for your brand through high-quality, innovative strategies that resonate with your audience.</p>
                </div>

                <div className="box">
                <h2 data-animation="header">Crafting Your Brand's Story</h2>
                <p data-animation="para">Through the power of storytelling, we help your brand connect with audiences on a deeper level, creating lasting impressions that lead to sustained growth.</p>
                </div>

                <div className="box">
                <h2 data-animation="header">Your Vision, Our Expertise</h2>
                <p data-animation="para">We bring your ideas to life with a blend of creativity, passion, and expert knowledge, ensuring that every project exceeds expectations and drives impact.</p>
                </div>
             </div>
          </div>
        </section>



    )
}