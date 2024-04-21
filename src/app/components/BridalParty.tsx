import TextWithLine from "./Utils/TextWithLine";
import DefaultPic from "images/default.jpg";
import DimaPic from "../images/dima.jpg";
import MaddyPic from "../images/maddy.jpg";
import Laynnae from "../images/lynnae.jpg";
import Image from "next/image";

const BridalParty = () => {
    return (
        <div id="bridal_party_div" className="pt-10 pb-4">
            <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center pt-10 text-gray-700 px-2">
                <h4 className="mb-1">Bridal Party</h4>
            </div>
            <div className="w-full flex flex-wrap justify-center pb-10">
                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
                        <Image
                            src={MaddyPic}
                            alt="maid_of_honor"
                            className="w-48 h-48 rounded-full mb-8"
                        />
                        <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                            Madelyn Hayes
                        </h3>
                        <div className="mb-4">
                            <TextWithLine>Maid of Honor</TextWithLine>
                        </div>
                        <p className="text-gray-500 font-normal leading-6">
                            Brittany and Maddy met in Sacramento, CA in 2017.
                            From friends, to roommates, to best friends, and
                            beyond – Maddy and Brittany are practically sisters.
                            They may live in different states now, but that
                            doesn&apos;t stop them from getting together as much
                            as humanly possible, usually over a game of pool and
                            a few hazy IPAs.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
                        <div className="flex flex-col items-center">
                            <Image
                                src={Laynnae}
                                alt="matron_of_honor"
                                className="w-48 h-48 rounded-full mb-8"
                            />
                            <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                                Lynnae Petricevic
                            </h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <TextWithLine>Matron of Honor</TextWithLine>
                            </div>
                            <p className="text-gray-500 font-normal leading-6">
                                Brittany and Lynnae met in Sacramento, CA in
                                2014. Lynnae was Brittany&apos;s first friend in
                                California, a longtime career mentor, next-door
                                neighbor of over 7 years, and a part of the
                                family forever. Lynnae is a founding member of
                                the Finer Things Club™ alongside her husband,
                                Pero, and Brittany. Whether it&apos;s in the US
                                or abroad, you&apos;re bound to see the two of
                                them together.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
                        <div className="flex flex-col items-center">
                            <Image
                                src={DimaPic}
                                alt="best_man"
                                className="w-48 h-48 rounded-full mb-8"
                            />
                            <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                                Dmitriy Gumenyuk
                            </h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <TextWithLine>Best Man</TextWithLine>
                            </div>
                            <p className="text-gray-500 font-normal leading-6">
                                Reid and Dima met at Mira Loma High School in
                                Sacramento, CA in 2006. Over 18 years they have
                                enjoyed countless conversations, memories, and
                                beer. Let&apos;s be honest, a LOT of beer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
                <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 py-8 md:px-0 md:text-3xl font-black">
                    <div className="col-span-1 text-center md:text-center text-xl-wel font-normalBold text-gray-800">
                        Christina Zechmeister
                        <div className="mb-4">
                            <TextWithLine>Bridesmaid</TextWithLine>
                        </div>
                    </div>
                    <div className="col-span-1 text-center md:text-center text-xl-wel font-normalBold text-gray-800">
                        Laura Barnick
                        <div className="mb-4">
                            <TextWithLine>Bridesmaid</TextWithLine>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-black">~ ~</div>
                <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 py-8 md:py-10 md:px-0 md:text-3xl font-black">
                    <div className="col-span-1 text-center md:text-center text-xl-wel font-normalBold text-gray-800">
                        Azeo Plescia
                        <div className="mb-4">
                            <TextWithLine>Groomsman</TextWithLine>
                        </div>
                    </div>
                    <div className="col-span-1 text-center md:text-center text-xl-wel font-normalBold text-gray-800">
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
