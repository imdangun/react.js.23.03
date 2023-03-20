import {createContext, useContext} from 'react'

export default function App() {
    return (
        <ThemeContext.Provider value='dark'>
            <From/>
        </ThemeContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Button>sign up</Button>
            <Button>log in</Button>
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

function Button({children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme
}