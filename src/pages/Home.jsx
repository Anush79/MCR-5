import { useState } from 'react';
import Card from "../components/Card";
import { useData } from "../context/dataContext";
export default function Home() {
  const { setFilter, filters, setSearchValue, finalSearchedData } = useData()


  const onChangeHandler = (e) => {
    const { type, value, id } = e.target;
    if (type === 'text')
      setSearchValue(() => value)
    if (type === 'radio')
      setFilter(() => id)

  }

  return <div className="home">
    <div className="flex flex-row gap-12 items-center p-10 justify-center">


      <input type="text" className="border" placeholder="search items" onChange={onChangeHandler} />
      <b>Filters:</b>
      <label htmlFor="name" className="flex flex-row items-center gap-2">
        <input type="radio" name="search" id="name" checked={filters === "name"} onChange={onChangeHandler} />
        Name
      </label>
      <label htmlFor="ingredients" className="flex flex-row items-center gap-2">
        <input type="radio" name="search" id="ingredients" onChange={onChangeHandler} />
        Ingredients
      </label>
      <label htmlFor="cuisine" className="flex flex-row items-center gap-2" >
        <input type="radio" name="search" id="cuisine" onChange={onChangeHandler} />
        cuisine
      </label> </div>

    {
      finalSearchedData.map(item => <Card item={item} />
      )
    }

  </div>
}