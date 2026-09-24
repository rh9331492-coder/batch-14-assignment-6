import { Type } from '@/app/types/type'
import React from 'react'
interface getType{
    params:Promise<{
        Ditails:string
    }>
}
const getData = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return response.json()
    } catch (error) {
        alert('fetching data is fail')
    } finally {
        console.log('finish')
    }
}
const DetailsPage = async({params}:getType) => {
    const {Ditails} = await params
    // console.log(Ditails)
    const dataDetails = await getData()
    // console.log(dataDetails)
    const data = dataDetails.find((data:Type) => data.id === parseInt(Ditails)) as Type
    console.log(data)
  return (
    <div>
      <h2>details{data.rating}</h2>
    </div>
  )
}

export default DetailsPage
