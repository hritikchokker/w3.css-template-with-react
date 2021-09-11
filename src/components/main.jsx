import Carousel from "./carousel";
import '../styles/main-content.css';
import '../styles/common.css';
import BandDetails from "./band-details";
import TourContent from "./tour-content";
import Contact from "./contact";
function Main() {
    return (
        <>
            <Carousel></Carousel>
            <BandDetails></BandDetails>
            <TourContent></TourContent>
            <Contact></Contact>
            <div className="image_shower">
                <img alt="no ima" src="https://www.w3schools.com/w3images/map.jpg" />
            </div>
            {/* <OtherDetails></OtherDetails> */}
            {/* <TourDetails></TourDetails> */}
        </>
    )
}
export default Main;