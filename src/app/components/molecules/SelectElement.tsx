import React from 'react'

const SelectElement = () => {
  return (
    <select className="w-full rounded p-2 text-gray-900">
      <option value="low">低</option>
      <option value="medium">中</option>
      <option value="high">高</option>
    </select>
  )
}

export default SelectElement