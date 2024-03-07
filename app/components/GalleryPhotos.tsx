import { useEffect, useState } from "react";
import foto1 from "~/images/DSC_1879.jpg";
import foto2 from "~/images/DSC_1891.jpg";
import foto3 from "~/images/DSC_1955.jpg";
import foto4 from "~/images/DSC_1965.jpg";
import foto5 from "~/images/DSC_1989.jpg";
import foto6 from "~/images/DSC_1993.jpg";
// import foto7 from "~/images/foto7.jpg";
// import foto8 from "~/images/foto8.jpg";
// import foto9 from "~/images/foto9.jpg";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";

const photos: IPhoto[] = [
  {
    src: foto1,
    width: 10,
    height: 2,
    alt: "pic 1",
  },
  {
    src: foto3,
    width: 15,
    height: 5,
    alt: "pic 2",
  },
  {
    src: foto2,
    width: 3,
    height: 2,
    alt: "pic 3",
  },
  {
    src: foto6,
    width: 5,
    height: 1,
    alt: "pic 4",
  },
  {
    src: foto5,
    width: 8,
    height: 2,
    alt: "pic 5",
  },
//   {
//     src: foto4,
//     width: 4,
//     height: 5,
//     alt: "pic 6",
//   },
//   {
//     src: foto9,
//     width: 5,
//     height: 4,
//     alt: "pic 7",
//   },
//   {
//     src: foto8,
//     width: 3,
//     height: 2,
//     alt: "pic 8",
//   },
//   {
//     src: foto7,
//     width: 2,
//     height: 3,
//     alt: "pic 9",
//   },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Gallery
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
