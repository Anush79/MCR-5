export default function RecipeForm({item}){
  const { id,
    cuisine,
    name,
    ingredients,
    instructions,
    imgUrl
  }=item;
  const handleChange = (e)=>{

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return   <form onSubmit={handleSubmit}>
  <label htmlFor="cuisine">Cuisine:</label><br />
  <input type="text" id="cuisine" name="cuisine" value={cuisine} onChange={handleChange} required /><br /><br />

  <label htmlFor="name">Name:</label><br />
  <input type="text" id="name" name="name" value={item.name} onChange={handleChange} required /><br /><br />

  <label htmlFor="ingredients">Ingredients:</label><br />
  <textarea id="ingredients" name="ingredients" rows="4" cols="50" value={ingredients} onChange={handleChange} required></textarea><br /><br />

  <label htmlFor="photo">Photo:</label><br />
  <input type="url" name="" id="" value={imgUrl} />
  <br /><br />

  <label htmlFor="description">Description:</label><br />
  <textarea id="description" name="description" rows="4" cols="50" value={description} onChange={handleChange}></textarea><br /><br />

  <input type="submit" value="Submit" />
</form>
}