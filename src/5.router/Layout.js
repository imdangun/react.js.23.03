import {Outlet, Link} from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <nav>
                <ul> {/* to: context path 이후의 절대주소이다. */}
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
