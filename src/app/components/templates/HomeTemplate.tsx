"use client";

import React, { useState } from 'react';
import Header from './Header';
import HeaderMenuSp from '../organisms/HeaderMenuSp';
import Footer from './Footer';
import Overlay from '../atoms/Overlay';

const HomeTemplate = () => {
  // ハンバーガーメニューの開閉状態
  const [isOpen, setIsOpen] = useState(false);

  // ハンバーガーメニューを開く
  const openMenu = () => {
    setIsOpen(true);
  };

  // ハンバーガーメニューを閉じる
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* ヘッダー */}
      <Header onClick={openMenu} />
      {/* ハンバーガーメニュー:SP表示 */}
      <HeaderMenuSp isOpen={isOpen} onClick={closeMenu} />
      {/* メインコンテンツ */}
      <main className="max-w-7xl w-full container mx-auto px-4 py-8">
        {/* タスク作成フォーム */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
          <form className="bg-gray-800 rounded-lg p-4 space-y-4 w-full">
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
      <Footer />
      {isOpen && (
        <Overlay onClick={closeMenu} />
      )}
    </div>
  )
}

export default HomeTemplate