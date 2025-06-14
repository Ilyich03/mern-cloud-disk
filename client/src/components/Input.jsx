import React from 'react'

const Input = (props) => {

  return (
    <div className='m-4'>
      <label className='block text-sm font-md mt-3 text-gray-700'>{props.label}</label>
      <input onChange={(event)=> props.setValue(event.target.value)}
            value={props.value} 
            type={props.type} 
            placeholder={props.placeholder} 
            className=' border-1 py-2 px-2 mt-1 border-grey-300 rounded-md shadow-xs w-100'/>
    </div>
  )
}

export default Input

