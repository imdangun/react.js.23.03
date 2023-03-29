import {useRef} from 'react'

export default function MyRef() {
    const inputRef = useRef(null)

    function onClick() {
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}