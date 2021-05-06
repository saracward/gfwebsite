import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
