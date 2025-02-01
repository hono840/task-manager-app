import React, { FC, PropsWithChildren } from 'react'

type Props = {
  labelName: string
}


const Label: FC<Props> = ({ labelName }) => {
  return (
    <label className="block mb-1 font-medium">{labelName}</label>
  )
}

export default Label