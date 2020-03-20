import { Todo } from "./todo.class";

export class TodoList {


    constructor(tarea) {
        // this.todo = [];
        this.cargarLocalStorage();
    }


    nuevoTodo(todo) {
        this.todo.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id) {

        // console.log(this.todo);
        this.todo = this.todo.filter(todo => todo.id != id);
        // console.log(this.todo);
        this.guardarLocalStorage();
    }

    marcaCompletado(id) {
        for (const todo of this.todo) {
            // console.log(id, todo.id);
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();

                break;
            }
        }

    }
    eliminarCompletado(id) {
        this.todo = this.todo.filter(todo => !todo.completado);
        this.guardarLocalStorage();


    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todo));

    }
    cargarLocalStorage() {

        this.todo = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        this.todo = this.todo.map(Todo.fromJson);
    }
}