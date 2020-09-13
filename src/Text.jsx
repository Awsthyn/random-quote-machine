import React from 'react'

function Text({quote}) {
    return (
        <h1 style={{color:"white",height: "150px"}} className="text-center mt-4 mb-2" id="text">
            {quote}
        </h1>
    )
}

export default Text
