'use client'

import 'tailwindcss/tailwind.css'

import { useEffect, useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
// import { useMediaQuery } from "react-responsive";
import SectionWrapper from "./components/Utils/SectionWrapper";
import Home from "./components/Home";
import BurgerMenu from "./components/BurgerMenu";
import RegistryModal from "./components/RegistryModal";
import BrideAndGroom from "./components/BrideAndGroom";
import BridalParty from "./components/BridalParty";
import Countdown from "./components/Countdown";
import Agendas from "./components/Agendas";
import LocationMap from "./components/LocationMap";
import Lodging from "./components/Lodging";
import ThingsToDo from "./components/ThingsToDo";
import Message from "./components/Message";
import Credit from "./components/Credit";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GalleryCarousel from "./components/GalleryCarousel";
import SpotifyPlaylist from "./components/SpotifyPlayer";

export default function Index() {
//   const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

//   useEffect(() => {
//     setIsMobile(isSmallScreen);
//   }, [isSmallScreen]);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-white"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />
      
      <Home/>

      <BurgerMenu/>

      <SectionWrapper className="bg-white mb-12">
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

      <GoogleOAuthProvider clientId="replace_this">
        <SectionWrapper className="mb-12">
          <Message />
        </SectionWrapper>
      </GoogleOAuthProvider>
    
      <Credit/>
      
      <SectionWrapper className="mb-12">
        <RegistryModal />
      </SectionWrapper>
    </div>
  );
}