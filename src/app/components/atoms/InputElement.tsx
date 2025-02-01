import React, { FC } from 'react'

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type: string
  placeholder?: string
}

const InputElement: FC<Props> = ({ onChange, value, type, placeholder }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      className="w-full rounded p-2 text-gray-900"
      placeholder={placeholder}
    />
  )
}

export default InputElement