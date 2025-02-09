import React from 'react'

const CompleteSignOutModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-lg font-semibold mb-2">サインアウトしました</h2>
        <p className="text-sm text-gray-400">サインイン画面に戻ります。</p>
      </div>
    </div>
  )
}

export default CompleteSignOutModal