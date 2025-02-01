import React, { PropsWithChildren } from 'react'

const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="mb-8">{children}</section>
  )
}

export default Section