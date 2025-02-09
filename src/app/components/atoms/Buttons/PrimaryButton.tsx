import React, { FC } from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  buttonName: string
  disabled?: boolean
}

const PrimaryButton: FC<Props> = ({ type, onClick, buttonName, disabled }) => {
  return (
    <button
      type={type} // 機能を実装する際には "submit" に変更
      className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  )
}

export default PrimaryButton