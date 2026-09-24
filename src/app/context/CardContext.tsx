"use client"
import { createContext, useState } from "react"
import { Type } from "../types/type";

export const cardDataContext = createContext({})
const CardsProvider = ({children}:{children: React.ReactNode}) => {
    const [addToCard, setAddToCard] = useState<Type[]>([]);
    const [save, setSove] = useState([])
    const sharedData = {
        addToCard, setAddToCard,
        save, setSove
    }
  return (
    <cardDataContext.Provider value={sharedData}>
        {
            children
        }
    </cardDataContext.Provider>
  )
}

export default CardsProvider
