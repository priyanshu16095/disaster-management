import React from 'react'
import Logo from './Logo'
import '../css/button.css'

function SOSButton({ children, className }) {
    return (
        <div>
            <button class="btn"><i class="animation"></i>SOS<i class="animation"></i>
            </button>
        </div>
    )
}

function Navbar() {
    return (
        <div className='flex-s'>
            <Logo />
            <div className="flex-h gap-md">
                <p className="link">Resources</p>
                <p className='link'>Disasters and Emergencies</p>
                <SOSButton>SOS</SOSButton>
            </div>
        </div>
    )
}

export default Navbar
