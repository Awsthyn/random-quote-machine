import React from 'react'

function Author({author}) {
    return (
        <h3 style={{color: "rgb(0, 164, 189)"}} id="author" className="mt-3 mb-3 text-center">
            {author}
        </h3>
    )
}

export default Author
