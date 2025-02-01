import React from 'react'

const HeaderMenuList = () => {
  return (
    <ul className="hidden md:flex space-x-4">
      <li>
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-400">
          About
        </a>
      </li>
    </ul>
  )
}

export default HeaderMenuList