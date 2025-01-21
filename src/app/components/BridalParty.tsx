import Maddy from "../images/maddy.jpg";
import Dima from "../images/dima.jpg";
import Laynnae from "../images/lynnae.jpg";
import Profile, { ProfileMinor } from "./Utils/Profile";

const peopleMain = [
  {
    pic: Maddy,
    altVal: "maid_of_honor",
    name: "Madelyn Hayes",
    role: "Maid of Honor",
    desc: "Brittany and Maddy met in Sacramento, CA in 2017. From friends, to roommates, to best friends, and beyond – Maddy and Brittany are practically sisters. They may live in different states now, but that doesn't stop them from getting together as much as humanly possible, usually over a game of pool and a few hazy IPAs.",
  },
  {
    pic: Laynnae,
    altVal: "matron_of_honor",
    name: "Lynnae Petricevic",
    role: "Matron of Honor",
    desc: "Brittany and Lynnae met in Sacramento, CA in 2014. Lynnae was Brittany's first friend in California, a longtime career mentor, next-door neighbor of over 7 years, and a part of the family forever. Lynnae is a founding member of the Finer Things Club™ alongside her husband, Pero, and Brittany. Whether it's in the US or abroad, you're bound to see the two of them together.",
  },
  {
    pic: Dima,
    altVal: "best_man",
    name: "Dmitriy Gumenyuk",
    role: "Best Man",
    desc: "Reid and Dima met at Mira Loma High School in Sacramento, CA in 2006. Over 18 years they have enjoyed countless conversations, memories, and beer. Let's be honest, a LOT of beer.",
  },
];

const peopleMinorBride = [
  {
    name: "Christina Zechmeister",
    role: "Bridesmaid",
  },
  {
    name: "Laura Barnick",
    role: "Bridesmaid",
  },
];

const peopleMinorGroom = [
  {
    name: "Azeo Plescia",
    role: "Groomsman",
  },
  {
    name: "Ryan Thalken",
    role: "Groomsman",
  },
];

const BridalParty = () => {
  return (
    <div id="bridal_party_div">
      <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center text-gray-700 px-2">
        <h4>Bridal Party</h4>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {peopleMain.map((person, idx) => (
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
        <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl font-black">
          {peopleMinorBride.map((person, idx) => (
            <ProfileMinor name={person.name} role={person.role} key={idx} />
          ))}
        </div>
        <div className="text-xl text-black mb-4">~ ~</div>
        <div className="grid grid-cols-1 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl font-black">
          {peopleMinorGroom.map((person, idx) => (
            <ProfileMinor name={person.name} role={person.role} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BridalParty;
