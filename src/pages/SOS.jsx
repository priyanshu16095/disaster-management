import React from 'react'

function SOS() {
    return (
        <div className='sospage padding gap-md'>
            <div className="flex-v gap-sm">
                <p className="title padding-bottom">Priyanshu Gupta</p>
                <p>You are requested to connect with Priyanshu Gupta as soon as possible.</p>
                <p>Disaster Expected: <span className="bold">Floods</span></p>
            </div>

            <div>
                <img src="/location.png" className='border' width={"100%"} />
                <p className="bold">Expected Location</p>
            </div>

            <button>Confirm Safety</button>

            <div className='sos-animation sos-top' />
            <div className='sos-animation sos-bottom' />
        </div>
    )
}

export default SOS
