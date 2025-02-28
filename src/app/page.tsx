"use client";
import { useEffect, useState } from "react";
import BitcoinPriceChart from "./components/BitcoinPriceChart/BitcoinPriceChart";
import Performance from "./components/Performance/Performance";
import Sentiments from "./components/Sentiments/Sentiments";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Team from "./components/Team/Team"; 
import RightSide from "./components/RightSide/RightSide";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "fundamentals", label: "Fundamentals" },
    { id: "about", label: "About" },
    { id: "sentiments", label: "Sentiments" },
    { id: "team", label: "Team" },
    { id: "technicals", label: "Technicals" },
    { id: "tokenomics", label: "Tokenomics" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop - 100 &&
            currentPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   const [isLargeScreen, setIsLargeScreen] = useState(false);

   useEffect(() => {
     const handleResize = () => {
       setIsLargeScreen(window.innerWidth >= 1280); 
     };
 
     handleResize(); 
     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);


  return (
    <>
      <div className="flex  gap-[6.5px] items-center mb-[17.81px] mt-[17.19px]">
        <span className=" flex gap-[9.34px] items-center text-[#3E5765] ">
          Cryptocurrencies{" "}
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_500)">
              <path
                d="M5.41353 5.9528C5.43306 5.88118 5.42004 5.7998 5.37446 5.70866C5.3354 5.63704 5.28006 5.56217 5.20845 5.48405L1.21431 1.49967C1.11014 1.39551 0.986442 1.34342 0.843213 1.34342C0.699984 1.34342 0.577913 1.39551 0.477002 1.49967C0.37609 1.60384 0.325635 1.72754 0.325635 1.87077C0.325635 2.014 0.374463 2.1377 0.472119 2.24186L4.28071 5.94303L0.472119 9.65397C0.380973 9.73861 0.32889 9.84277 0.315869 9.96647C0.302848 10.0902 0.330518 10.2057 0.398877 10.3132C0.467236 10.4206 0.563265 10.4906 0.686963 10.5231C0.810661 10.5557 0.927848 10.5492 1.03853 10.5036C1.10363 10.4775 1.16222 10.4385 1.21431 10.3864L5.20845 6.40202C5.28006 6.32389 5.33215 6.25553 5.3647 6.19694C5.41027 6.10579 5.42655 6.02441 5.41353 5.9528ZM10.101 5.48405L6.10688 1.49967C6.00272 1.39551 5.87902 1.34342 5.73579 1.34342C5.59256 1.34342 5.47049 1.39551 5.36958 1.49967C5.26867 1.60384 5.21821 1.72754 5.21821 1.87077C5.21821 2.014 5.26704 2.1377 5.3647 2.24186L9.17329 5.9528L5.3647 9.64421C5.27355 9.73535 5.22147 9.84277 5.20845 9.96647C5.19543 10.0902 5.22472 10.2041 5.29634 10.3083C5.36795 10.4124 5.46398 10.4824 5.58442 10.5182C5.70487 10.554 5.82043 10.5492 5.9311 10.5036C5.99621 10.4775 6.05155 10.4385 6.09712 10.3864L10.101 6.41178C10.1726 6.32064 10.2247 6.24902 10.2573 6.19694C10.3028 6.1123 10.3191 6.03092 10.3061 5.9528C10.3387 5.81608 10.2703 5.65983 10.101 5.48405Z"
                fill="#3E5765"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_500">
                <rect
                  width="10"
                  height="10.5"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.312744 11.1931)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="text-[14px] font-medium leading-[16.94px] text-[#0F1629]">
          Bitcoin
        </span>
      </div>
      <div className="  xl:flex hidden gap-5 ">
        <BitcoinPriceChart />
        <RightSide />
      </div>

      {!isLargeScreen && <BitcoinPriceChart />}

      <div className="my-[20px] md:w-[63%]   h-[48px]  border-b border-b-[#D3E0E6] flex items-center">
        <ul className=" list-none h-[48px] overflow-x-auto flex items-center   font-medium gap-[32px] text-[#3E424A] leading-[19.36px] tracking-[-1%] ">
          {sections.map((el, index) => {
            return (
              <li
                onClick={() => scrollToSection(el.id)}
                key={index}
                className={`h-12 flex items-center   lg:text-start text-center   hover:text-[#0141CF] cursor-pointer ${
                  activeSection === el.id
                    ? "border-b-[#0052FE] border-b-[3px] text-[#0141CF] font-semibold"
                    : ""
                }`}
              >
                {el.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Performance />
        <Sentiments />
        <About />
        <div className="md:flex hidden  ">
          <Tokenomics />
        </div>
        <Team />
      </div>
    </>
  );
}
