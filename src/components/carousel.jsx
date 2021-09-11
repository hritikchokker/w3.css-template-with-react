import { useState, useEffect } from 'react';
import { imagesList } from '../constants/images.constants';
function Carousel(props) {
    const [imageList] = useState(imagesList);
    const [selectedImgIndex, setselectedImgIndex] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            if (selectedImgIndex === imageList.length - 1) {
                setselectedImgIndex(0);
            } else {
                setselectedImgIndex(selectedImgIndex + 1);
            }
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }, [selectedImgIndex, imageList])

    return (
        <>
            <div className="carousel-wrapper">
                {
                    imagesList && imagesList[selectedImgIndex] && <img className="carousel-image" src={imageList[selectedImgIndex].src} alt={imageList[selectedImgIndex].alt}></img>
                }
                <div className="bottom-heading">
                    <h5>Los Angeles</h5>
                    <p>We had the best time playing at Venice Beach!</p>
                </div>
            </div>
        </>
    )

}
export default Carousel;