"use client";

import React, { useState } from 'react';
import Header from './Header';
import HeaderMenuSp from '../organisms/HeaderMenuSp';
import Footer from './Footer';
import Overlay from '../atoms/Overlay';
import InputArea from '../molecules/InputArea';
import SelectArea from '../molecules/SelectArea';
import PrimaryButton from '../atoms/Buttons/PrimaryButton';
import SectionTitle from '../atoms/SectionTitle';
import Section from '../organisms/Section';
import TaskList from '../molecules/TaskList';
import TaskListItem from '../molecules/TaskListItem';
import SmallText from '../atoms/SmallText';
import VariantButton from '../atoms/Buttons/VariantButton';


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
        <Section>
          <SectionTitle>Create a New Task</SectionTitle>
          <form className="bg-gray-800 rounded-lg p-4 space-y-4 w-full">
            <InputArea
              labelName="Task Title"
              type="text"
              placeholder='e.g. Meeting with John'
            />
            <SelectArea
              labelName='Priority'
            />
            <InputArea
              labelName="Deadline"
              type="date"
            />
            <InputArea
              labelName="Labels"
              type="text"
              placeholder="e.g. design, meeting" />
            <PrimaryButton type='submit' buttonName='Create' />
          </form>
        </Section>
        {/* タスク一覧 */}
        <Section>
          <SectionTitle>Task List</SectionTitle>
          <TaskList>
            <TaskListItem>
              <div>
                <p className="font-semibold">Task Title 1</p>
                <SmallText>Priority: High</SmallText>
                <SmallText>Deadline: 2025-01-31</SmallText>
                <SmallText>Tags: [design, urgent]</SmallText>
                <SmallText>status: Not yet started</SmallText>
              </div>
              <div className="mt-2 flex gap-2 border-t border-gray-700 pt-4 sm:border-none sm:mt-0 sm:pt-0">
                <VariantButton type='button' status='info'>Edit</VariantButton>
                <VariantButton type='button' status='alert'>Delete</VariantButton>
              </div>
            </TaskListItem>
          </TaskList>
        </Section>
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