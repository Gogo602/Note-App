
import React from 'react'

export default function TextInput({label, name, value, onChange, required }) {
  return (
    <div className="mb-5">
          <label htmlFor={name}  className="mb-2 font-bold">
            {label}
          </label>
          <input
            type="text"
            name={name}
            className="px-3 py-1 w-full outline-0 border border-white rounded-md"
            value={value}
            onChange={onChange}
            required={required}
          />  
    </div>
  )
}
