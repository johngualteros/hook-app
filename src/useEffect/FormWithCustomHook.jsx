import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
    const {form, onChange, reset} = useForm(
        { username: '', email: '', password: '' }
    )

    const { username, email, password } = form

    return (
        <>
            <h1>Form Custom Hook</h1>

            <input type="text" className="form-control mt-2" placeholder="Your username" name="username" value={username} onChange={onChange} />

            <input type="email" className="form-control mt-2" placeholder="Your email" name="email" value={email} onChange={onChange} />

            <input type="password" className="form-control mt-2" placeholder="Your password" name="password" value={password} onChange={onChange} />

            <button className="btn btn-primary" onClick={reset}>Delete</button>
        </>
    )
}
