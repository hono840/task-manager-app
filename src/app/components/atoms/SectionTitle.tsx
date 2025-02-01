import React, { PropsWithChildren } from 'react'

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-2xl font-semibold mb-4">{children}</h2>
  )
}

export default SectionTitle