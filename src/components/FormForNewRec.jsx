export default function RecipeForm(){
  return   <form onSubmit={handleSubmit}>
  <label htmlFor="cuisine">Cuisine:</label><br />
  <input type="text" id="cuisine" name="cuisine" value={cuisine} onChange={handleCuisineChange} required /><br /><br />

  <label htmlFor="name">Name:</label><br />
  <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required /><br /><br />

  <label htmlFor="ingredients">Ingredients:</label><br />
  <textarea id="ingredients" name="ingredients" rows="4" cols="50" value={ingredients} onChange={handleIngredientsChange} required></textarea><br /><br />

  <label htmlFor="photo">Photo:</label><br />
  <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} required /><br /><br />

  <label htmlFor="description">Description:</label><br />
  <textarea id="description" name="description" rows="4" cols="50" value={description} onChange={handleDescriptionChange}></textarea><br /><br />

  <input type="submit" value="Submit" />
</form>
}