import React from 'react'
import Title from '../components/Title'
import '../App.css'
import Input from '../components/Input'

 export default function Login () {
    const customstyle = {
        fontsize:'20px',
        background: 'black',
        color: 'white',
        margin: '2rem',
        padding: '4rem'

    }
    
  return (
    <div>
      <h1>Login</h1>
      <Title classes={"title"} text={"Login page"}/>
      <hr />

      <div style={customstyle}>
        <label
        style = { {fontsize: "20px"}}
        >
           <Title classes="label-text" text={"username:"}/>
            </label>
        <Input type={"text"} placeholder={"enter username"} />
        <Input
        type={"date"}
        placeholder={""}
        />
      </div>
    </div>
  )
}


