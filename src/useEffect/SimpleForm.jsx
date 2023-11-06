import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const { username, email } = form

    const onChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    };

    useEffect(() => {
        console.log('Hey!')
    }, []);

    useEffect(() => {

    }, [form]);

    useEffect(() => {

    }, [email]);

    return (
        <>
            <h1>Form</h1>

            <input type="text" className="form-control" placeholder="Your username" name="username" value={username} onChange={onChange} />

            <input type="email" className="form-control" placeholder="Your email" name="email" value={email} onChange={onChange} />

            {
                (username === 'strider') && (<Message />)
            }
        </>
    )
}
