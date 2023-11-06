import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

export const Memorize = () => {
    const { count, increment } = useCounter(1);
    return (
        <>
            <h1>Counter: <Small value={count} /></h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
        </>
    )
}
