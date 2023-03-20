import React, {useState, useMemo} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = () => setShipCnt(shipCnt + 1)

    // const getProductCnt = () => carCnt + shipCnt

    let productCnt = useMemo(() => carCnt + shipCnt, [shipCnt])

    return (
        <>   
            {/*<h1>{getProductCnt()}</h1>*/}
            <h1>{productCnt}</h1>
            <hr/>      
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

function Car({make}) {      
    return <button onClick={make}>car</button>
}

function Ship({make}) {
    return <button onClick={make}>ship</button>
}