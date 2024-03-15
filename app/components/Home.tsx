import heroBg from "~/images/05FFD0C3-762A-4762-AAB3-F1737785E122_1_201_a.jpg";

const Home = () => {
    return (
        <div
        className="flex justify-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
        id="home_page_div"
      >
        <div className="mb-1">
          <h4
            className="text-center font-head font-bold text-5xl pt-20 text-white"
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
    )
}
export default Home;