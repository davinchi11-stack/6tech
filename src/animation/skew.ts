import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const skew = () => {
    const images = gsap.utils.toArray("[data-animation='skew']")
    console.log(images);
    

    images.forEach((img: any) => {
        ScrollTrigger.create({
            trigger : img,
             start : "top bottom",
             end : "bottom top",
             scrub : true,
             onUpdate({getVelocity}){
                const skewHeight = `${getVelocity() / 300}deg`

                gsap.fromTo(img ,
                     {skewY : skewHeight , ease : "power1.inOut"},
                     {skewY : 0}
                    )
             }
        })
    })

     
}