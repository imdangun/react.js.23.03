import {useState, useEffect, useRef} from 'react'

function Modal({isOpen, children}) {
    const ref = useRef()

    useEffect(() => {
        if(!isOpen) return
        const dialog = ref.current
        dialog.showModal()
        return () => dialog.close()
    }, [isOpen])

    return <dialog ref={ref}>{children}</dialog>
}

export default function Main() {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(true)}>open dialog</button>
            <Modal isOpen={show}>
                hello<br/><br/>
                <button onClick={() => setShow(false)}>close</button>
            </Modal>
        </>
    )
}