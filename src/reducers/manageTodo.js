

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log("reducer received this action:", action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, 
        todos: [...state.todos, action.payload.input]
      }
    default:
      return state;
  }
}
