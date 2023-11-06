/* eslint-disable react/prop-types */

export const TodoItem = ({ todo }) => {
  return (
    <li
        key={todo.id}
        className="list-group-item d-flex gap-2 justify-content-between align-items-center"
    >
        <span>{todo.desc}</span>
        <button className="btn btn-danger m-2">Borrar</button>
    </li>
  )
}
