function Apple() {
    return (<div>apple</div>)
}

function Pear() {
    return (<div>pear</div>)
}
/*
export default function Condition() {
    let fruit
    let isPaid = true
    
    if(isPaid) fruit = <Apple/>
    else fruit = <Pear/>

    return (<div>{fruit}</div>)
}
*/
/*
export default function Condition() {
    let isPaid = false

    return (
        <div>
            {isPaid ? <Apple/> : <Pear/>}
        </div>
    )
}
*/
export default function Condition() {
    let isPaid = true

    return (
        <div>
            {isPaid && <Apple/>}
        </div>
    )
}