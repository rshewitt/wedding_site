import Image from "next/image";
import welcomeImage from "../images/welcome.jpg";

interface WelcomeModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
    return (
        <div
            className={
                "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" +
                (!isOpen ? " -translate-y-full" : "")
            }
        >
            <div className="bg-white h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border">
                <div className="flex flex-col items-center p-5 my-auto w-full md:w-[500]">
                    <Image
                        src={welcomeImage}
                        alt="home_img"
                        fill
                        // objectFit="cover"
                        priority
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute flex flex-col items-center">
                        <h4 className="text-center font-head text-3xl-wel lg:text-5xl-wel text-white font-squiggly">
                            Brittany & Reid
                        </h4>
                        <button
                            type="button"
                            className="px-5 transition-all font-normal py-3 font-sans font-medium rounded-md outline outline-white outline-1 outline-contrast-3 text-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                            onClick={onClose}
                        >
                            Open Invitation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
