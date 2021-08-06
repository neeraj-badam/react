import React from 'react'

function Select (props)
{
    if(props.option === 'Select Branch')
        return <option value={props.option} defaultValue='Select Branch' disabled={true}>{props.option}</option>
    else
        return <option value={props.option}>{props.option}</option>
}
export default Select