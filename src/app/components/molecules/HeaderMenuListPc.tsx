import React from 'react'

const HeaderMenuListPc = () => {
  return (
    // src/app/components/organisms/HeaderMenuSp.tsx
    <ul className="hidden md:flex space-x-4">
      <li>
        <a href="#" className="hover:text-gray-400">
          ホーム
        </a>
      </li>
      <li>
        <a href="/signIn" className="hover:text-gray-400">
          サインイン
        </a>
      </li>
      <li>
        <a href="/signUp" className="hover:text-gray-400">
          サインアップ
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-400">
          サインアウト
        </a>
      </li>
    </ul>
  )
}

export default HeaderMenuListPc