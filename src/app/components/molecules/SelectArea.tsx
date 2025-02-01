import React, { FC } from 'react'
import Label from './Label'
import SelectElement from './SelectElement'

type Props = {
  labelName: string
}

const SelectArea: FC<Props> = ({ labelName }) => {
  return (
    <div>
      <Label labelName={labelName} />
      <SelectElement />
    </div>
  )
}

export default SelectArea