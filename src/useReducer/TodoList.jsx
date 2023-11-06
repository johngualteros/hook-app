import { TodoItem } from "./TodoItem"

/* eslint-disable react/prop-types */
export const TodoList = ({todos}) => {
  return (
    <ul className="list-group list-group-flush">
        {
            todos.map((todo, i) => (
                <TodoItem key={i} todo={todo} />
            ))
        }
    </ul>
  )
}
