import {useRef, useLayoutEffect, useState} from 'react'
import {createPortal} from 'react-dom'

function TooltipContainer({children, x, y, contentRef}) {
    return (       
        <div style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: 0,
            top: 0,
            transform: `translate(${x}px, ${y}px)`
        }}>
            <div ref={contentRef} 
                style={{
                    color: 'white',
                    background: '#222',
                    borderRadius: '.25rem',
                    padding: '.25rem'
                }}>
                {children}
            </div>
        </div>       
    )
}

function Tooltip({targetRect, children}) {
    const ref = useRef(null)
    const [tooltipHeight, setTooltipHeight] = useState(0)

    useLayoutEffect(() => {
        const {height} = ref.current.getBoundingClientRect()
        setTooltipHeight(height)
        console.log(height)
    }, [])

    let tooltipX = 0
    let tooltipY = 0
    if(targetRect) {
        tooltipX = targetRect.left
        tooltipY = targetRect.top - tooltipHeight
        if(tooltipY < 0) tooltipY = targetRect.bottom
    }

    return createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>,
        document.body
    )
}

function ButtonWithTooltip({tooltipContent, ...rest}) {
    const [targetRect, setTargetRect] = useState(null)
    const buttonRef = useRef(null)

    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={() => {
                    const rect = buttonRef.current.getBoundingClientRect()
                    setTargetRect({
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom
                    })
                }}
                onPointerLeave={() => setTargetRect(null)}/>
            {targetRect && (
                <Tooltip targetRect={targetRect}>
                    {tooltipContent}
                </Tooltip>
            )}
        </>
    )
}

export default function Main() {
    return (
        <div>
            <ButtonWithTooltip tooltipContent={<div>below</div>}>
                below
            </ButtonWithTooltip><div style={{height: 50}}/>
            <ButtonWithTooltip tooltipContent={<div>above</div>}>
                above
            </ButtonWithTooltip><div style={{height: 50}}/>
            <ButtonWithTooltip tooltipContent={<div>above</div>}>
                above
            </ButtonWithTooltip>
        </div>
    )
}