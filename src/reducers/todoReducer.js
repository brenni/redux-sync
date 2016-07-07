
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
          ...state.todos,
          {
            id: action.id,
            name: action.name,
            isCompleted: false,
          }
        ];
    case 'TOGGLE_TODO':
      const newArray = state.todos;
      const currentTodo = newArray.find((currentTodo) => {
        return currentTodo.id === action.id;
      });
      currentTodo.isCompleted = !currentTodo.isCompleted;
      return newArray;
    default:
      return state;
  }
}

const todoReducer = (state = {todos:[], currentFormText:'', showing: false}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
          todos: todo(state, action)
        }, {
          currentFormText: '',
        }
      );
    case 'UPDATE_ADDFORM':
      return Object.assign({}, state, {
        currentFormText: action.text,
      });
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: todo(state, action)
      });
    case 'CHANGE_SHOWING':
      return Object.assign({}, state, {
        showing: !state.showing
      });
    default:
      return state;
  }
};

export default todoReducer;
