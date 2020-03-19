import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componente';

export const todoList = new TodoList();
const tarea = new Todo('aprender Javascript!!');
todoList.nuevoTodo(tarea);

// tarea.completado = true;

// console.log(todoList);

crearTodoHtml(tarea);