import React, { PropsWithChildren } from 'react'

type Props = {
  onClick: () => void
}

const HamburgerButton = ({ onClick, children }: PropsWithChildren<Props>) => {
  return (
    <button
      className="md:hidden bg-gray-800 hover:bg-gray-700 p-2 rounded focus:outline-none"
      onClick={onClick}
    >{children}
    </button>
  )
}

export default HamburgerButton