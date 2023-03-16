import './2.style.css'

const user = {
    username: 'hedy',
    faceImgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    faceImgSize: 90
}

export default function Profile() {
    return (
        <>
            <h1>{user.username}</h1>
            <img
                className='avatar'
                src={user.faceImgUrl}
                style={{
                    width: user.faceImgSize,
                    height: user.faceImgSize
                }}
            />
        </>
    )
}