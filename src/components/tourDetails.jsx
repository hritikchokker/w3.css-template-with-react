function TourDetails() {
    const url = '#';
    const altText = 'no image found';
    return (
        <div className="tour-details">
            <h1>
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
            <div className="places-details">
                <div className="places-details-item">
                    <img className="tour-images" src="https://www.w3schools.com/w3images/newyork.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a className="buy-tickets-btn" href={url}>
                        Buy Tickets
                    </a>
                </div>
                <div className="places-details-item">
                    <img className="tour-images" src="https://www.w3schools.com/w3images/paris.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a href={url}>
                        Buy Tickets
                    </a>
                </div>
                <div className="places-details-item">
                    <img className="tour-images" src="https://www.w3schools.com/w3images/sanfran.jpg" alt={altText} />
                    <h2>
                        New york
                    </h2>
                    <h3>
                        Fri 27 Nov 2016
                    </h3>
                    <h5>
                        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                    </h5>
                    <a href={url}>
                        Buy Tickets
                    </a>
                </div>
            </div>

        </div>
    )
}

export default TourDetails;