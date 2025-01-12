"use client";
import { useGetTrendingSearchesQuery } from "@/app/Services/Price/priceApi";
import Image from "next/image";
import React, {  useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Loading from "../Loading/Loading";

const CoinCard = ({ coin }: any) => {
  const priceChange = coin?.data?.price_change_percentage_24h?.["usd"];
  const isPositive = priceChange >= 0;

  return (
    <div className="sm:w-[252px]  h-[160px] p-2 xl:p-[17px] border border-[#E3E3E3] rounded-[10px]">
      <div className="sm:w-[218px] h-[126px]">
        <div className="flex items-center ">
          <div className="flex items-center sm:gap-2 gap-1">
            {coin.thumb && (
              <Image
                src={coin.thumb}
                alt={coin.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span className="font-medium text-[#171717] ">{coin.symbol.slice(0,4)}</span>
          </div>
          <span
            className={`px-2 py-1 ml-6 sm:ml-1  rounded text-[12px] ${
              isPositive
                ? "bg-[#0AB27D0F] text-[#32BE88]"
                : "bg-[#EE68551A] text-[#E96975]"
            }`}
          >
            {priceChange?.toFixed(1)}%
          </span>
        </div>

        <div className="mt-[12px] text-[#171717] text-[20px] font-medium">
          $
          {coin.data?.price < 1
            ? coin.data?.price.toFixed(7)
            : coin.data?.price.toFixed(2)}
        </div>

        {coin.data?.sparkline && (
          <div className="">
            <Image
              src={coin.data.sparkline}
              alt="Price graph"
              width={200}
              height={60}
              className="w-[88px] h-[37px] sm:w-[200px] sm:h-[60px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  const { data, isLoading } = useGetTrendingSearchesQuery(null); 
  const [swiper1Ref, setSwiper1Ref]: any = useState(null);
  const [swiper2Ref, setSwiper2Ref]: any = useState(null);



  if (isLoading || !data?.coins?.length) {
    return <Loading />;
  }

  return (
    <div className="xl:min-h-[628px] xl:w-[100%]  w-[104%] mt-[20px] xl:mt-[78px] p-[14px] md:p-[70px] bg-white">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-[#202020] text-[24px] font-semibold mb-[20px]">
            You May Also Like
          </h1>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiper1Ref}
              slidesPerView={5}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              spaceBetween={10}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {data.coins.map((coinData: any, index: number) => (
                <SwiperSlide key={index}>
                  <CoinCard coin={coinData.item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              //   ref={prevRef}
              className="custom-prev absolute left-0 sm:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] bg-white flex justify-center items-center shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <div className="rotate-180">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                    fill="#757779"
                  />
                </svg>
              </div>
            </button>

            <button
              //   ref={nextRef}
              className="custom-next absolute right-0 sm:right-[-15px]  top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] bg-white flex justify-center items-center shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[#202020] text-[24px] font-semibold mb-[20px]">
            Trending Coins
          </h1>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".custom-prev2",
                nextEl: ".custom-next2",
              }}
              onSwiper={setSwiper2Ref}
              slidesPerView={5}
              spaceBetween={10}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {data.coins.map((coinData: any, index: number) => (
                <SwiperSlide key={index}>
                  <CoinCard key={coinData.item.id} coin={coinData.item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              //   ref={prevRef2}
              className="custom-prev2 absolute left-0 sm:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] bg-white flex justify-center items-center shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <div className="rotate-180">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                    fill="#757779"
                  />
                </svg>
              </div>
            </button>

            <button
              //   ref={nextRef2}
              className="custom-next2 absolute right-0 sm:right-[-15px] top-1/2 -translate-y-1/2 z-10 w-[34px] h-[34px] bg-white flex justify-center items-center shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
