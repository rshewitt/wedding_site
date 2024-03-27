import venue_pic from "../images/mazant.jpg";
import Image from "next/image";

const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/The+Mazant/@29.9628879,-90.0464758,14.38z/data=!4m9!3m8!1s0x8620a7d28949446d:0x46b489c1ee0f9268!5m2!4m1!1i2!8m2!3d29.9635097!4d-90.0352657!16s%2Fg%2F11csswn9xw?entry=ttu";
const MAP_TITLE = "The Mazant";
const MAP_ADDRESS = "906 Mazant St, New Orleans, LA 70117";

const LocationMap = () => {
  return (
        <div id="location_div" className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg">
              <Image
                src={venue_pic} 
                alt="wedding_location"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0 pt-10">
            <div className="top-8 text-center md:text-left pt-10">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Wedding Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Map
                </a>
              </div>
            </div>
          </div>
        </div>
  );
};

export default LocationMap;
