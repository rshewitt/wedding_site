"use client";

import "tailwindcss/tailwind.css";

import { useEffect, useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
import SectionWrapper from "./components/Utils/SectionWrapper";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import BurgerMenu from "./components/BurgerMenu";
import RegistryModal from "./components/RegistryModal";
import BrideAndGroom from "./components/BrideAndGroom";
import BridalParty from "./components/BridalParty";
import Countdown from "./components/Countdown";
import Agenda from "./components/Agenda";
import LocationMap from "./components/LocationMap";
import ThingsToDo from "./components/ThingsToDo";
import Timeline from "./components/Timeline";
import Message from "./components/Message";
import Credit from "./components/Credit";
import GalleryCarousel from "./components/GalleryCarousel";
import SpotifyPlaylist from "./components/SpotifyPlayer";

export default function Index() {
  const [openWelcome, setOpenWelcome] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-white"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <Home />
      <BurgerMenu />
      <FAQ />

      <SectionWrapper className="bg-[#EFEFEF]">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper>
        <Agenda />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <BridalParty />
      </SectionWrapper>

      <SectionWrapper>
        <LocationMap />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <ThingsToDo />
      </SectionWrapper>

      <SectionWrapper>
        <Timeline />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper>
        <GalleryCarousel />
      </SectionWrapper>

      <SectionWrapper className="bg-[#EFEFEF]">
        <SpotifyPlaylist />
      </SectionWrapper>

      <SectionWrapper>
        <Message />
      </SectionWrapper>

      <Credit />
      <RegistryModal />
    </div>
  );
}
