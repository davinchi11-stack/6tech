import cam from '../../assets/cam.jpg'

export function BookOnline () {
    return(
        <div  style={{backgroundImage: `url(${cam})`}} className="book-online">
            <div className="txt">
                <h3>Booking online </h3>
                <h2>Schedule An Appointment</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    )
}