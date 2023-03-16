import React from 'react'

function Button() {
    /*
    return (
        <button>I'm a button</button>
    )
    */
    return React.createElement('button', null, 'I\'m a button')
}

export default function Component() {
    return (
        <div>
            <h1>welcome to my app</h1>
            <Button/>
        </div>
    )
}