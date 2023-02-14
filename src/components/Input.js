import React from 'react'
import '../App.css'

export default function Input({type, placeholder, classes, data=""}) {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            classname={classes}
            value={data}
        />

    )
}

