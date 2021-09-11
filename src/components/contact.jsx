import '../styles/contact-content.css';
function Contact() {
    return (
        <div className="contact_container">
            <div className="contact_heading">
                <h2>
                    Contact
                </h2>
                <p>
                    Fan? Drop a note!
                </p>
            </div>

            <div className="aside_content">
                <div className="contact_details">
                    <ul>
                        <li>
                            Chicago, US
                        </li>
                        <li>
                            Phone: +00 151515
                        </li>
                        <li>
                            Email: mail@mail.com
                        </li>
                    </ul>
                </div>
                <div className="contact_form">
                    <input placeholder="name" type="text" required />
                    <br />
                    <input type="email" placeholder="email" required />
                    <input placeholder="message" type="text" required />
                    <input type="submit" required />
                </div>
            </div>
        </div>
    )

}

export default Contact;