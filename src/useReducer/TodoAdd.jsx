import { useForm } from "../hooks/useForm"

// eslint-disable-next-line react/prop-types
export const TodoAdd = ({onNewTodo}) => {
    const { description, onChange, reset } = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }

        onNewTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        })

        reset()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                value={description}
                onChange={onChange}
            />
            <button
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
    )
}
