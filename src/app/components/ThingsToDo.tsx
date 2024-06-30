import Activity from "./Utils/Activity";

const Activities = [
  {
    title: "Mardi Gras",
    url: "https://www.mardigrasneworleans.com/parades/",
    desc: "The biggest weekend to celebrate Mardi Gras in New Orleans is the weekend before our wedding, and we invite you to join us! If you're interested in attending Mardi Gras (even if it's just for one day!) please RSVP, and we'll send you additional information on our local celebration.",
  },
  {
    title: "The French Quarter",
    url: "https://www.frenchquarter.com/",
    desc: "The French Quarter, also known as the Vieux Carré, is the oldest neighborhood in the city of New Orleans. Famous for its vibrant nightlife and colorful buildings with cast-iron balconies - there is plenty to see, shop, and eat here!",
  },
  {
    title: "Haunted History Tours",
    url: "https://hauntedhistorytours.com/",
    desc: "New Orleans is a city like no other — featuring hundreds of years of history steeped in mystique. Take a stroll through the French Quarter on a guided tour to learn more about the city's spooky side.",
  },
  {
    title: "Live Music",
    url: "https://www.neworleans.com/events/live-music-calendar/",
    desc: "Catch a concert while you're in town! From Preservation Hall to Tipitina's, there is something for everyone.",
  },
  {
    title: "New Orleans City Park",
    url: "https://neworleanscitypark.org/",
    desc: "The Park is home to the New Orleans Botanical Garden, Couturie Forest and Arboretum, the New Orleans Museum of Art, the Louisiana Children's Museum, and the largest grove of mature live oaks in the world, some of which are nearly 800 years old.",
  },
  {
    title: "Museums, Nature, and More",
    url: "https://www.neworleans.com/blog/post/new-orleans-top-attractions/",
    desc: "Whether you want to experience rich history, or a white alligator at the Audubon Zoo, this list is for you!",
  },
];

const ThingsToDo = () => {
  return (
    <div id="ttd_dev" className="max-w-3xl mx-auto text-center">
      <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center mb-10 pt-10 text-gray-700 px-2">
        <h4 className="mb-1">Things To Do</h4>
      </div>

      {Activities.map((activity, idx) => (
        <Activity
          title={activity.title}
          url={activity.url}
          desc={activity.desc}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ThingsToDo;
