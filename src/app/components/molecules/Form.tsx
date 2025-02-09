import React, { PropsWithChildren } from 'react'

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, onSubmit }: PropsWithChildren<Props>) => {
  return (
    <form
      className="bg-gray-800 rounded-lg p-4 space-y-4 w-full"
      onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form