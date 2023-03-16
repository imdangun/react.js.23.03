import {useState} from 'react'

function Button({count, onClick}) {
    return (
        <button onClick={onClick}>{count} times</button>
    )
}

export default function Props() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <Button count={count} onClick={handleClick}/>
            <Button count={count} onClick={handleClick}/>
        </>
    )
}