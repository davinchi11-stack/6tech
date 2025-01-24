

export function Contact () {
    return(
        <div className="contact">
             <div className="contact_main wrapper small">
                 <div className="left">
                    <h1 data-animation="header">Contact Us</h1>
                    <form>
                        <div className="top">
                           
                            <input type="email" placeholder="your email"/>
                          
                         
                           <input type="text" placeholder="your name"/>
                           
                        </div>
                        <div className="bottom">
                            <textarea placeholder="your message"></textarea>
                        </div>
                        <input type="submit"/>
                    </form>
                 </div>

                 <div className="right">
                  <div className="map" ><iframe width="100%" height="600"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lastminute.com%20London%20Eye,%20Riverside%20Building,%20County%20Hall,%20London%20SE1%207PB,%20United%20Kingdom+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
                 </div>
             </div>
        </div>
    )
}