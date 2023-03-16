export default function Event() {
    function handleClick() {
        alert('you clicked me.')
    }

    return (
        <button onClick={handleClick}>click me</button>
    )
}

