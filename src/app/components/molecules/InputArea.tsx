import React, { FC } from 'react'
import Label from './Label'
import InputElement from '../atoms/InputElement'

type Props = {
  labelName: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type: string
  placeholder?: string
}

const InputArea: FC<Props> = ({ labelName, onChange, value, type, placeholder }) => {
  return (
    <div>
      <Label
        labelName={labelName}
      />
      <InputElement
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputArea