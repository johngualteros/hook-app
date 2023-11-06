import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)

    const onNewTodo = (newTodo) => {
        dispatchTodo({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <>
            <h1>Todo app</h1>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo}/>
                </div>
            </div>
        </>
    )
}
