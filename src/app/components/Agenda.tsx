const CALENDAR_URL =
  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXM5c2RnN2k4NTlnNWxlMDEzbWluM29hZnQgc2FtLmhldy5yQG0&tmsrc=sam.hew.r%40gmail.com";

interface AgendaProps {
  title?: string;
  date?: string;
  idx?: number;
}

const AgendaItem = ({ title, date, idx }: AgendaProps) => {
  return (
    <div
      key={idx}
      className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:px-0"
    >
      <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold">
        {title}
      </div>
      <div className="col-span-1 text-gray-700 text-right text-xl-wel font-normalBold">
        {date}
      </div>
    </div>
  );
};

const agendaItems = [
  {
    title: "Mardi Gras",
    date: "Feb 28 - March 4",
  },
  {
    title: "Ceremony & Reception",
    date: "March 8",
  },
];
const Agenda = () => {
  return (
    <div id="agenda_div" className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-normal">
        Our wedding will be held on:
      </div>
      <h3 className="font-normalBold font-black mb-6 text-center text-gray-700">
        March 8, 2025
      </h3>
      <div className="px-12 flex max-w-md mx-auto">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all font-normal w-full rounded-lg bg-[#354834] outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Save to calender
        </a>
      </div>

      <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center pt-10 text-gray-700 px-2">
        <h4>Festivities</h4>
      </div>

      {agendaItems.map((item, idx) => (
        <AgendaItem title={item.title} date={item.date} key={idx} />
      ))}
    </div>
  );
};

export default Agenda;
