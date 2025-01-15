import bride from "../images/bride.jpg";
import groom from "../images/groom.jpg";
import Profile from "./Utils/Profile";

const people = [
  {
    pic: bride,
    altVal: "bride",
    name: "Brittany Morgan McMahon",
    role: "Bride",
    desc: "Born on August 25th, 1992 in San Diego, CA to James Glenn McMahon and Michelle Ford Toleos.",
  },
  {
    pic: groom,
    altVal: "groom",
    name: "Reid Samuel Hewitt",
    role: "Groom",
    desc: "Born on June 10th 1992 in Sacramento, CA to Robbin Van Herr Waarden Hewitt and Ann Marie Hewitt.",
  },
];

const BrideAndGroom = () => {
  return (
    <div id="bride_and_groom_div">
      <div className="w-full flex flex-wrap">
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
    </div>
  );
};

export default BrideAndGroom;
