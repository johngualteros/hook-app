import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    })

    const increment = () => {
        setCounter({
            ...counter,
            counter1: counter.counter1 + 1,
        })
    }

    const decrement = () => {
        setCounter({
            ...counter,
            counter1: counter.counter1 - 1,
        })
    }
    return (
        <>
            <h1>Counter : {counter.counter1}</h1>

            <button className='btn btn-primary rounded fw-bold' onClick={increment}>+1</button>
            <button className='btn btn-danger rounded fw-bold' onClick={decrement}>-1</button>
        </>
    )
}
