import './7.style4.css'
import {useRef} from 'react'

export default function MyRef() {
    const catsRef = useRef(null)

    function scrollToIndex(index) {
        const cats = catsRef.current

        const cat = cats.querySelectorAll('li > img')[index]
        cat.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>tom</button>
                <button onClick={() => scrollToIndex(1)}>miki</button>
                <button onClick={() => scrollToIndex(2)}>nori</button>
            </nav>

            <div>
                <ul ref={catsRef}>
                    <li><img src='https://placekitten.com/g/200/200'/></li>
                    <li><img src='https://placekitten.com/g/300/200'/></li>
                    <li><img src='https://placekitten.com/g/250/200'/></li>
                </ul>
            </div>
        </>
    )
}