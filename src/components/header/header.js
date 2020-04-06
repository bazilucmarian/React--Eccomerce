import React from 'react'
import './header.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../../src/assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect } from 'react-redux'
const Header=({currentUser})=>{
    return(
        <div className='header'>
            <Link to='/' className="logo-container">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to='/shop' className="option">
                    Shop
                </Link>
                <Link to='/shop' className="option">
                    Contact
                </Link>
                {
                    currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :<Link className="option" to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);