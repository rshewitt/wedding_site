"use client";

import "tailwindcss/tailwind.css";

import { useEffect, useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
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

            <SectionWrapper className="bg-[#EFEFEF] mb-12">
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
                <GalleryCarousel />
            </SectionWrapper>

            <SectionWrapper className="mb-12">
                <SpotifyPlaylist />
            </SectionWrapper>

            <SectionWrapper className="mb-12 bg-[#EFEFEF]">
                <Message />
            </SectionWrapper>

            <Credit />

            <SectionWrapper className="mb-12">
                <RegistryModal />
            </SectionWrapper>
        </div>
    );
}
