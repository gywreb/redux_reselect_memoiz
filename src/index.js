import configureStore from "./store/configureStore";
import {
  getIncompleteTodos,
  reselect_getIncompleteTodos,
  addTodo,
} from "./store/todos/todos";

const store = configureStore();

// xem giải thích chung vs giải thích và code của reselect ở todos.js

// sử dụng selector bình thường thì hàm filter luôn trả về mảng mới dù state của store không đổi
const todos1 = getIncompleteTodos(store.getState());
const todos2 = getIncompleteTodos(store.getState());
console.log(todos1 === todos2); // => false vì 2 mảng trả về khác nhau

// sử dụng selector tạo từ reselect
const reselect_todos1 = reselect_getIncompleteTodos(store.getState());
const reselect_todos2 = reselect_getIncompleteTodos(store.getState());
console.log(reselect_todos1 === reselect_todos2); // => true vì state của store không bị thay đổi, vẫn là mảng cũ

// nếu state của store bị thay đổi
const changed_todos1 = reselect_getIncompleteTodos(store.getState());
store.dispatch(addTodo({ name: "new_todo" })); // tạo 1 todo mới vs name="new_todo"
const changed_todos2 = reselect_getIncompleteTodos(store.getState());
console.log(changed_todos1 === changed_todos2); // => false vì state trong store đã thay đổi
// lúc này mới thực hiện lại filter
