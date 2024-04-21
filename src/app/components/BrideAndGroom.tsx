import TextWithLine from "./Utils/TextWithLine";
import bride from "../images/bride2.jpg";
import groom from "../images/groom.jpg";
import Image from "next/image";

const BrideAndGroom = () => {
    return (
        <div id="bride_and_groom_div" className="pt-10 pb-4">
            <div className="w-full flex flex-wrap pb-20">
                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
                        <Image
                            src={bride}
                            alt="bride"
                            className="w-48 h-48 rounded-full mb-8"
                        />
                        <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                            Brittany Morgan McMahon
                        </h3>
                        <div className="mb-4">
                            <TextWithLine>Bride</TextWithLine>
                        </div>
                        <p className="font-normal text-gray-500 leading-6">
                            Born on August 25th, 1992 in San Diego, CA to{" "}
                            <strong>James Glenn McMahon</strong> and{" "}
                            <strong>Michelle Ford Toleos</strong>.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
                        <div className="flex flex-col items-center">
                            <Image
                                src={groom}
                                alt="groom"
                                className="w-48 h-48 rounded-full mb-8"
                            />
                            <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                                Reid Samuel Hewitt
                            </h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <TextWithLine>Groom</TextWithLine>
                            </div>
                            <p className="font-normal text-gray-500 leading-6">
                                Born on June 10th 1992 in Sacramento, CA to{" "}
                                <strong>Robbin Van Herr Waarden Hewitt</strong>{" "}
                                and <strong>Ann Marie Hewitt</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl-wel lg:text-5xl-wel font-squiggly mb-6 text-center text-gray-700">
                        Our Story
                    </h3>
                    <div className="px-4 mb-4 text-gray-500 font-normal">
                        We first met in Sacramento, CA in 2017; we lived on
                        opposite sides of the country, and just weren&apos;t
                        sure what the future held. As fate would have it, 2019
                        rolled around, we reconnected and rekindled our
                        relationship, and have been inseparable ever since. From
                        California to Colorado, we made our home. On October 12,
                        2023, we hiked to the top of a volcano in Bali to watch
                        the sunrise – just as we turned to start our descent,
                        Reid proposed with a, &quot;There you go, dude.&quot;
                        Many laughs, tears, and one YES later, we were engaged.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrideAndGroom;
