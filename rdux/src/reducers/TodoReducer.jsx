const initialData = {
  list: [],
};
// const [list, setList] = useState([])
const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "CLEAR":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default TodoReducer;
