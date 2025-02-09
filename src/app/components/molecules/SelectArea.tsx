import React, { FC } from 'react'
import Label from './Label'
import SelectElement from './SelectElement'

type Props = {
  labelName: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
  valueName: '低' | '中' | '高'
}

const SelectArea: FC<Props> = ({ labelName, onChange, value, valueName }) => {
  return (
    <div>
      <Label labelName={labelName} />
      <SelectElement onChange={onChange} value={value} valueName={valueName} />
    </div>
  )
}

export default SelectArea