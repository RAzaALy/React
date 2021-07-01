const InitialState = 5;

const MulDiv = (state = InitialState, action) => {
  switch (action.type) {
    case "MULTIPLY": 
      return state * action.payload;
    case "DIVIDE":
      return state / 5;
    default:
      return state;
  }
};
export default MulDiv;
