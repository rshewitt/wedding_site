import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import photo1 from "../images/IMG_6065.jpg";
import photo2 from "../images/DSC_1937.jpg";
import photo3 from "../images/DSC_1849.jpg";
import photo4 from "../images/DSC_1912.jpg";
import photo5 from "../images/DSC_1954.jpg";
import photo6 from "../images/DSC_1931.jpg";
import photo8 from "../images/DSC_1946.jpg";
import photo10 from "../images/DSC_2005.jpg";
import photo11 from "../images/IMG_5773.jpg";
import photo12 from "../images/IMG_5776.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo8,
  photo10,
  photo11,
  photo12,
];

const GalleryCarousel = () => {
  return (
    <div id="carousel_div" className="w-full px-1 md:px-4">
      <h4 className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center text-gray-700">
        Gallery
      </h4>
      <Carousel showThumbs={false}>
        {photos.map((photo, index) => (
          <div key={`${index}`}>
            <Image
              src={photo}
              alt={`${index}`}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;
