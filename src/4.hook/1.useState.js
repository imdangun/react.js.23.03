import {useState} from 'react'

export default function House() {
    console.log('House')

    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
            <BedRoom/>
        </>
    )
}

function LivingRoom() {
    console.log('LivingRoom')    

    const [lightOn, setLight] = useState(false)
    let roomName = '거실 '
    if(lightOn) roomName += 'O'
    
    return <button onClick={() => setLight(!lightOn)}>{roomName}</button>
}

function RestRoom() {
    console.log('RestRoom')    

    const [lightOn, setLight] = useState(false)
    let roomName = '화장실 '
    if(lightOn) roomName += 'O'
    
    return <button onClick={() => setLight(!lightOn)}>{roomName}</button>
}

function BedRoom() {
    console.log('BedRoom')

    const [lightOn, setLight] = useState(false)
    let roomName = '침실 '
    if(lightOn) roomName += 'O'
    
    return <button onClick={() => setLight(lightOn)}>{roomName}</button>
}