const CALENDAR_URL =
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXM5c2RnN2k4NTlnNWxlMDEzbWluM29hZnQgc2FtLmhldy5yQG0&tmsrc=sam.hew.r%40gmail.com";

const Agendas = () => {
    return (
        <div id="agenda_div" className="max-w-3xl mx-auto text-center">
            <div className="mb-4 text-gray-500 font-normal">
                Our wedding will be held on:
            </div>
            <h3 className="font-normalBold font-black mb-6 text-center text-gray-700">
                March 8, 2025
            </h3>
            <div className="px-12 flex max-w-md mx-auto mb-10">
                <a
                    href={CALENDAR_URL}
                    target={"_blank"}
                    className="px-8 py-4 transition-all font-normal w-full rounded-lg bg-[#354834] outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    rel="noreferrer"
                >
                    Save to calender
                </a>
            </div>

            <div className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center mb-10 pt-10 text-gray-700 px-2">
                <h4 className="mb-1">Festivities</h4>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0">
                <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold">
                    Mardi Gras
                </div>
                <div className="col-span-1 text-gray-700 text-right text-xl-wel font-normalBold">
                    Feb 28 - March 4
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
                <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold">
                    Ceremony & Reception
                </div>
                <div className="col-span-1 text-gray-700 text-right text-xl-wel font-normalBold">
                    March 8
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
                <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold">
                    Farewell Brunch
                </div>
                <div className="col-span-1 text-gray-700 text-right text-xl-wel font-normalBold">
                    March 9
                </div>
            </div>
        </div>
    );
};

export default Agendas;
