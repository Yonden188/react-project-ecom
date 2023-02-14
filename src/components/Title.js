import React from 'react'
import '../App.css'

export default function Title({text, classes}) {
  return (
    <span classname={classes}>{!text ? "Login" : text }</span>
  )
}
