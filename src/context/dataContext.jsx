import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { recipes } from "../db/recipe";
const DataContext = createContext();

const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "name":
      const filteredData = state.filter((item) => item.name === payload);
      console.log(filteredData);
      return filteredData;

    default:
      break;
  }
};


export function DataProvider({ children }) {
 const [dataToShow, dataDispatcher] =useReducer(dataReducer,recipes)
  const [filters, setFilter] = useState("name");
  const [searchValue, setSearchValue] = useState("");


  const finalSearchedData =
    searchValue.length > 0
      ? dataToShow.filter((item) =>{
        if(filters === 'ingredients')
         return item.ingredients.some(elem=>elem.toLowerCase().includes(searchValue.toLowerCase().trim()))
        else
         return item[filters].toLowerCase().includes(searchValue.toLowerCase().trim())}
        )
      : dataToShow;

  return (
    <DataContext.Provider
      value={{
        recipes,
        setFilter,
        searchValue,
        setSearchValue,
        dataToShow,
        filters,
        finalSearchedData,
        dataDispatcher,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
