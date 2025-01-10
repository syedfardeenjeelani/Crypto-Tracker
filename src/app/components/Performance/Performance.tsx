import { useGetHighLowDataQuery } from '@/app/Services/Price/priceApi'
import React from 'react'

const Performance = () => {
    const { data, isLoading, error } = useGetHighLowDataQuery(null)
   console.log(data)
  return (
    < div id="overview">
    </div>
  )
}

export default Performance