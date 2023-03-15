import React from 'react'

function Greet() {
    /*
    return (
        <div>hello</div>
    )
    */
   const element = React.createElement(
        'div',
        {},
        'hello'
   )
    return element
}

export default Greet