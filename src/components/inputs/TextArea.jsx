

import React from 'react'

export default function TextArea({label, name, value, onChange, required=false}) {
  return (
    <div className="mb-5">
          <label htmlFor={name} className="mb-2 font-bold">
            {label}
          </label>
          <textarea
            id={name}
            name={name}
            className="px-3 py-1 w-full outline-0 border border-white rounded-md min-h-25"
            value={value}
            onChange={onChange}
            required={required}
          ></textarea>
    </div>
  )
}
