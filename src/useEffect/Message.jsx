import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const _coords = { x, y }
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>User already exists</h3>
        </>
    )
}
