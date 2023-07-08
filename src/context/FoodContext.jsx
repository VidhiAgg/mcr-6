import React, { createContext, useState } from 'react'
import { restaurantsData } from '../data/Data';

export const FoodContext = createContext();

const FoodContextProvider = ({children}) => {
 const [resturants, setResturants] = useState(restaurantsData);
 


    return (
    <FoodContext.Provider value = {{resturants, setResturants}}>
        {children}
    </FoodContext.Provider>
  )
}

export default FoodContextProvider