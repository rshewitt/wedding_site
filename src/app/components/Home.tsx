import heroBg from "../images/home.jpg";

import Image from "next/image";

const Home = () => {
    return (
        <div
            className="flex justify-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
            id="home_page_div"
        >
            <Image
                src={heroBg}
                alt="home_img"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="w-full absolute top-0 left-0 text-center mt-10">
                <div className="mb-1">
                    <h4
                        className="text-center font-head font-bold text-5xl pt-10 text-white"
                        style={{ textShadow: "5px 5px 2px #052E16" }}
                    >
                        Brittany & Reid
                    </h4>
                    <div
                        className="text-center font-black font-sans text-lg py-4 text-[#EFEFEF] italic pt-3"
                        style={{ textShadow: "5px 5px 2px #052E16" }}
                    >
                        March 8, 2025
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
