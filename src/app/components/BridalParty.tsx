import Maddy from "../images/maddy.jpg";
import Dima from "../images/dima.jpg";
import Laynnae from "../images/lynnae.jpg";
import Profile from "./Utils/Profile";
import TextWithLine from "./Utils/TextWithLine";

const people = [
    {
        pic: Maddy,
        altVal: "maid_of_honor",
        name: "Madelyn Hayes",
        role: "Maid of Honor",
        desc: "Brittany and Maddy met in Sacramento, CA in 2017. From friends, to roommates, to best friends, and beyond – Maddy and Brittany are practically sisters. They may live in different states now, but that doesn&apos;t stop them from getting together as much as humanly possible, usually over a game of pool and a few hazy IPAs.",
    },
    {
        pic: Laynnae,
        altVal: "matron_of_honor",
        name: "Lynnae Petricevic",
        role: "Matron of Honor",
        desc: "Brittany and Lynnae met in Sacramento, CA in 2014. Lynnae was Brittany&apos;s first friend in California, a longtime career mentor, next-door neighbor of over 7 years, and a part of the family forever. Lynnae is a founding member of the Finer Things Club™ alongside her husband, Pero, and Brittany. Whether it&apos;s in the US or abroad, you&apos;re bound to see the two of them together.",
    },
    {
        pic: Dima,
        altVal: "best_man",
        name: "Dmitriy Gumenyuk",
        role: "Best Man",
        desc: "Reid and Dima met at Mira Loma High School in Sacramento, CA in 2006. Over 18 years they have enjoyed countless conversations, memories, and beer. Let&apos;s be honest, a LOT of beer.",
    },
];

const BridalParty = () => {
    return (
        <div id="bridal_party_div" className="pt-10 pb-4">
            <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center pt-10 text-gray-700 px-2">
                <h4 className="mb-1">Bridal Party</h4>
            </div>
            <div className="w-full flex flex-wrap justify-center pb-10">
                {people.map((person, idx) => (
                    <Profile
                        pic={person.pic}
                        altVal={person.altVal}
                        name={person.name}
                        role={person.role}
                        desc={person.desc}
                        key={idx}
                    />
                ))}
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
