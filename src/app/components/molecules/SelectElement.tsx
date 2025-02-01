import React from 'react'

const SelectElement = () => {
  return (
    <select className="w-full rounded p-2 text-gray-900">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  )
}

export default SelectElement