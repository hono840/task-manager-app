import React, { FC } from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  buttonName: string
}

const PrimaryButton: FC<Props> = ({ type, onClick, buttonName }) => {
  return (
    <button
      type={type} // 機能を実装する際には "submit" に変更
      className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      onClick={onClick}
    >
      {buttonName}
    </button>
  )
}

export default PrimaryButton