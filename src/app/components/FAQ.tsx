import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { AiFillInfoCircle } from "react-icons/ai";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { AccordionItemProps } from "@szhsin/react-accordion";
import chevron from "./chevron-down.svg";
import "react-responsive-modal/styles.css";
import Image from "next/image";

const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      // @ts-ignore # TODO: fix this
      <>
        {header}
        <Image
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left text-white ${isEnter && "bg-slate-200"}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const FAQS = {
  "The Basics": {
    "When is the wedding?": "March 8, 2025 4:00 PM",
    "Where is the wedding?":
      "The ceremony and reception will be held at The Mazant, 906 Mazant St, New Orleans, LA 70117",
    "Where should I stay?":
      "There are a number of lovely hotels in the area, we recommend Hotel Peter & Paul. We do not have any hotel room blocks set up for the wedding, but there are also many airbnbs and alternative hotels in the area.",
  },

  Attire: {
    "What should I wear?":
      "Come get fancy with us! Dress code is funky formal and cocktail attire. Your snazziest suit and tie, elegant dresses/pantsuits, and big bold patterns/colors/fabrics are perfect for our wedding. \n Don't feel like you need to wear a full tux, but please no jeans and t-shirts.",
    "What shoes should I wear?":
      "We will hold our ceremony and part of the reception outdoors on the lawn, so you may want to avoid pumps and stiletto heels. Otherwise we advise you stick to the dress code, but most of all, be comfortable! \n There will be dancing and uncomfortable shoes will not be an excuse for not dancing",
    "What colors should I avoid wearing?":
      "White, especially a white wedding dress :)",
    "What will the weather be like?":
      "There will be highs up to 75°F and lows down to 55°F, and while chance of rain is lower in March, there may be a rainy day during your stay. \n The wedding will be held outdoors (we will set up tents if rain becomes a concern!), so we recommend checking the weather before packing and dressing for the day.",
  },

  Ceremony: {
    "When should I get there?":
      "The ceremony will start promptly at 4:00pm (CST). You are welcome to arrive at the Mazant as early as 3:15pm. We recommend you arrive no later than 3:45pm to ensure there is enough time to grab a drink and find a seat.",
    "Can I park at the wedding venue?":
      "We highly recommend considering a rideshare service or taxi, there is only limited street parking near the venue.",
    "Can I take pictures?":
      "We have paid for a professional photographer to capture the ceremony, and we invite you to unplug and connect with us in this moment without electronics. We will ask everyone to turn off their phones during the ceremony. After the ceremony is complete and the wedding party has exited, you may turn on your devices and take pictures of whatever you wish! \n You will find QR codes around the ceremony and reception space, please scan one to join our shared album where you can view and upload photos from the day!",
    "Who do I call in case I get lost the day of the wedding?":
      "You can call our wedding coordinator at [PHONE NUMBER COMING SOON] but your best bet may be to use Google Maps on your phone.",
  },

  "Second Line": {
    "What's a second line?":
      "Second-lines are a popular tradition among New Orleans weddings. A second line signifies the beginning of a new life together. It is a walking parade led by Panorama Brass Band and the newlyweds. As we parade through the neighborhood after our ceremony, everyone we pass is welcome to join in the parade and many do. This is the “joie de vivre” everyone talks about in New Orleans. It's meant to bring out the feeling of pure happiness that swells up in your chest. This is what makes this city so different from anywhere else on Earth.",
    "How far will we be parading (walking) during the second line?":
      "We will parade a 4 block circle around the Mazant.",
    "What if I cannot walk the full second line?":
      "We will have petty cabs available for our guests with mobility concerns.",
    "Can I take alcohol outside of the venue for the second line?":
      "Yes! New Orleans does not have open container laws against carrying alcoholic beverages. Just make sure you're bringing a can or plastic -- no glass.",
  },

  Reception: {
    "Will there be dancing?":
      "It wouldn't be a New Orleans wedding without dancing!",
    "Most importantly, when will we eat?":
      "We will have our reception with a buffet style dinner once we return from our Second Line parade at 6:00pm.",
    "What if I have a dietary restriction?":
      "We are having a buffet style dinner, and we hope everyone will be able to find a meal they can enjoy.  If you have specific concerns or allergies, please don't hesitate to email us at mchewitt.wedding@gmail.com and we will speak to our caterer. \n [MENU COMING SOON]",
    "Will alcohol be served?":
      "Yes! We will have a self serve bar with beer, wine, and non-alcoholic drinks for the ceremony and second line. We will have an additional open bar during the reception.",
    "Is there a wedding hashtag?":
      "Yep! Feel free to use #thereyougodude to help share your night with us and others",
    "Can I take home centerpieces, decorations, etc?":
      "No. All of the decorations are borrowed or rented so please only leave our reception with a Hubigs pie, a full belly, and memories to last a lifetime.",
  },

  RSVP: {
    "Can I bring my kids?":
      "Sure! Your children were listed on your save the date, so please just let us know if they are coming and we can make sure there's enough food and seats for them.",
    "How/when do I RSVP?":
      "Please RSVP on this website -- just look to the bottom of the page.  Please send us your acceptances or regrets by February 8, 2025",
    "Can I bring a plus one?":
      'Unfortunately there is a limit on the guests we can invite and cannot accomodate a plus one for everyone. If we have counted a plus one for you, we have listed her/his name or "Guest" on your save the date card. If you feel we left out someone important, please let us know, but understand that we may not be able to accommodate additional guests',
    "Do I have to RSVP? Can't I just tell you I'm going to be there?":
      "Yes, please use the RSVP link at the bottom of the page. If you are having issues RSVPing online, please email us at mchewitt.wedding@gmail.com",
    "What do I do if something changes and I can/can't make it after I have RSVPed?":
      "We understand things come up. Just email us right away at mchewitt.wedding@gmail.com so we can make changes.",
  },

  Other: {
    "I have more questions!":
      "Please email us at mchewitt.wedding@gmail.com with any additional questions you have",
  },
};

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <AiFillInfoCircle
        style={{
          position: "fixed",
          top: "7px",
          right: "10px",
          zIndex: "9",
        }}
        size="45px"
        color="#8d4426"
        onClick={handleClick}
      />
      <Modal
        open={open}
        classNames={{
          modal: "customModal",
        }}
        onClose={handleClick}
        blockScroll={false}
        center
      >
        <h4 className="text-2xl-wel lg:text-2xl-wel font-squiggly text-center font-head mb-6 text-black">
          FAQ
        </h4>
        <div className="font-normal text-center text-black">
          <Accordion>
            {Object.entries(FAQS).map(([faqCategory, questions]) => (
              <AccordionItem key={faqCategory} header={faqCategory}>
                <Accordion>
                  {Object.entries(questions).map(([question, answer]) => (
                    <AccordionItem
                      className="text-black"
                      key={question}
                      header={question}
                    >
                      {answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Modal>
    </>
  );
};

export default FAQ;
