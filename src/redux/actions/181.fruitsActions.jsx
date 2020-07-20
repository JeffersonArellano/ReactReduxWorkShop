export const ADD_FRUIT = "ADD_FRUIT";
export const REMOVE_FRUIT = "ADD_FRUIT";

export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  payload: {
    fruit,
  },
});

export const removeFruit = () => {
  return {
    type: REMOVE_FRUIT,
  };
};
