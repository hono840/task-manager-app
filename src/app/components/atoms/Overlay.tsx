import React, { FC } from 'react'

type Props = {
  onClick: () => void
}

const Overlay: FC<Props> = ({ onClick }) => {
  return (
    <div
      // ★ メニューの z-index より低くする
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={onClick}
    />
  )
}

export default Overlay