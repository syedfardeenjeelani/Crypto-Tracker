import { useGetHighLowDataQuery } from "@/app/Services/Price/priceApi";
import React from "react";
import GradientSlider from "../GradientSlider/GradientSlider";
import Loading from "../Loading/Loading";

const Performance = () => {
  const { data, isLoading, error }: any = useGetHighLowDataQuery(null);

  if (isLoading && !data?.length) return <Loading />;

  // console.log(data);
  // Helper function to format large numbers
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(num);
  };

  // Helper function to format percentages
  const formatPercentage = (num: number) => {
    return num.toFixed(3) + "%";
  };

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffYears = now.getFullYear() - date.getFullYear();
    const diffMonths = now.getMonth() - date.getMonth();

    if (diffYears > 0) {
      return `${date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })} (over ${diffYears} years)`;
    } else {
      return `${date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })} (about ${diffMonths} months)`;
    }
  };

  return (
    <div className="  md:w-[63%]  h-fit xl:h-[643px] flex p-5 flex-col  rounded-lg bg-white ">
      <div
        id="overview"
        className="w-[94%] pb-[16px]  h-fit xl:h-[234px]  flex flex-col gap-[24px]"
      >
        <span className="text-[#0F1629]  font-semibold text-[24px] ">
          Performance
        </span>
        <div className=" flex flex-col gap-[15px] ">
          <div className="flex items-center">
            <div className="w-[116px] h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                Todays low
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {data?.length
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data[0]?.low_24h)
                  : 0}
              </span>
            </div>

            <GradientSlider
              initialValue={Number(data[0]?.low_24h) + 100 || 0}
              min={data[0]?.low_24h || 0}
              max={data[0]?.high_24h || 0}
              onChange={(newValue: any) => console.log("New value:", newValue)}
            />
            <div className="w-[116px] sm:ml-7 h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                Todays High
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {data?.length
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data[0]?.high_24h)
                  : 0}
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
                {data?.length
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data[0]?.atl)
                  : 0}
              </span>
            </div>
            <GradientSlider
              initialValue={Number(data[0]?.atl) + 4000 || 0}
              min={data[0]?.atl || 0}
              max={data[0]?.ath || 0}
              onChange={(newValue: any) => console.log("New value:", newValue)}
            />
            <div className="w-[116px] sm:ml-7 h-[71px] flex flex-col gap-[10px]">
              <span className="text-[#44475B] text-[13.78px] font-normal ">
                52W High
              </span>
              <span className="mb-[13px] text-[#44475B] text-[15.63px] font-mediumt- ">
                {" "}
                {data?.length
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data[0]?.ath)
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="fundamentals"
        className="w-[100%] pt-[24px] bg-white xl:w-[94%] flex flex-col gap-4 h-[320px]"
      >
        <span className="text-[#44475B] pl-5 xl:pl-0 text-[18.91px] font-semibold flex items-center gap-[7px] ">
          Fundamentals{" "}
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.04 2.46362C5.44 2.46362 1.70667 6.19696 1.70667 10.797C1.70667 15.397 5.44 19.1303 10.04 19.1303C14.64 19.1303 18.3733 15.397 18.3733 10.797C18.3733 6.19696 14.64 2.46362 10.04 2.46362ZM10.8733 14.9636H9.20667V9.96362H10.8733V14.9636ZM10.8733 8.29696H9.20667V6.63029H10.8733V8.29696Z"
              fill="#ABB9BF"
            />
          </svg>
        </span>

        <div className="xl:h-[270px] xl:bg-inherit pl-5 xl:pl-0 bg-white h-fit  flex w-[100%] xl:flex-row flex-col  xl:justify-between pt-[16px] ">
          <div className="flex  flex-col">
            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[343px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Bitcoin Price
              </span>
              <span className="font-medium text-[13px] text-[#111827]">
                {formatNumber(data[0]?.current_price)}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[343px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                24h Low / 24h High
              </span>
              <span className="font-medium text-[13px] text-[#111827]">
                {formatNumber(data[0]?.low_24h)} /{" "}
                {formatNumber(data[0]?.high_24h)}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[343px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                7d Low / 7d High
              </span>
              <span className="font-medium  text-[13px] text-[#111827]">
                {formatNumber(data[0]?.low_24h)} /{" "}
                {formatNumber(data[0]?.high_24h)}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[343px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Trading Volume
              </span>
              <span className="font-medium text-[13px] text-[#111827] ">
                {formatNumber(data[0]?.total_volume)}
              </span>
            </div>
            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[343px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Market Cap Rank
              </span>
              <span className="font-medium text-[13px] text-[#111827]">
                #{data[0]?.market_cap_rank}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[389px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Market Cap
              </span>
              <span className="font-medium text-[13px] text-[#111827]">
                {formatNumber(data[0]?.market_cap)}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[389px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Market Cap Dominance
              </span>
              <span className="font-medium text-[13px] text-[#111827]">
                {formatPercentage(
                  data[0]?.market_cap /
                    (data[0]?.market_cap /
                      (data[0]?.market_cap_change_percentage_24h / 100))
                )}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[389px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                Volume / Market Cap
              </span>
              <span className="font-medium  text-[13px] text-[#111827]">
                {(data[0]?.total_volume / data[0]?.market_cap).toFixed(4)}
              </span>
            </div>

            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[389px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                All-Time High
              </span>
              <span className="font-medium text-[13px] text-[#111827] ">
                <div className="flex justify-end gap-2  ">
                  {formatNumber(data[0]?.ath)}
                  <div className="text-sm text-[#F7324C] font-medium  ">
                    {data[0]?.ath_change_percentage.toFixed(1)}%
                  </div>
                </div>
                <div className="text-[11.2px] text-[#111827] ">
                  {formatDate(data[0]?.ath_date)}
                </div>
              </span>
            </div>
            <div className="flex items-center h-[54px] border-b border-b[#D3E0E6] justify-between w-[95%] md:w-[389px] ">
              <span className="text-[#768396] text-[14px] font-medium">
                All-Time Low
              </span>
              <span className="font-medium text-[13px] text-[#111827] ">
                <div className="flex justify-end gap-2  ">
                  {formatNumber(data[0]?.atl)}
                  <div className="text-sm text-[#0FBA83] font-medium  ">
                    {data[0]?.atl_change_percentage.toFixed(1)}%
                  </div>
                </div>
                <div className="text-[11.2px] text-[#111827] ">
                  {formatDate(data[0]?.atl_date)}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
