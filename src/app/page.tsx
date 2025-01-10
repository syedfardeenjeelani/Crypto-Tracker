'use client'
import { useGetBitcoinPriceQuery } from "./Services/Price/priceApi";

export default function Home() {

  
  const { data, isLoading, error } = useGetBitcoinPriceQuery(null);
  console.log(data)


  return ( 
    <>
 
    </>
  );
}
 