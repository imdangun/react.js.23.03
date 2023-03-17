import {useCallback, useState} from 'react'

export default function MyUseCallback() {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <label>
                <input
                    type='checkbox'
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}/>
                    dark mode
            </label>
            <hr/>
            <Product 
                referrerId='wizard'
                productId={123}
                theme={isDark ? 'dark' : 'light'}/>
        </>
    )
}

export function Product({productId, referer, theme}) {
    const handleSubmit = useCallback(orderDetails =>
        post('/product/' + productId + '/buy', {
            referer,
            orderDetails
        }), [productId, referer])
    
    return (
        <div className={theme}>
            h
        </div>
    )
}

function post(url, data) {
    console.log('POST /' + url)
    console.log(data)
}