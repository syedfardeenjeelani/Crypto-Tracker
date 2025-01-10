import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_KEY  = process.env.NEXT_PUBLIC_COINGECKO_APIKEY;  ;

export const priceApi = createApi({
  reducerPath: "priceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("x-cg-api-key", API_KEY as string);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBitcoinPrice: builder.query({
      query: () => "simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true",
    }),
  }),
});

export const { useGetBitcoinPriceQuery } = priceApi;
