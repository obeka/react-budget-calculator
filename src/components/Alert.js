import React from 'react'

export default function Alert({alert}) {
    const {type,text} = alert
    console.log(type,text)
    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}
