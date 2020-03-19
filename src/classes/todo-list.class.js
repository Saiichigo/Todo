export class TodoList {
    constructor() {
        this.todo = [];
    }

    nuevoTodo(todo) {
        this.todo.push(todo);
    }

    eliminarTodo(id) {
        this.todo.push(todo);
    }

    marcaCompletado(id) {
        for (const todo of this.todo) {
            console.log(id, todo.id);
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }

    }
    eliminarCompletado() {

    }
}