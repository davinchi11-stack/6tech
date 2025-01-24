
import { Choose } from "./chose";
import { HomeIntro } from "./home-intro";
import { Offer } from "./offer";
import { Swipepr } from "./swipper/Swipper";
import { Trusted } from "./trusted";
import { WeAre } from "./weAre";




export function Home () {
  
    return (
        <div className="home">
            <HomeIntro/>
            <div className="swp">
                <Swipepr/>
            </div>
            <WeAre/>
            <Offer/>
            <Trusted/>
            <Choose/>
            

        </div>
    )
}