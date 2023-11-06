import { useMemo } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Here we go...');
    }
    return `${iterations} iterations done!`;
};

export const MemoHook = () => {
    const { count, increment } = useCounter(1);

    const memorizedvalue = useMemo(() => heavyStuff(count), [count])

    return (
        <>
            <h1>Counter: <small>{count}</small></h1>
            <hr />
            <p>{ memorizedvalue }</p>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
        </>
    )
}
