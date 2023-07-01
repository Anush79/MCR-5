import { createContext, useContext, useReducer, useState } from "react";
import {recipes} from '../db/recipe'
const DataContext = createContext();

const dataReducer=(state, action )=>{
  const {type, payload}= action;
  switch (type) {
    case "name":
      const filteredData = state.filter(item=> item.name===payload)
      console.log(filteredData)
      return filteredData;
  
    default:
      break;
  }
}

const filterReducer=(state, action )=>{
  const {type, payload}= action;
  switch (type) {
    case "name":

      
      break;
  
    default:
      break;
  }
}


export function DataProvider({children}){
  const [dataToShow, dataDispatcher] = useReducer(dataReducer, recipes)
  const [filters, setFilter] = useState( "name")
  console.log(dataToShow)
  return <DataContext.Provider value={{recipes,setFilter, dataToShow,filters, dataDispatcher}}>
    {children}
  </DataContext.Provider>
}

export function useData(){
  return useContext(DataContext)
}