// Action value
const ADDTodo = "ADDTodo";

const DeleteTodo = "DeleteTodo";

// Action Creator

export const addTodo = (payload) => {
  // console.log(payload);
  return { type: ADDTodo, payload };
};

export const deleteTodo = (payload) => {
  return { type: DeleteTodo, payload };
};

// initial State
const initialState = {
  todos: [
    { id: 1, title: "잘하자~!", content: "열심히 하겠습니다.", done: true },
    {
      id: 2,
      title: "못해도 해!",
      content: "저는 열심히 못합니다.",
      done: false,
    },
  ],
};
// Reducer

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADDTodo:
      // console.log(action.type);
      // console.log(state);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DeleteTodo:
      return state.filter((state) => state.id !== action.id);

    default:
      return state;
  }
};

export default todos;
