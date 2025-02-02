import React, { FC } from 'react'
import ThreeLineIcon from '../atoms/icons/ThreeLineIcon'
import HamburgerButton from '../atoms/HamburgerButton'
import Logo from '../atoms/Logo'
import HeaderMenuListPc from '../molecules/HeaderMenuListPc'

type Props = {
  onClick: () => void
}

const Header: FC<Props> = ({ onClick }) => {
  return (
    <header className="border-b border-gray-700">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Logo />
          {/* ナビゲーション */}
          <nav>
            {/* ハンバーガーボタン: md以上では非表示 */}
            <HamburgerButton onClick={onClick}>
              <ThreeLineIcon />
            </HamburgerButton>
            {/* 通常メニュー: md以上の画面幅で表示 */}
            <HeaderMenuListPc />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header