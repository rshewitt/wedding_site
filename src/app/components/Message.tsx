import {
  memo,
  useRef,
  useState,
} from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Message = () => {
//   const fetcher = useFetcher<{ ok: boolean }>();
  const formRef = useRef<HTMLFormElement>(null);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const sendMessage = useGoogleLogin({
    onSuccess: async (res) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${res.access_token}` },
        }
      );

      const formData = new FormData(formRef.current!);
      formData.append("google_name", userInfo.data.name);
    //   fetcher.submit(formData, { method: "post" });
      setCommentSubmitted(true)
    },
  });

  return (
	<div id="rsvp_div">
	  <h4 className="text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4">
		RVSP
	  </h4>
		<div className="flex justify-center px-4">
		  <div className="rounded-lg shadow-2xl p-6 md:p-8 bg-white top-8 mb-6 md:mb-0">
			{ !commentSubmitted ? (
			<form
			  ref={formRef}
			  onSubmit={(e) => {
				e.preventDefault();
				sendMessage();
			  }}
			>
			  {/* <fieldset disabled={fetcher.state === "submitting"}> */}
              <fieldset>
                <p className="text-center text-black font-head mb-3">What events are you planning to attend?</p>
                <input className="mb-3" type="checkbox" name="events" value="Mardi Gras" />
                <label htmlFor="event3" className="font-head text-black px-5"> Mardi Gras: Fri 2/28 - Tues 3/4</label><br />
                <input className="mb-3" type="checkbox" name="events" value="Rehearsal Dinner" />
                <label htmlFor="event1" className="font-head text-black px-5"> Rehearsal Dinner: Fri 3/7</label><br />
                <input className="mb-3" type="checkbox" name="events" value="Ceremony & Reception" />
                <label htmlFor="event4" className="font-head text-black px-5"> Ceremony & Reception: Sat 3/8</label><br />
                <input className="mb-3" type="checkbox" name="events" value="Farewell Brunch" />
                <label htmlFor="event2" className="font-head text-black px-5"> Farewell Brunch: Sun 3/9</label><br />
                <br />
				<input
				  className="w-full bg-[#f8fafc] text-black rounded border px-3 py-1.5 mb-6 outline-[#052E16]"
				  placeholder="First Name"
				  name="first_name"
				  required
				  maxLength={70}
				/>
                <input
				  className="w-full bg-[#f8fafc] text-black rounded border px-3 py-1.5 mb-6 outline-[#052E16]"
				  placeholder="Last Name"
				  name="last_name"
				  required
				  maxLength={70}
				/>
                <input
				  className="w-full bg-[#f8fafc] text-black rounded border px-3 py-1.5 mb-6 outline-[#052E16]"
				  placeholder="Email Address"
				  name="email"
				  required
				  maxLength={70}
				/>
                <input
				  className="w-full bg-[#f8fafc] text-black rounded border px-3 py-1.5 mb-6 outline-[#052E16]"
				  placeholder="Phone Number"
				  name="phone"
				  required
				  maxLength={70}
				/>
				<textarea
				  className="w-full bg-[#f8fafc] text-black rounded border px-3 py-1.5 min-h-[6rem] mb-4 outline-[#052E16]"
				  placeholder="Message"
				  name="message"
				  maxLength={750}
				/>
				<div className="flex justify-end">
				  <button
					type="submit"
					id="submit-message-btn"
					className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-green-950 hover:bg-green-800 outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
				  >
					Submit
				  </button>
				</div>
			  </fieldset>
			</form> ) : (
				<h4 className="text-3xl font-head font-bold text-center md:mb-16 text-gray-700 px-4">
					Form submitted. See you there!
	  			</h4> )
			}
		  </div>
		</div>
	  </div>
  );
};

export default memo(Message);
