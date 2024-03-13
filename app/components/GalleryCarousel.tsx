import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from "~/images/DSC_1889.jpg";
import photo2 from "~/images/DSC_1931.jpg";
import photo3 from "~/images/DSC_1968.jpg";
import photo4 from "~/images/DSC_2001.jpg";

const GalleryCarousel = () => {
    return (
        <div className="w-full px-1 md:px-4">
            <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
                Gallery
            </h4>
            <Carousel showThumbs={false}>
                <div>
                    <img src={photo1} alt="photo1"/>
                </div>
                <div>
                    <img src={photo2} alt="photo2"/>
                </div>
                <div>
                    <img src={photo3} alt="photo3"/>
                </div>
                <div>
                    <img src={photo4} alt="photo4"/>
                </div>
            </Carousel>
        </div>
        );
}

export default GalleryCarousel
