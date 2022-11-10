import React from 'react'

function Testimonial(tstProps) {
    return (
        <div className='testimonial flex'>
            <h4>{tstProps.quote}</h4>
            <p>{tstProps.source}</p>
        </div>
    )
}

export default Testimonial
