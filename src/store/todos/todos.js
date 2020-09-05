import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "todos",
  initialState: {
    list: [
      { id: 1, name: "todo1", complete: false },
      { id: 2, name: "todo2", complete: false },
      { id: 3, name: "todo3", complete: true },
      { id: 4, name: "todo4", complete: true },
    ],
  },
  reducers: {
    todoAdded: (todos, action) => {
      todos.list.push({
        id: todos.list.length + 1,
        name: action.payload.name,
        complete: false,
      });
    },
  },
});

export default slice.reducer;

const { todoAdded } = slice.actions;

export const addTodo = (todo) => (dispatch) =>
  dispatch({
    type: todoAdded.type,
    payload: todo,
  });
// Normal Selector
export const getIncompleteTodos = (state) =>
  state.todos.list.filter((todo) => !todo.complete);
// => filter luôn trả về mảng mới cho dù state của store có thay đổi hay không

// Relect Selector
export const reselect_getIncompleteTodos = createSelector(
  (state) => state.todos.list,
  (todos) => todos.filter((todo) => !todo.complete)
);
// => param đầu tiên nhận 1 callback mà output của nó sẽ là input của callback ở param 2
// và nếu kết quả của input không đổi thì leengj thực thi trong callback 2 sẽ không đc thực thi
// => trong trường hợp này thì nếu list của todos không đổi
// (input cho callback 2) thì sẽ không thực thi filter cho mảng mới => vẫn mảng kết quả của input cũ
