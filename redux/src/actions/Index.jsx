export const IncNum = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const DecNum = () => {
  return {
    type: "DECREMENT",
  };
};
export const MulNum = (num) => {
  return {
    type: "MULTIPLY",
    payload: num,
  };
};
export const DivNum = () => {
  return {
    type: "DIVIDE",
  };
};
