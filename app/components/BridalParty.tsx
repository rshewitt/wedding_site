import TextWithLine from "./Utils/TextWithLine";
// import bride from "~/images/bride.jpg";
// import groom from "~/images/groom.jpeg";
import DefaultPic from "~/images/default.jpg"

const BridalParty = () => {
  return (
    <div className="pt-20 pb-4">
      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
        <h4 className="mb-1">Bridal Party</h4>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-10">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={DefaultPic}
              alt="maid_of_honor"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
            Madelyn Hayes
            </h3>
            <div className="mb-4">
              <TextWithLine>Maid of Honor</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Brittany and Maddy met in Sacramento, CA. [ insert text]
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={DefaultPic}
                alt="matron_of_honor"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Lynnae Petricevic
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Matron of Honor</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Brittany and Lynnae met in Sacramento, CA [ insert text ]
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={DefaultPic}
                alt="best_man"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Dmitriy Gumenyuk
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Best Man</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Reid and Dima met in high school in 2006 [ insert text ]
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="max-w-3xl mx-auto text-center">
            <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 py-8 md:px-0 md:text-3xl font-black">
                <div className="col-span-1 text-gray-600 text-center md:text-center font-sans">
                Christina Zechmeister
                    <div className="mb-4">
                      <TextWithLine>Bridesmaid</TextWithLine>
                    </div>
                </div>
                <div className="col-span-1 text-gray-600 text-center md:text-center font-sans">
                Laura Barnick
                <div className="mb-4">
                    <TextWithLine>Bridesmaid</TextWithLine>
                  </div>
                </div>
            </div>
            <div className="text-xl">~ ~</div>
            <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 py-8 md:py-10 md:px-0 md:text-3xl font-black">
                <div className="col-span-1 text-gray-600 md:text-center font-sans">
                Azeo Plescia
                  <div className="mb-4">
                    <TextWithLine>Groomsman</TextWithLine>
                  </div>
                </div>
                <div className="col-span-1 text-gray-600 md:text-center font-sans">
                Ryan Thalken
                <div className="mb-4">
                    <TextWithLine>Groomsman</TextWithLine>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BridalParty;