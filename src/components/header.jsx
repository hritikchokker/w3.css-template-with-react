import "../styles/header.css";
function Header() {
    // eslint-disable-next-line no-script-url
    const url = '#';
    return (
        <>
            <header>
                <nav className="navbar">
                    <a href={url}>Home</a>
                    <a href={url}>Band</a>
                    <a href={url}>Tour</a>
                    <a href={url}>Contact</a>
                    <div className="dropdown">
                        <span className="dropbtn">More</span>
                        <div className="dropdown-content">
                            <a href={url}>Merchandise</a>
                            <a href={url}>Extras</a>
                            <a href={url}>Media</a>
                        </div>
                    </div>
                    <div className="header-searchbar">
                        {/* <button> */}
                        <i class="fa fa-search"></i>
                        {/* </button> */}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
