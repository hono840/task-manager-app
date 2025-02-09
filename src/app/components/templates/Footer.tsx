import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager
      </div>
    </footer>
  )
}

export default Footer