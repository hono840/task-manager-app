import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  guideText: string
  linkText: string
  href: string
}

const AuthSwitchLink: FC<Props> = ({ guideText, linkText, href }) => {
  return (
    <p className="mt-4 text-center text-sm text-gray-400">
      {guideText}
      <Link href={href} className="text-blue-500 hover:underline ml-2">
        {linkText}
      </Link>
    </p>
  )
}

export default AuthSwitchLink