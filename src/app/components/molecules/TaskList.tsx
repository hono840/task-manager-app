import React, { PropsWithChildren } from 'react'

const TaskList = ({ children }: PropsWithChildren) => {
  return (
    <ul className="bg-gray-800 rounded-lg p-4 space-y-4">
      {children}
    </ul>
  )
}

export default TaskList