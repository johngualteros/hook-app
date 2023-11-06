import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [form, setForm] = useState(initialForm)

    const onChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    };

    const reset = () => {
        setForm(initialForm)
    }
    return {
        ...form,
        form,
        onChange,
        reset
    }
}
