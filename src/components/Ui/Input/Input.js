import React from 'react'
import "./Input.css"

const Input = ({placeholder,type,InputType,onChange,value}) => {
    let inputElement = null

    switch (InputType) {
        case "input":
            inputElement=<input onChange={onChange} className="input-field" placeholder={placeholder} type={type} value={value} />
            break;
        default:
            inputElement=<input onChange={onChange} className="input-field" placeholder={placeholder} type={type} value={value} />
    }

  return (
    <div className="input">{inputElement}</div>
  )
}

export default Input