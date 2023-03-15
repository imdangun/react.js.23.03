import Greet from './1.Greet'

function Jsx() {
    const username = '최한석'
    const style = { // 속성명은 camelCase 로 기술한다.
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 20,
        padding: '1rem'
    }

    return (
        <> {/* fragment 는 DOM이 안 된다. element 1개를 return 해야 한다.*/}
            
        </>
    )
}