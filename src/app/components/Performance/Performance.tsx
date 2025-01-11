import { useGetHighLowDataQuery } from '@/app/Services/Price/priceApi'
import React from 'react'
import GradientSlider from '../GradientSlider/GradientSlider'

const Performance = () => {
    const { data, isLoading, error } = useGetHighLowDataQuery(null)
   console.log(data[0]?.high_24h);
  return (
    <div className=" w-[63%]  h-[632px] flex items-center flex-col justify-center rounded-lg bg-white ">
      <div className="w-[94%] h-[554px] flex flex-col gap-[24px]">
        <span className="text-[#0F1629]  font-semibold text-[24px] ">
          Performance
        </span>
        <div className="pb-[15px] flex flex-col gap-[15px] ">
          <div className="flex items-center">
            <div className="w-[116px] h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                Today's low
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data[0]?.low_24h)}
              </span>
            </div>
            <GradientSlider
              initialValue={data[0]?.low_24h}
              min={data[0]?.low_24h}
              max={data[0]?.high_24h}
              onChange={(newValue: any) => console.log("New value:", newValue)}
            />
            <div className="w-[116px] h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                Today's High
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data[0]?.high_24h)}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[116px] h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                52W Low
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data[0]?.atl)}
              </span>
            </div>
            <GradientSlider
              initialValue={data[0]?.atl}
              min={data[0]?.atl}
              max={data[0]?.ath}
              onChange={(newValue: any) => console.log("New value:", newValue)}
            />
            <div className="w-[116px] h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                52W High
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data[0]?.ath)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance