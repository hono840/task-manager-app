import React, { FC, LabelHTMLAttributes } from 'react'

type Props = {
  htmlFor?: string
  labelName: string
}


const Label: FC<Props> = ({ htmlFor, labelName }) => {
  return (
    <label className="block mb-1 font-medium" htmlFor={htmlFor}>{labelName}</label>
  )
}

export default Label