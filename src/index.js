import './styles.css';
import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml);

//const tarea    = new Todo('sacar la aplicación adelante...');
//todoList.nuevoTodo(tarea);
//console.log(todoList);
//crearTodoHtml(tarea);
//ocalStorage.setItem('millavE', 'hdwdmdwodwhd');
//setTimeout(()=>{
//    localStorage.removeItem('millavE');
//},1000)
