import { useLocation } from "react-router-dom";




export const useLocated = () => {
  const { pathname } = useLocation();
   
      const loc = () => {
        if (pathname === '/') {
          window.scrollTo(0, 0);
        }else if (pathname === '/youtube'){
          window.scrollTo(0, 0);
        }else if (pathname === '/editing'){
          window.scrollTo(0, 0);
        }else if (pathname === '/social-branding'){
          window.scrollTo(0, 0);
        }else if (pathname === '/social-branding'){
            window.scrollTo(0, 0);
        }else if (pathname === '/copy-writing'){
            window.scrollTo(0, 0);
          }else if (pathname === '/tech'){
            window.scrollTo(0, 0);
          }else if (pathname === '/contact'){
            window.scrollTo(0, 0);
          }
        
    
        
      }


    return {loc}
}