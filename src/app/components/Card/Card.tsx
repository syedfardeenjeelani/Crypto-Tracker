import React from 'react'

const Card = ({
  title,
  image,
  backgroundGradient,
}: {
  title: string;
  image: any | undefined;
  backgroundGradient:string
}) => {
  return (
    <>
      <div
        style={{
          background: backgroundGradient,
        }}
        className={` w-[100%] flex items-center gap-[27px] justify-center h-[151px] rounded-[6.65px] `}
      >
        {image}
        <div className=" w-[195px] h-[104px] ">
          <h1 className=" text-[20px]  font-bold  text-white">{title}</h1>
          <button className=" bg-white w-[132px] flex gap-[6px] items-center justify-center hover:bg-[#f2f2f2] h-[32px] rounded-lg text-[14px] text-[#0F1629] ">
            Check Now{" "}
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0658 5.77144L1.56576 5.77144"
                stroke="#0F1629"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.02426 0.751099L14.0659 5.7711L9.02426 10.7919"
                stroke="#0F1629"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card