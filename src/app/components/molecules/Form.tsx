import React, { FC, PropsWithChildren } from 'react'

const Form = ({ children }: PropsWithChildren) => {
  return (
    <form className="bg-gray-800 rounded-lg p-4 space-y-4 w-full">
      {children}
    </form>
  )
}

export default Form