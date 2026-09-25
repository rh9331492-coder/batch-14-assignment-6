"use client";

import { createContext, useState } from "react";
import { Type } from "../types/type";

export const DataContext = createContext<any>(null);

const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [addToCard, setAddToCard] = useState<Type[]>([]);

  const sharedData = {
    addToCard,
    setAddToCard,
  };

  return (
    <DataContext.Provider value={sharedData}>
      {children}
    </DataContext.Provider>
  );
};

export default CardsProvider;