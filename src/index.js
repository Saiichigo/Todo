import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componente';

export const todoList = new TodoList();


todoList.todo.forEach(todo => crearTodoHtml(todo));