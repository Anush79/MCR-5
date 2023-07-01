import {useParams} from 'react-router-dom'
import { useData } from '../context/dataContext'
export default function Details(){
  const {id:paramId} = useParams()
  const {recipes} = useData()
  const foundItem = recipes?.find(item=>item.id===paramId)

  const { id,
    cuisine,
    name,
    ingredients,
    instructions,
    imgUrl
  }=foundItem;

  return<>
  <h1 className='text-4xl'>{name}</h1>
  <div key={id} className="recipeContainer flex flex-row p-10">

    <div className='w-full'>
<img src={imgUrl}alt="" />
    </div>
    <div className='flex flex-col gap-3 text-left'>
      <h3 className='text-2xl'>Cuisine:{cuisine}</h3>
    <p>< b>Ingredients : </b>{ingredients}
      </p>  
<p><b>Instructions: </b>
  {instructions}</p>
    </div>
    
  </div>
  </> 
}