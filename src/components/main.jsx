import Carousel from "./carousel";
import '../styles/main-content.css';
import BandDetails from "./band-details";
function Main() {
    return (
        <>
            <Carousel></Carousel>
            <BandDetails></BandDetails>
            {/* <OtherDetails></OtherDetails> */}
            {/* <TourDetails></TourDetails> */}
        </>
    )
}
export default Main;