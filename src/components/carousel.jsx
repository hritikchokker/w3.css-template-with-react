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
        }, 3000)
        return () => {
            clearInterval(interval);
        }
    }, [selectedImgIndex, imageList])

    return (
        <>
            {
                imagesList && imagesList[selectedImgIndex] && <img className="carousel-image" src={imageList[selectedImgIndex].src} alt={imageList[selectedImgIndex].alt}></img>
            }
        </>
    )

}
export default Carousel;