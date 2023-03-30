import {useState} from 'react'

export default function House() {
    console.log('House')

    const [livingOn, setLivingOn] = useState(false)
    const [restOn, setRestOn] = useState(false)

    return (
        <>
            <button onClick={() => setLivingOn(!livingOn)}>거실</button>{' '}
            <button onClick={() => setRestOn(!restOn)}>화장실</button>
            <hr/>
            <LivingRoom lightOn={livingOn}/>
            <RestRoom lightOn={restOn}/>
            <BedRoom/>
        </>
    )
}

function LivingRoom({lightOn}) {
    console.log('LivingRoom')    

    let roomName = '거실 '
    if(lightOn) roomName += 'O '

    return roomName
}

function RestRoom({lightOn}) {
    console.log('RestRoom')    

    let roomName = '화장실 '
    if(lightOn) roomName += 'O '

    return roomName
}

function BedRoom() {
    console.log('BedRoom')

    return '침실'
}