import React, { PropsWithChildren } from "react";

const TaskListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4">
      {children}
    </li>
  );
};

export default TaskListItem;
