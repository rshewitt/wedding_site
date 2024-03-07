import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
// import heroBg from "~/images/hero-bg.jpg";
import heroBg from "~/images/DSC_1968.jpg";
import heroBgMobile from "~/images/DSC_1968.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Message";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import DigitalEnvelope from "~/components/DigitalEnvelope";
// import MusicPlayer from "~/components/MusicPlayer";
import ogimage from "~/images/ogimage.jpg";
import GalleryPhotos from "~/components/GalleryPhotos";
import SpotifyPlaylist from "~/components/SpotifyPlayer";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Wedding Invitation - Brittany & Reid",
    },
    {
      description:
        "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu",
    },
    {
      "og:image": ogimage,
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "amifauzi",
    },
    { "og:url": "https://www.amifauzi.com/" },
    { "og:title": "Undangan Pernikahan - Ami & Fauzi" },
    {
      "og:description": `Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu`,
    },
    { "og:type": "website" },

    { "twitter:image": ogimage },
    { "twitter:card": "summary_large_image" },
    {
      "twitter:description":
        "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu",
    },
  ];
};

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const { ENV } = useLoaderData<LoaderDataType>();
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const thisYear = new Date().getFullYear();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-background-2"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-white"
            style={{ textShadow: "5px 5px 2px #052E16" }}
          >
            Brittany & Reid
          </h4>
          <div
            className="text-center font-black font-sans text-lg text-[#EFEFEF] italic pt-3"
            style={{ textShadow: "5px 5px 2px #052E16" }}
          >
            March 8, 2025
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background mb-12">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="mb-12 pt-12">
        <Countdown />
      </SectionWrapper>

      <div className="mb-12">
        <LocationMap />
      </div>

      <SectionWrapper className="mb-12">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-12">
        <SpotifyPlaylist/>
      </SectionWrapper>

      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID!}>
        <SectionWrapper className="mb-12">
          <Message isMobile={isMobile} />
        </SectionWrapper>
      </GoogleOAuthProvider>
    

      <div className="py-24 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} forked from 
            <a 
            className="font-semibold" 
            href="https://github.com/fauzialz/amifauzi.com-open" 
            target={"_blank"} 
            rel="noreferrer"> Fauzi</a>
      </div>

      <SectionWrapper className="mb-12">
        <div className=" fixed bottom-0 right-0 mr-3 mb-8 md:mr-8 md:mb-8">
            <a
                href="https://www.zola.com/registry/brittanyandreid2025"
                target={"_blank"}
                className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                rel="noreferrer"
                >
                Registry
            </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
