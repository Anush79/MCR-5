import { NavLink } from "react-router-dom";
import { useData } from "../context/dataContext";
import Modal from '../components/Modal'
import { useState } from "react";
export default function ({item}){
  const [modalOpen, setCloseModal]= useState(true)
  const { id,
    cuisine,
    name,
    ingredients,
    instructions,
    imgUrl
  }=item;
  const {dataDispatcher}= useData()
  return <div key={id}className="recipeContainer w-50">
    <img src={imgUrl} alt="random photo" />
    <h3 className="text-2xl font-bold">{name}</h3>
    <p><b>Cuisine Type: </b><NavLink to={`/home/${id}`}>See Recipe {">"}</NavLink></p>
    <p><b>Instructions: </b><NavLink to={`/home/${id}`}>See Recipe {">"}</NavLink></p>
    <button >delete</button>
    <Modal  setCloseModal={setCloseModal} status={modalOpen} buttonText="Edit Recipe">
       
    </Modal>
  </div>
}