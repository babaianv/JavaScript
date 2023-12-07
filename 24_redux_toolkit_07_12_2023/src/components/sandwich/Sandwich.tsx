import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/storeRTK";
import { addIngredient, clear } from "../../redux/sandwich/sandwichSlice";

const Sandwich: React.FC = (): JSX.Element => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();

  const handleAddBread = () => {
    dispatch(addIngredient("bread"));
  };
  const handleAddCheese = () => {
    dispatch(addIngredient("cheese"));
  };
  const handleAddSalami = () => {
    dispatch(addIngredient("salami"));
  };
  const handleDeleteAll = () => {
    dispatch(clear());
  };

  return (
    <div>
      <h1>Choose your sandwich:</h1>
      <p>Sandwich:{ingredients}</p>
      <button onClick={handleAddBread}>Add bread</button>
      <button onClick={handleAddCheese}>Add cheese</button>
      <button onClick={handleAddSalami}>Add salami</button>
      <button onClick={handleDeleteAll}>Delete all</button>
    </div>
  );
};

export default Sandwich;
