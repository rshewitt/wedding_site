import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls"; 
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import Home from "~/components/Home";
import BurgerMenu from "~/components/BurgerMenu";
import RegistryModal from "~/components/RegistryModal";
import BrideAndGroom from "~/components/BrideAndGroom";
import BridalParty from "~/components/BridalParty";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import Lodging from "~/components/Lodging";
import ThingsToDo from "~/components/ThingsToDo";
import Message from "~/components/Message";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import DigitalEnvelope from "~/components/DigitalEnvelope";
// import MusicPlayer from "~/components/MusicPlayer";
import GalleryCarousel from "~/components/GalleryCarousel";
import SpotifyPlaylist from "~/components/SpotifyPlayer";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Wedding Invitation - Brittany & Reid",
    },
    {
      description:
        "wedding",
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "br_wedding",
    },
    { "og:title": "Wedding - Brittany & Reid" },
    {
      "og:description": `wedding`,
    },
    { "og:type": "website" },
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
      
      <Home/>

      <BurgerMenu/>

      <SectionWrapper className="bg-background mb-12">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-12">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF] mb-12">
        <BridalParty />
      </SectionWrapper>

      <SectionWrapper className="mb-12">
        <LocationMap />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF] mb-12">
        <Lodging />
      </SectionWrapper>
    
      <SectionWrapper className="mb-12">
        <ThingsToDo />
      </SectionWrapper>

      <SectionWrapper className="mb-12 pt-12 bg-[#EFEFEF]">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-12">
        <GalleryCarousel/>
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
        <RegistryModal />
      </SectionWrapper>
    </div>
  );
}
