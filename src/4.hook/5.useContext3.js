import './5.style3.css'
import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext(null)
const CurrentUserContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser
                }}>
                <WelcomePannel/>
                <label>
                    <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                        use dark mode
                </label>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel() {
    const {currentUser} = useContext(CurrentUserContext)

    return (
        <Panel title='welcome'>
            {currentUser ? <Greeting/> : <LoginForm/>}
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Greeting() {
    const {currentUser} = useContext(CurrentUserContext)

    return <p>you logged in as {currentUser.username}</p>
}

function LoginForm() {
    const {setCurrentUser} = useContext(CurrentUserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const canLogin = firstName && lastName

    return (
        <>
            <label>
                first name{': '}
                <input
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}/>                
            </label>
            <label>
                last name{': '}
                <input
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}/>
            </label>
            <Button
                disabled={!canLogin}
                onClick={() => setCurrentUser({
                    username: firstName + ' ' + lastName
                })}>
                log in
            </Button>
        </>
    )
}

function Button({children, disabled, onClick}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button
            className={clasName}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}