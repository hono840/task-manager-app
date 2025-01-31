import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ヘッダー部分 */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Task Manager</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ部分 */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300">
            ここにタスクの概要や、アプリの使い方などを説明するテキストを配置できます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          {/* タスク一覧などを表示するコンポーネントを配置予定 */}
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400">（タスク一覧を表示する場所）</p>
          </div>
        </section>
      </main>

      {/* フッター部分 */}
      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Task Manager
        </div>
      </footer>
    </div>
  )
}

export default Page