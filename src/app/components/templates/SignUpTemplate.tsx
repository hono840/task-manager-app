"use client";

import React, { useState } from 'react'
import PageWrapper from '../molecules/PageWrapper'
import ContentsWrapper from '../molecules/ContentsWrapper'
import SectionTitle from '../atoms/SectionTitle'
import Section from '../organisms/Section'
import Form from '../molecules/Form'
import InputArea from '../molecules/InputArea'
import PrimaryButton from '../atoms/Buttons/PrimaryButton'
import AuthSwitchLink from '../organisms/AuthSwitchLink'
import { supabase } from '@/app/utils/supabaseClient';

const SignUpTemplate = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  // サインアップ処理
  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { userName }
        }
      })
      if (error) {
        alert('サインアップに失敗しました')
        return;
      }
      alert('サインアップに成功しました、認証メールを送ったのでご確認ください')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <PageWrapper>
      <ContentsWrapper className='max-w-md'>
        <SectionTitle>Sign Up</SectionTitle>
        <Section>
          <Form onSubmit={signUp}>
            <InputArea
              htmlFor="name"
              id="name"
              labelName="ユーザーネーム"
              onChange={onChangeUserName}
              value={userName}
              type="text"
              placeholder="Your Name"
            />
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
            <PrimaryButton type='submit' buttonName='サインアップ' />
          </Form>
          {/* サインイン画面への遷移 */}
          <AuthSwitchLink
            href='/signIn'
            guideText='もうすでにアカウントを持っていますか？'
            linkText='サインイン' />
        </Section>
      </ContentsWrapper>
    </PageWrapper>
  )
}

export default SignUpTemplate