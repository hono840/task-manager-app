"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Header from "./Header";
import HeaderMenuSp from "../organisms/HeaderMenuSp";
import Footer from "./Footer";
import Overlay from "../atoms/Overlay";
import InputArea from "../molecules/InputArea";
import SelectArea from "../molecules/SelectArea";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import SectionTitle from "../atoms/SectionTitle";
import Section from "../organisms/Section";
import TaskList from "../molecules/TaskList";
import TaskListItem from "../molecules/TaskListItem";
import SmallText from "../atoms/SmallText";
import VariantButton from "../atoms/Buttons/VariantButton";
import ContentsWrapper from "../molecules/ContentsWrapper";
import Form from "../molecules/Form";
import PageWrapper from "../molecules/PageWrapper";
import { useUser } from "@/app/hooks/useUser";
import { supabase } from "@/app/utils/supabaseClient";

interface Task {
  id: number;
  task: string;
  priority: string;
  tag: string;
  date: string;
  status: "未完了" | "完了";
}

const HomeTemplate = () => {
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");
  const [priorityName, setPriorityName] = useState<"低" | "中" | "高">("低");
  const [tag, setTag] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [tasks, setTasks] = useState<Task[]>([]);
  const user = useUser();
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

  // タスク一覧取得
  const getTasks = async () => {
    try {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        console.log("タスク一覧の取得に失敗しました", error);
      }
      if (data) {
        setTasks(data);
      }
    } catch {
      console.log("タスク一覧の取得に失敗しました");
    }
  };
  // マウント時にタスク一覧を取得
  useEffect(() => {
    getTasks();
  }, []);
  // タスク作成処理
  const createTask = async () => {
    try {
      const { error } = await supabase.from("tasks").insert([
        {
          task: task,
          priority: priority,
          tag: tag,
          date: new Date(date).toISOString(),
        },
      ]);
      if (error) {
        console.log("タスク作成中にエラーが発生しました", error);
      }
      setTask("");
      setPriority("low");
      setTag("");
      setDate("");
    } catch {
      console.log("タスク作成中にエラーが発生しました");
    }
  };
  // タスク削除処理
  const deleteTask = async (id: number | string) => {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      if (error) {
        console.log("タスク削除中にエラーが発生しました", error);
      }
      setTasks(tasks.filter((task) => task.id !== id));
    } catch {
      console.log("タスク削除中にエラーが発生しました");
    }
  };

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const onChangePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
    setPriorityName(e.target.value as "低" | "中" | "高");
  };
  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <PageWrapper>
      {/* ヘッダー */}
      <Header onClick={openMenu} />
      {/* ハンバーガーメニュー:SP表示 */}
      <HeaderMenuSp isOpen={isOpen} onClick={closeMenu} />
      {/* メインコンテンツ */}
      <ContentsWrapper>
        {user.user && (
          <Section>{<p>こんにちは{user.user.userName}さん</p>}</Section>
        )}
        {/* タスク作成フォーム */}
        <Section>
          <SectionTitle>タスク作成</SectionTitle>
          <Form onSubmit={createTask}>
            <InputArea
              labelName="タスク内容"
              type="text"
              placeholder="タスク内容を記載"
              value={task}
              onChange={onChangeTask}
            />
            <div className="flex gap-4 items-center">
              <SelectArea
                labelName="優先度"
                value={priority}
                onChange={onChangePriority}
              />
              <InputArea
                labelName="期限"
                type="date"
                value={date}
                onChange={onChangeDate}
              />
            </div>
            <InputArea
              labelName="タグ"
              type="text"
              placeholder="[会議][作業][勤怠]"
              value={tag}
              onChange={onChangeTag}
            />
            <PrimaryButton type="submit" buttonName="作成" disabled={!task} />
          </Form>
        </Section>
        {/* タスク一覧 */}
        <Section>
          <SectionTitle>タスク一覧</SectionTitle>
          {tasks.length === 0 ? (
            <p>タスクがありません</p>
          ) : (
            <TaskList>
              {tasks.map((task) => (
                <TaskListItem key={task.id}>
                  <div>
                    <p className="font-semibold">{task.task}</p>
                    <SmallText>優先度: {task.priority}</SmallText>
                    <SmallText>期限: {task.date}</SmallText>
                    <SmallText>タグ: {task.tag}</SmallText>
                    <SmallText>ステータス: {task.status}</SmallText>
                  </div>
                  <div className="flex gap-2 pt-2 sm:mt-0 sm:pt-0">
                    <VariantButton type="button" status="info">
                      編集
                    </VariantButton>
                    <VariantButton
                      type="button"
                      status="alert"
                      onClick={() => deleteTask(task.id)}
                    >
                      削除
                    </VariantButton>
                  </div>
                </TaskListItem>
              ))}
            </TaskList>
          )}
        </Section>
      </ContentsWrapper>
      {/* フッター */}
      <Footer />
      {isOpen && <Overlay onClick={closeMenu} />}
    </PageWrapper>
  );
};

export default HomeTemplate;
