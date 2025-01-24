import gsap from 'gsap'
import { useInview } from '../Hook/useIntersection';
import Splitting from 'splitting'


export function scrollAnimate () {
    const {inView} = useInview()
    const h = document.querySelectorAll("[data-animation='header']");
    const p = document.querySelectorAll("[data-animation='para']");
    const f = document.querySelectorAll("[data-animation='fade']");
    const s = document.querySelectorAll("[data-animation='scale']");
   
    h.forEach((item) => {
        Splitting({
            target :item,
            by : "chars"
        })
       
        
        gsap.set(item.querySelectorAll(".char"), {
            opacity : 0,
            yPercent: 100,
            transformStyle : "preserv-3d"
        })
        inView(item , {
            threshold : 1
        }).then(()=> {
            const ele = item.querySelectorAll(".char");
            gsap.to(ele, {
                opacity : 1,
                yPercent: 0,
                stagger : ele.length > 100 ? 0.02  : 0.01,
                duration :  ele.length > 100 ? 0.6  : 0.5,
                ease: "power3.inOut",
            })
        })

        
        
    })

    p.forEach((item) => {
      const lines =  Splitting({
            target : item,
            by : "lines"
        })
      
        lines.forEach((splitResult: any) => {
            const watchWrap = splitResult.words?.map((wordWrap: any) =>
                 `
                 <span class='word_wrap'>
                  ${wordWrap.outerHTML}
                 </span>
                 `
                ).join("")

                splitResult.el.innerHTML = watchWrap;
           })

           gsap.set(item.querySelectorAll(".word") , {
            opacity : 0,
             yPercent : 105,
             rotateX : 50,
             transformStyle : "preserve-3d"
         })
         inView(item , {
            threshold : 1
         }).then(()=> {
            const elem = item.querySelectorAll(".word")
            gsap.to(elem , {
              opacity : 1,
              yPercent : 0,
              rotateX : 0,
              stagger : elem.length > 100 ? 0.02 : 0.01,
              duration : elem.length > 100 ? 0.65 : 0.55,
              ease: "power3.inOut",
            })
         })
        
          
          
    })



    s.forEach((item) => {
        gsap.set(item , {
            opacity: 0,
            scale : 0.6,
            transformStyle : "preserve-3d"
        })
        inView(item , {
            threshold : 1
        }).then(() => {
            gsap.to(item , {
                opacity : 1,
                scale : 1,
                stagger : 0.3,
                ease: "power3.inOut",
                
            })
        })
    })
    
    f.forEach((item) => {
       console.log(item);
       
        
        gsap.set(item, {
            autoAlpha : 0,
            transformStyle : "preserv-3d"
        })
        inView(item , {
            threshold : 1
        }).then(()=> {
        
            gsap.to(item, {
                autoAlpha : 1,
                duration :  1,
                stagger: 0.03,
                ease: "power3.inOut",
            })
        })

        
        
    })
}

