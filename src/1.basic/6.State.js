import {useState} from 'react'

export default function State() {
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>
                {count} times
            </button>
        </>
    )
}