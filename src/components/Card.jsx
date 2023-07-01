import { NavLink } from "react-router-dom";

export default function ({item}){
  const { id,
    cuisine,
    name,
    ingredients,
    instructions,
    imgUrl
  }=item;
  return <div key={id}className="recipeContainer">
    <img src={imgUrl} alt="random photo" />
    <h3>{name}</h3>
    <p><b>Cuisine Type: </b><NavLink to={`/home/${id}`}>See Recipe {">"}</NavLink></p>
    <p><b>Instructions: </b><NavLink to={`/home/${id}`}>See Recipe {">"}</NavLink></p>

  </div>
}