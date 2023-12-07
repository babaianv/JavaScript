type Ingredient = 'bread' | 'cheese' | 'salami'

type sandwichAction = 
| {type: 'sandwich/addIngredient', payload: string}
| {type: 'sandwich/clear'}

export default sandwichAction
