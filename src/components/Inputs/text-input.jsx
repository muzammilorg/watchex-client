import React from 'react'
import styles from './text-input.module.scss'

const TextInput = (props) => {
  return (
    <>
    <div className={`${styles.input_container}`} style={props.style}>

        <div className={`${styles.input_field}`}>

            <input 
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)} 
            />


            {props.required && <div><p className={styles.input_err}>{props.err_msg ?? "required"}</p></div>}

        </div>

    </div>
    
    </>
  )
}

export default TextInput