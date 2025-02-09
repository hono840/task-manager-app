"use client";

import React, { useState } from "react";
import PageWrapper from "../molecules/PageWrapper";
import ContentsWrapper from "../molecules/ContentsWrapper";
import SectionTitle from "../atoms/SectionTitle";
import Section from "../organisms/Section";
import Form from "../molecules/Form";
import InputArea from "../molecules/InputArea";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import AuthSwitchLink from "../organisms/AuthSwitchLink";
import { supabase } from "@/app/utils/supabaseClient";
import Toast from "../molecules/Toast";

const SignInTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const closeToast = () => {
    setIsShow(false);
  };

  const signIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      // サインイン成功時にはトーストを表示
      if (!error) {
        return <Toast success={true} onClick={closeToast} />;
      } else {
        console.error(error);
        return <Toast success={false} onClick={closeToast} />;
      }
    } catch {
      console.error("サインインに失敗しました");
    }
  };
  return (
    <PageWrapper>
      <ContentsWrapper className="max-w-md">
        <SectionTitle>Sign In</SectionTitle>
        {isShow && <Toast success={true} onClick={closeToast} />}
        <Section>
          <Form onSubmit={signIn}>
            <InputArea
              htmlFor="email"
              id="email"
              labelName="メールアドレス"
              onChange={onChangeEmail}
              value={email}
              type="text"
              placeholder="your-email@example.com"
            />
            <InputArea
              htmlFor="password"
              id="password"
              labelName="パスワード"
              onChange={onChangePassword}
              value={password}
              type="password"
              placeholder="••••••••"
            />
            <PrimaryButton type="submit" buttonName="サインイン" />
          </Form>
          {/* サインアップ画面への遷移 */}
          <AuthSwitchLink
            href="/signUp"
            guideText="アカウントを持っていませんか？"
            linkText="サインアップ"
          />
        </Section>
      </ContentsWrapper>
    </PageWrapper>
  );
};

export default SignInTemplate;
