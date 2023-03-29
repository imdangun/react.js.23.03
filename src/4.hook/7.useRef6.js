import {forwardRef, useRef} from 'react'

const MyInput = forwardRef((props, ref) => 
    <input {...props} ref={ref}/>
)

export default function MyRef() {
    const inputRef = useRef(null)

    function onClick() {
        inputRef.current.focus()
    }

    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}