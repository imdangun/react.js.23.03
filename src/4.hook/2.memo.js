import React, {useState} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    return (
        <>
            <button onClick={() => setCarCnt(carCnt + 1)}>car</button>{' '}
            <button onClick={() => setShipCnt(shipCnt + 1)}>ship</button>
            <hr/>
            <Car cnt={carCnt}/>{' '}
            <Ship cnt={shipCnt}/>
        </>
    )
}

function Car({cnt}) {
    console.log('Car()')
    return `car: ${cnt} `
}

const Ship = React.memo(function ({cnt}) {
    console.log('Ship()')
    return `ship: ${cnt} `
})