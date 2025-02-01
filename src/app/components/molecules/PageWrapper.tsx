import React, { PropsWithChildren } from 'react'

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {children}
    </div>
  )
}

export default PageWrapper