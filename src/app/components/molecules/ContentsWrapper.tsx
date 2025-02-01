import React, { PropsWithChildren } from 'react'

type Props = {
  className?: string
}

const ContentsWrapper = ({ children, className = 'max-w-7xl' }: PropsWithChildren<Props>) => {
  return (
    <main className={`${className} w-full container mx-auto px-4 py-8`}>
      {children}
    </main>
  )
}

export default ContentsWrapper