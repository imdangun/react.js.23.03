import {useState, useRef} from 'react'

export default function MyRef() {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)

    function onStart() {
        setStartTime(Date.now())
        setNow(Date.now())       

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => setNow(Date.now()), 10)
    }

    function onStop() {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0
    if(startTime && now) secondsPassed = (now - startTime) / 1000

    return (
        <>
            <h1>{secondsPassed.toFixed(2)}</h1>
            <button onClick={onStart}>start</button>{' '}
            <button onClick={onStop}>stop</button>
        </>
    )
}