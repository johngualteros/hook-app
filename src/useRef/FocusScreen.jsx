import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.select();
  }
  return (
    <>
      <h1>Focus screen</h1>
      <input
        ref={inputRef}
        type="text"
        name="input"
        id="input"
        className="form-control"
      />

      <button
       className="btn btn-info mt-2"
       onClick={focus}
       >Set focus</button>
    </>
  )
}
