import heroBg from "../images/home.jpg";

import Image from "next/image";

const Home = () => {
    return (
        <div
            className="flex justify-center h-screen bg-no-repeat bg-center bg-cover"
            id="home_page_div"
        >
            <Image
                src={heroBg}
                alt="home_img"
                fill
                priority
                style={{ objectFit: "cover" }}
            />
            <div className="w-full absolute top-0 left-0 text-center mt-10">
                <div className="mb-1">
                    <h4
                        id="home_intro_us"
                        className="text-center font-squiggly font-head text-3xl-wel sm:pt-2 text-white"
                    >
                        Brittany & Reid
                    </h4>
                    <div className="text-center font-normal text-xl-wel">
                        March 8, 2025
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
