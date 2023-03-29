import {useState, useEffect} from 'react'

function getConnection(url, roomType) {
    return {
        connect() {
            console.log(`connecting to ${roomType} room at ${url}`)
        },
        disconnect() {
            console.log(`disconnected from ${roomType} room at ${url}`)
        }
    }
}

function ChatRoom({roomType}) {
    const [url, setUrl] = useState('https://my.com')

    useEffect(() => {
        const connection = getConnection(url, roomType)
        connection.connect()
        return () => connection.disconnect()
    }, [roomType, url])

    return (
        <>
            <label>
                URL: <input value={url} onChange={e => setUrl(e.target.value)}/>
            </label>
            <h3>welcome to the {roomType} room.</h3>
        </>
    )
}

export default function Main() {
    const [roomType, setRoomType] = useState('general')
    const [show, setShow] = useState(false)

    return (
        <>
            <label>
                choose the chat room: {' '}
                <select value={roomType} onChange={e => setRoomType(e.target.value)}>
                    <option value='general'>general</option>
                    <option value='travel'>travel</option>
                    <option value='music'>music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'close chat' : 'open chat'}
            </button>
            {show && <hr/>}
            {show && <ChatRoom roomType={roomType}/>}
        </>
    )
}