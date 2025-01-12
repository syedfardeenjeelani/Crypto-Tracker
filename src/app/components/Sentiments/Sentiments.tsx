

"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Sentiments = () => {
  const carouselData = [
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
          <path
            d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z"
            fill="white"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0FBA83" />
          <path
            d="M26.2308 16.1238H33V22.893"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
          <path
            d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z"
            fill="white"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0FBA83" />
          <path
            d="M26.2308 16.1238H33V22.893"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
          <path
            d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z"
            fill="white"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      logo: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.046875" width="44" height="44" rx="22" fill="#0FBA83" />
          <path
            d="M26.2308 16.1238H33V22.893"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699"
            stroke="white"
            strokeWidth="1.69231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      para: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
  ];

  const [swiperRef, setSwiperRef]: any = useState(null);

  return (
    <div className="xl:h-[576px] mt-[310px] xl:mt-0 md:w-[63%] p-[24px] bg-white rounded-lg">
      <div id="sentiments" className="h-[505.8px]">
        <span className="text-[#0F1629] font-semibold text-[24px]">
          Sentiments
        </span>
        <span className="my-[17px] text-[#44475B] text-[18.91px] font-semibold flex items-center gap-[6.09px]">
          Key Events{" "}
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_733)">
              <path
                d="M10.04 2.4635C5.44 2.4635 1.70667 6.19683 1.70667 10.7968C1.70667 15.3968 5.44 19.1302 10.04 19.1302C14.64 19.1302 18.3733 15.3968 18.3733 10.7968C18.3733 6.19683 14.64 2.4635 10.04 2.4635ZM10.8733 14.9635H9.20667V9.9635H10.8733V14.9635ZM10.8733 8.29683H9.20667V6.63017H10.8733V8.29683Z"
                fill="#7C7E8C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_733">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.039978 0.796875)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="relative">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={100}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 500,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 450,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" sm:w-[456px] h-[204px] bg-[#E8F4FD] border border-[#E8F4FD] rounded-xl flex pb-[38px] px-[18px] pt-[18px] ">
                  <div className=" sm:w-[420px]  flex gap-2 h-[128px] ">
                    <div>{item.logo}</div>
                    <div className="flex flex-col gap-2">
                      <h1 className=" text-[14px] text-[#191C1F] font-medium  ">
                        {item.title}
                      </h1>{" "}
                      <p className=" text-xs sm:text-[14px] text-[#3E5765] ">
                        {item.para}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[44px] h-[44px]  bg-white flex justify-center items-center  shadow-lg p-3 rounded-full">
            <div className="rotate-[-180deg]">
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
          <button className="custom-next w-[44px] h-[44px]  bg-white flex justify-center items-center absolute right-[10px] top-1/2 -translate-y-1/2 z-10 rounded-full">
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
        <div className="mt-[33px] h-[186px] ">
          <span className="mt-[17px] text-[#44475B] text-[18.91px] font-semibold flex items-center gap-[6.09px]">
            Key Events{" "}
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_733)">
                <path
                  d="M10.04 2.4635C5.44 2.4635 1.70667 6.19683 1.70667 10.7968C1.70667 15.3968 5.44 19.1302 10.04 19.1302C14.64 19.1302 18.3733 15.3968 18.3733 10.7968C18.3733 6.19683 14.64 2.4635 10.04 2.4635ZM10.8733 14.9635H9.20667V9.9635H10.8733V14.9635ZM10.8733 8.29683H9.20667V6.63017H10.8733V8.29683Z"
                  fill="#7C7E8C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_733">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.039978 0.796875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className=" mt-[24px] sm:items-start items-center flex gap-[40px]">
            <div className=" w-[116.86px] sm:h-[120px] h-[65px] text-[#0FBA83] text-[18px] md:text-[36px] rounded-full bg-[#EBF9F4] flex items-center justify-center ">
              76%
            </div>
            <div className="pl-[8px] flex gap-3 flex-col  ">
              <div className="flex items-center gap-[25.71px] ">
                <span className="text-[#7C7E8C] font-medium text-[15px] ">
                  Buy
                </span>
                <div className="flex gap-2 text-[#0F1629] items-center">
                  {" "}
                  <div className=" h-[8px] rounded-sm  text-[#7C7E8C] text-[14.25px] bg-[#00B386]  w-[25vw] sm:w-[30vw]  "></div>{" "}
                  76%
                </div>
              </div>
              <div className="flex items-center gap-[25.71px] ">
                <span className="text-[#7C7E8C] font-medium text-[15px] ">
                  Hold
                </span>
                <div className="flex gap-2  text-[#0F1629] items-center">
                  {" "}
                  <div className=" h-[8px] rounded-sm  text-[#7C7E8C] text-[14.25px] bg-[#C7C8CE] w-[4vw]  "></div>{" "}
                  8%
                </div>
              </div>
              <div className="flex items-center gap-[25.71px] ">
                <span className="text-[#7C7E8C] font-medium text-[15px] ">
                  Sell
                </span>
                <div className="flex gap-2 text-[#0F1629] items-center">
                  {" "}
                  <div className=" h-[8px] rounded-sm  text-[#7C7E8C] text-[14.25px] bg-[#F7324C] w-[8vw]  "></div>{" "}
                  16%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
