import React, { FC } from 'react'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
  valueName: '低' | '中' | '高'
}

const SelectElement: FC<Props> = ({ onChange, valueName }) => {
  const values = ['low', 'medium', 'high']
  return (
    <select className="w-full rounded p-2 text-gray-900" onChange={onChange}>
      {
        values.map((value) => (
          <option key={value} value={value}>{valueName}</option>
        ))
      }
      {/* <option value="low">低</option>
      <option value="medium">中</option>
      <option value="high">高</option> */}
    </select>
  )
}

export default SelectElement