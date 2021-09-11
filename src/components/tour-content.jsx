import '../styles/tour-content.css';
function TourContent() {
    const url = "#"
    const altText = "not found";
    return (
        <div className="center_container_wrapper bg-black">
            <div className="center_content">
                <h1 className="tour_heading">
                    tour dates
                </h1>
                <p>
                    Remember to book your ticket
                </p>
                <ul className="tour-timmings">
                    <li className="tour-timmings-item">
                        September
                        <span className="ticket-status">
                            Sold Out
                        </span>
                    </li>
                    <li className="tour-timmings-item">
                        October
                        <span className="ticket-status">
                            Sold Out
                        </span>
                    </li>
                    <li className="tour-timmings-item">
                        November
                        <span className="ticket-status-last">
                            3
                        </span>
                    </li>
                </ul>
            </div>

            <div className="places_details_container">
                <div className="places-details-item">
                    <img className="tour_image" src="https://www.w3schools.com/w3images/newyork.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a className="tour_buy_btn" href={url}>
                        Buy Tickets
                    </a>
                </div>
                <div className="places-details-item">
                    <img className="tour_image" src="https://www.w3schools.com/w3images/paris.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a className="tour_buy_btn" href={url}>
                        Buy Tickets
                    </a>
                </div>
                <div className="places-details-item">
                    <img className="tour_image" src="https://www.w3schools.com/w3images/sanfran.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a className="tour_buy_btn" href={url}>
                        Buy Tickets
                    </a>
                </div>
            </div>
        </div>
    )
}
export default TourContent;