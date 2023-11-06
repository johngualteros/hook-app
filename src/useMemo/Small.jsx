import { memo } from 'react'
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Small = ({value}) => {
  return (
    <small>{value}</small>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Small)