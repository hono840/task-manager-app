import React, { FC } from 'react'
import VariantButton from '../atoms/Buttons/VariantButton'

type Props = {
  onCancel: () => void;
  onSignOut: () => void;
}

const ConfirmSignOutModal: FC<Props> = ({ onCancel, onSignOut }) => {
  return (
    <div id="signOutModal" className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full">
        {/* タイトル */}
        <h2 className="text-lg font-semibold mb-4 text-white text-center">
          サインアウトしてもよろしいでしょうか？
        </h2>
        {/* ボタンコンテナ */}
        <div className="flex justify-center gap-4">
          <VariantButton type="button" status="cancel" onClick={onCancel}>
            キャンセル
          </VariantButton>
          <VariantButton type="button" status="alert" onClick={onSignOut}>
            サインアウト
          </VariantButton>
        </div>
      </div>
    </div>
  )
}

export default ConfirmSignOutModal