import React, { PropsWithChildren } from 'react'

const TaskListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between">
      {children}
    </li>
  )
}

export default TaskListItem