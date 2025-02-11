import ReactDOM from 'react-dom'
import './Portals.css'
/*
export default ()=>(
    <div className='Portals'>
        <h1>Demonstration of portals</h1>
    </div>
)
*/

export default  ()=>{
    return ReactDOM.createPortal(
        <div className='Portals'>
            <h1>Demonstration of portals</h1>
        </div>, document.getElementById('portal-root')
    )
}