"use client";

import React, { useState } from 'react';

const Page = () => {
  // ハンバーガーメニューの開閉状態を管理するフック
  const [isOpen, setIsOpen] = useState(false);

  // メニューを開く
  const openMenu = () => {
    setIsOpen(true);
  };

  // メニューを閉じる
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* ヘッダー */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <h1 className="text-xl font-bold">Task Manager</h1>

            {/* ナビゲーション */}
            <nav>
              {/* ハンバーガーボタン: md以上では非表示 */}
              <button
                className="md:hidden bg-gray-800 hover:bg-gray-700 p-2 rounded focus:outline-none"
                onClick={openMenu}
              >
                {/* 三本線アイコンを「白い線」で表示 */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* 通常メニュー: md以上の画面幅で表示 */}
              <ul className="hidden md:flex space-x-4">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl w-full container mx-auto px-4 py-8">
        {/* タスク作成フォーム */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
          <form className="bg-gray-800 rounded-lg p-4 space-y-4 max-w-md">
            <div>
              <label className="block mb-1 font-medium">Task Title</label>
              <input
                type="text"
                className="w-full rounded p-2 text-gray-900"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Priority</label>
              <select className="w-full rounded p-2 text-gray-900">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Deadline</label>
              <input
                type="date"
                className="w-full rounded p-2 text-gray-900"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Tags</label>
              <input
                type="text"
                className="w-full rounded p-2 text-gray-900"
                placeholder="e.g. design, meeting"
              />
            </div>

            <button
              type="button" // 機能を実装する際には "submit" に変更
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Create Task
            </button>
          </form>
        </section>

        {/* タスク一覧 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Task List</h2>
          <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            {/* タスク行1 */}
            <div className="border-b border-gray-700 pb-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-semibold">Task Title 1</p>
                <p className="text-sm text-gray-400">
                  Priority: High / Deadline: 2025-01-31 / Tags: [design, urgent]
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex space-x-2">
                <button
                  type="button"
                  className="bg-green-600 hover:bg-green-500 text-white py-1 px-3 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* タスク行2 */}
            <div className="border-b border-gray-700 pb-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-semibold">Task Title 2</p>
                <p className="text-sm text-gray-400">
                  Priority: Medium / Deadline: 2025-02-15 / Tags: [analysis]
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex space-x-2">
                <button
                  type="button"
                  className="bg-green-600 hover:bg-green-500 text-white py-1 px-3 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* タスク行3 */}
            <div className="border-b border-gray-700 pb-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-semibold">Task Title 3</p>
                <p className="text-sm text-gray-400">
                  Priority: Low / Deadline: 2025-03-10 / Tags: [review, backlog]
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex space-x-2">
                <button
                  type="button"
                  className="bg-green-600 hover:bg-green-500 text-white py-1 px-3 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-700 mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © 2025 Task Manager
        </div>
      </footer>

      {/* サイドメニュー（オフキャンバス） */}
      <div
        className={`
          fixed top-0 right-0 w-64 h-full bg-gray-800 shadow-lg
          transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300
          flex flex-col
          z-50  // ★ メニューを前面に表示
        `}
      >
        {/* バツボタン */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-white focus:outline-none hover:text-gray-400"
          >
            {/* バツアイコン */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* メニュー項目例 */}
        <nav className="px-4 flex-grow">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-gray-500">© 2025 Task Manager</p>
        </div>
      </div>

      {/* 背景の半透明オーバーレイ（メニューオープン時のみ表示） */}
      {isOpen && (
        <div
          // ★ メニューの z-index より低くする
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Page;