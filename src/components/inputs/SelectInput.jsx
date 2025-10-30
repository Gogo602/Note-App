import React from 'react'

export default function SelectInput({label, name, value, onChange, options}) {
  return (
     <div className="mb-5">
          <label htmlFor={name} className="mb-2 font-bold">
            {label}
          </label>
          <select
            name={name}
            className="px-3 py-1 w-full outline-0 border border-white rounded-md"
            value={value}
            onChange={onChange}
          >
              {options.map((option) => (
                <option key={option.value} value={option.value} className='bg-[#1c0333]'>{option.label}</option>
              ))}
          </select>
    </div>
  )
}
