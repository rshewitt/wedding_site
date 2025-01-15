import { memo, useRef, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import MessageInformationIcon from "./MessageInfo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Message = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyrSwUKoDYzFOHqPmMulr_Ij6AD53-N2QAZDdik2S9gQwq4sB6d_BnFyKJJl3CLMj7g/exec";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current!),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setCommentSubmitted(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // TODO: update the events to a loop create
  return (
    <div id="rsvp_div">
      <h4 className="text-3xl-wel lg:text-5xl-wel font-squiggly text-center text-gray-700 px-4">
        RSVP
      </h4>
      <div className="flex justify-center px-4">
        <LoadingOverlay active={loading} spinner text="Submitting form...">
          <div className="rounded-lg shadow-2xl p-6 md:p-8 bg-white top-8 mb-6 md:mb-0">
            <MessageInformationIcon />
            {!commentSubmitted ? (
              <form
                ref={formRef}
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <fieldset disabled={loading}>
                  <div className="mb-6" style={{ textAlign: "center" }}>
                    <p className="text-fcxl-wel font-normalBold text-black text-center mb-6 mx-3">
                      We can&apos;t wait to celebrate with you!
                    </p>
                    <p className="text-xl-wel font-normalBold text-black text-center mb-6 mx-3">
                      What are your arrival and departure dates?
                    </p>
                    <p className="text-md-twl font-normalBold text-black px-5 mb-2">
                      Arrival
                    </p>
                    <DatePicker
                      name="arrival"
                      showIcon
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <br />
                    <p className="text-md-twl font-normalBold text-black px-5 mb-2">
                      Departure
                    </p>
                    <DatePicker
                      name="departure"
                      showIcon
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                    <br />
                  </div>
                  <input
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="First Name"
                    name="first_name"
                    required
                    maxLength={70}
                  />
                  <input
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="Last Name"
                    name="last_name"
                    required
                    maxLength={70}
                  />
                  <input
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="Email Address"
                    name="email"
                    required
                    maxLength={70}
                  />
                  <input
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="Phone Number"
                    name="phone"
                    required
                    maxLength={70}
                  />
                  <textarea
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="Message"
                    name="message"
                    maxLength={750}
                  />
                  <textarea
                    className="w-full bg-[#f8fafc] text-md-twl font-normalBold text-black rounded border px-3 py-1.5 mb-6"
                    placeholder="If you have any food allergies write them here"
                    name="food_allergies"
                    maxLength={750}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      id="submit-message-btn"
                      className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#354834] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            ) : (
              <h4 className="text-xl font-head font-bold text-center md:mb-16 text-gray-700 px-4">
                Form submitted. See you there!
              </h4>
            )}
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
};

export default memo(Message);
