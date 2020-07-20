//Actions constants names
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//Actions Creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
