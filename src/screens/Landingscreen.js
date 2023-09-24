import React from 'react'
import {Link} from 'react-router-dom'

function Landingscreen() {
    return(
        <div className='row landing'>
            <div className='col-md-12 text-center'>
                <h1 style={{color:'white', fontSize:'110px'}}>WELCOME</h1>
                <h3 style={{color: 'white'}} className='mt-5'>"There is only one boss. The Guest."</h3>
                <Link to ='/login'>
                <button className='btn landingbtn' style={{color: 'black'}}>Get Started</button>
                </Link>
            </div>
        </div>
    )
}
export default Landingscreen