const CALENDAR_URL = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXM5c2RnN2k4NTlnNWxlMDEzbWluM29hZnQgc2FtLmhldy5yQG0&tmsrc=sam.hew.r%40gmail.com"

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
      Our wedding will be held on:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        March 8, 2025
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Save to calender
        </a>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Mardi Gras
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          Feb 28 - March 4
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Ceremony & Reception
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          March 8
        </div>
      </div>
      <div className="col-span-1 text-gray-400 text-lg md:text-center font-sans">
        additional festivities to be announced!
      </div>
    </div>
  );
};

export default Agendas;
