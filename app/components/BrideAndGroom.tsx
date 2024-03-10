import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/bride2.jpg";
import groom from "~/images/groom.jpeg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="bride"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Brittany Morgan McMahon
            </h3>
            <div className="mb-4">
              <TextWithLine>Bride</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Born on August 25th, 1992 in San Diego, CA to {" "}
              <strong>James Glenn McMahon</strong> and{" "}
              <strong>Michelle Ford Toleos</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="groom"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Reid Samuel Hewitt
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Groom</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Born on June 10th 1992 in Sacramento, CA to <strong>Robbin Van Herr Waarden Hewitt</strong> and {" "}
                <strong>Ann Marie Hewitt</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
            Our Story
        </h3>
        <div className="px-4 mb-4 text-gray-500 font-head md:text-lg font-medium">
            We first met in Sacramento, CA [ insert more content here ]
        </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
