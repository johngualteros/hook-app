import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(100)
  return (
    <>
        <h1>COUNTER WITH HOOK: {count}</h1>

        <button className='btn btn-primary rounded fw-bold' onClick={increment}>+1</button>
        <button className='btn btn-success rounded fw-bold' onClick={reset}>Reset</button>
        <button className='btn btn-danger rounded fw-bold' onClick={decrement}>-1</button>
    </>
  )
}
