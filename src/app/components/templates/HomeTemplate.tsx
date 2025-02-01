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
import ContentsWrapper from '../molecules/ContentsWrapper';
import Form from '../molecules/Form';
import PageWrapper from '../molecules/PageWrapper';

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
    <PageWrapper>
      {/* ヘッダー */}
      <Header onClick={openMenu} />
      {/* ハンバーガーメニュー:SP表示 */}
      <HeaderMenuSp isOpen={isOpen} onClick={closeMenu} />
      {/* メインコンテンツ */}
      <ContentsWrapper>
        {/* タスク作成フォーム */}
        <Section>
          <SectionTitle>Create a New Task</SectionTitle>
          <Form>
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
          </Form>
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
      </ContentsWrapper>
      {/* フッター */}
      <Footer />
      {isOpen && (
        <Overlay onClick={closeMenu} />
      )}
    </PageWrapper>
  )
}

export default HomeTemplate