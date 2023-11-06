
// eslint-disable-next-line react/prop-types
const ShowIncrement = ({increment}) => {
  return (
    <button
        className="btn btn-primary"
        onClick={() => increment(5)}
    >
        increment
    </button>
  )
}

export default ShowIncrement