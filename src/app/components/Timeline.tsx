import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineEvents = [
  {
    topic: "WE DO",
    times: [
      {
        time: "4:00 PM",
        text: [
          "Ceremony",
          "Live Band | Panorama Brass Band",
          "Processional",
          "Reading",
          "Vows",
          "Rings",
          "Pronouncement",
          "Recessional",
        ],
      },
    ],
  },
  {
    topic: "WE SECOND LINE",
    times: [
      {
        time: "4:45 - 5:15PM",
        text: [
          "Cocktail Break",
          "Hors D'oeuvres",
          "Self Serve Bar",
          "More Live Music",
        ],
      },
      {
        time: "5:15 - 5:45PM",
        text: ["Second Line Parade"],
      },
    ],
  },
  {
    topic: "WE EAT",
    times: [
      {
        time: "6:00PM",
        text: ["Buffet Style Dinner", "Charcuterie", "Pasta Bar", "Roast Beef"],
      },
    ],
  },
  {
    topic: "WE PARTY",
    times: [
      {
        time: "6:45PM",
        text: ["Live DJ"],
      },
      {
        time: "8:00PM",
        text: ["Cake Cutting"],
      },
      {
        time: "9:00PM",
        text: [
          "Join us as we keep the party going at Frenchman St. after our reception!",
        ],
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div id="timeline_div" className="max-w-3xl mx-auto text-center">
      <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center mb-10 pt-10 text-gray-700 px-2">
        <h4>Timeline</h4>
      </div>
      <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold pb-4 text-center">
        <h4>Saturday March 8 2025</h4>
      </div>
      <VerticalTimeline
        lineColor={"#9ca3af"}
        className="vertical-timeline-custom-line"
      >
        {timelineEvents.map((timelineEvent, idx) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(53, 72, 52)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(53, 72, 52)" }}
            iconStyle={{ background: "rgb(53, 72, 52)", color: "#fff" }}
            key={idx}
            visible
          >
            <h3 className="text-white bg-[#0f2e31] text-2xl rounded-lg font-normalBold mb-4">
              {timelineEvent.topic}
            </h3>
            {timelineEvent.times.map((time, idxTime) => (
              <div key={idxTime}>
                <h3
                  className="vertical-timeline-element-title text-[#de9931]"
                  style={idxTime > 0 ? { marginTop: "20px" } : {}}
                >
                  {time.time}
                </h3>
                {time.text.map((t, idxText) => (
                  <div key={idxText}>
                    <p style={{ margin: "0.251em 0 0" }}>{t}</p>
                    {t.startsWith("Join us") ? (
                      <p className="italic text-gray-400">
                        Dance Floor and bar open until 9:00PM
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      ;
    </div>
  );
};

export default Timeline;
