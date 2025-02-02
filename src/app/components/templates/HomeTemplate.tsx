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
          <SectionTitle>タスク作成</SectionTitle>
          <Form>
            <InputArea
              labelName="タスク内容"
              type="text"
              placeholder='タスク内容を記載'
            />
            <SelectArea
              labelName='優先度'
            />
            <InputArea
              labelName="期限"
              type="date"
            />
            <InputArea
              labelName="ラベル"
              type="text"
              placeholder="[会議][作業][勤怠]" />
            <PrimaryButton type='submit' buttonName='作成' />
          </Form>
        </Section>
        {/* タスク一覧 */}
        <Section>
          <SectionTitle>タスク一覧</SectionTitle>
          <TaskList>
            <TaskListItem>
              <div>
                <p className="font-semibold">Task Title 1</p>
                <SmallText>優先度: 高</SmallText>
                <SmallText>期限: 2025-01-31</SmallText>
                <SmallText>ラベル: [design, urgent]</SmallText>
                <SmallText>ステータス: 完了</SmallText>
              </div>
              <div className="mt-2 flex gap-2 border-t border-gray-700 pt-4 sm:border-none sm:mt-0 sm:pt-0">
                <VariantButton type='button' status='info'>編集</VariantButton>
                <VariantButton type='button' status='alert'>削除</VariantButton>
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