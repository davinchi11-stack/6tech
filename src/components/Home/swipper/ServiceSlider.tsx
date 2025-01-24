
export function ServicSlider (props: any) {
    const {image , head , typo} = props;
    return (
        <div className="service-slider">
           
            <div className="img">
            <div className="backdrop"></div>
                <img src={image} alt="" />

                <div className="text">
                    <div className="text_txt">
                    <h3 data-animation="header">{head}</h3>
                    <p data-animation="para">{typo}</p>
                    </div>
                    <div className="text_btn">
                        <button data-animation="fade" className="discover">get started</button>
                    </div>
                </div>    
             </div>
        </div>
    )
}