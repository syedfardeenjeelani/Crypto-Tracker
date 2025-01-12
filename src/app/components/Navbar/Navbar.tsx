"use client";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      style={{
        boxShadow: "0px 0px 12px 0px #1026490F",
      }}
      className="border-[#DEDFE2] bg-white border"
    >
      <div className="md:px-[60px] px-6   mx-auto flex justify-between  items-center   ">
        <div>
          <svg
            width="97"
            height="72"
            viewBox="0 0 97 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1122)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.6804 31.0098L36.877 30.4073L37.2258 30.038C37.2027 29.4445 37.4755 28.738 37.9953 28.1522C38.5651 27.5098 39.3146 27.145 39.9454 27.1585L40.2912 26.7922L40.8938 27.5956L40.8829 27.6071C41.35 28.2272 41.1642 29.345 40.3611 30.2505C39.5097 31.2097 38.3396 31.5088 37.6833 31.0067L37.6804 31.0098Z"
                fill="url(#paint0_linear_1_1122)"
              />
              <path
                d="M39.8117 29.6874C40.7245 28.6585 40.9033 27.3266 40.2109 26.7123C39.5186 26.0981 38.2174 26.4342 37.3046 27.4631C36.3918 28.4919 36.2131 29.8239 36.9054 30.4381C37.5977 31.0523 38.8989 30.7162 39.8117 29.6874Z"
                fill="url(#paint1_linear_1_1122)"
              />
              <path
                d="M39.8243 29.6985C40.7315 28.6759 40.9001 27.3441 40.2008 26.7237C39.5015 26.1032 38.1992 26.4292 37.292 27.4518C36.3848 28.4743 36.2162 29.8062 36.9155 30.4266C37.6148 31.047 38.9171 30.721 39.8243 29.6985Z"
                fill="#0052FE"
              />
              <path
                d="M10.3802 36.0675L19.2748 26.5374H14.5447L5.09816 36.4603V26.5374H0.847656V46.2692H5.09816V41.617L7.58131 39.0398L13.4964 46.2692H18.4876L10.9819 36.825L10.3802 36.0667V36.0675Z"
                fill="#0052FE"
              />
              <path
                d="M32.9824 35.3068C31.6601 33.2093 29.2339 31.9119 26.276 31.9119C23.1148 31.9119 20.5482 33.3948 19.2965 35.7446C18.7559 36.7512 18.4611 37.9201 18.4611 39.1966C18.4611 43.456 21.7596 46.4814 26.276 46.4814C30.7924 46.4814 34.0661 43.456 34.0661 39.1966C34.0661 37.7289 33.6765 36.4066 32.9824 35.3068ZM26.276 43.1145C24.2162 43.1145 22.6312 41.642 22.6312 39.1966C22.6312 37.0935 23.8009 35.7101 25.4389 35.3647C25.7064 35.306 25.9868 35.2771 26.276 35.2771C26.4793 35.2771 26.6745 35.2899 26.8665 35.3213C28.625 35.5751 29.8935 36.9898 29.8935 39.1966C29.8935 41.642 28.3366 43.1145 26.2768 43.1145H26.276Z"
                fill="#0052FE"
              />
              <path
                d="M40.9306 32.1221H36.8118V46.2698H40.9306V32.1221Z"
                fill="#0052FE"
              />
              <path
                d="M53.3954 31.9119C51.4673 31.9119 49.8036 32.5706 48.695 33.7788V32.1223H44.761V46.2701H48.8789V39.2745C48.8789 38.2463 49.1007 37.4357 49.4951 36.834C50.0928 35.9061 51.0889 35.4635 52.2867 35.4635C53.9055 35.4635 54.9193 36.2933 55.125 38.0808C55.1515 38.3041 55.1643 38.5467 55.1643 38.8022V46.2693H57.433L59.2855 43.697V38.1723C59.2855 33.8576 56.7493 31.9119 53.3954 31.9119Z"
                fill="#0052FE"
              />
              <path
                d="M80.6955 26.47L60.489 46.2701H66.7784L68.6244 43.6455L79.08 28.7691L80.6955 26.47Z"
                fill="url(#paint2_linear_1_1122)"
              />
              <path
                d="M74.7395 26.47L74.0936 27.3681L63.953 41.4556L60.489 46.2701L80.6955 26.47H74.7395Z"
                fill="url(#paint3_linear_1_1122)"
              />
              <path
                d="M78.6952 42.8124L78.4342 42.4428C78.2164 42.1343 77.8622 41.9512 77.4862 41.9512H72.7328C72.5569 41.9512 72.4203 42.0556 72.3552 42.1946L81.1414 46.27L78.6952 42.8124Z"
                fill="#F69300"
              />
              <path
                d="M72.3552 42.1948C72.2973 42.3185 72.2965 42.4696 72.3825 42.6013L73.3586 44.0867H73.361L74.7966 46.2702H81.1422L72.356 42.1948H72.3552Z"
                fill="url(#paint4_linear_1_1122)"
              />
              <path
                d="M69.4985 30.1348L67.9938 27.9256L67.0025 26.4707H60.7942L69.4013 30.7051C69.57 30.579 69.6334 30.3332 69.4993 30.1348H69.4985Z"
                fill="url(#paint5_linear_1_1122)"
              />
              <path
                d="M60.7935 26.47L63.4421 30.2883C63.4533 30.3036 63.4638 30.3165 63.475 30.3317C63.6943 30.6185 64.0342 30.788 64.3973 30.788H69.1531C69.2503 30.788 69.333 30.7543 69.4013 30.7037L60.7943 26.4692L60.7935 26.47Z"
                fill="#F69300"
              />
              <path
                d="M89.4297 27.2261H87.7572V31.6124H86.627V27.2261H84.9774V26.3906H89.4297V27.2261ZM91.5416 26.3906L92.9458 30.1619L94.3442 26.3906H95.8226V31.6124H94.681V30.1619L94.8066 27.6903L93.3282 31.6124H92.5576L91.085 27.6961L91.1991 30.1619V31.6124H90.0747V26.3906H91.5416Z"
                fill="black"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_1122"
                x1="40.9942"
                y1="27.7964"
                x2="37.9816"
                y2="31.3111"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3372F5" />
                <stop offset="0.249995" stopColor="#3372F5" />
                <stop offset="0.505208" stopColor="#80DBFB" />
                <stop offset="0.838547" stopColor="#3372F5" />
                <stop offset="1" stopColor="#3372F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_1122"
                x1="45.4545"
                y1="27.7847"
                x2="44.6486"
                y2="28.6919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0080D4" />
                <stop offset="0.47" stopColor="white" />
                <stop offset="0.6" stopColor="#F1F8FC" />
                <stop offset="1" stopColor="#007DCC" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_1122"
                x1="76.1558"
                y1="31.7833"
                x2="68.3272"
                y2="40.8402"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFAC00" />
                <stop offset="1" stopColor="#FE7801" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_1122"
                x1="60.489"
                y1="36.3704"
                x2="80.6955"
                y2="36.3704"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFCE00" />
                <stop offset="1" stopColor="#FFB003" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_1_1122"
                x1="72.3142"
                y1="44.2329"
                x2="81.1414"
                y2="44.2329"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE8B01" />
                <stop offset="1" stopColor="#FE7801" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_1122"
                x1="60.7934"
                y1="28.5875"
                x2="69.5716"
                y2="28.5875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFCE00" />
                <stop offset="1" stopColor="#FFC101" />
              </linearGradient>
              <clipPath id="clip0_1_1122">
                <rect
                  width="96"
                  height="24"
                  fill="white"
                  transform="translate(0.847656 24)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="max-w-[909px]   hidden md:flex items-center justify-end gap-[45px]  ">
          <ul className="flex gap-[32px] text-[#0F1629] font-semibold tracking-[-1%] ">
            <li className="li">Crypto Taxes</li>
            <li className="li">Free Tools</li>
            <li className="li">Resources Center</li>
          </ul>
          <button
            className="text-white w-[136px] h-[40px] rounded-lg p-2 "
            style={{
              background:
                "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
            }}
          >
            Get Started
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#0F1629"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 6H21"
              stroke="#0F1629"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 18H21"
              stroke="#0F1629"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-[72px] z-30  left-0 right-0 bg-white border-t border-[#DEDFE2] md:hidden">
            <div className="px-4 py-2">
              <ul className="flex flex-col gap-4 text-[#0F1629] font-semibold">
                <li className="py-2 cursor-pointer hover:text-blue-600">
                  Crypto Taxes
                </li>
                <li className="py-2 cursor-pointer hover:text-blue-600">
                  Free Tools
                </li>
                <li className="py-2 cursor-pointer hover:text-blue-600">
                  Resource Center
                </li>
                <li className="pt-2 pb-4">
                  <button
                    className="text-white w-full h-[40px] rounded-lg p-2"
                    style={{
                      background:
                        "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
                    }}
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
