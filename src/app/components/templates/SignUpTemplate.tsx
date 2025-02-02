import React from 'react'
import PageWrapper from '../molecules/PageWrapper'
import ContentsWrapper from '../molecules/ContentsWrapper'
import SectionTitle from '../atoms/SectionTitle'
import Section from '../organisms/Section'
import Form from '../molecules/Form'
import InputArea from '../molecules/InputArea'
import PrimaryButton from '../atoms/Buttons/PrimaryButton'
import AuthSwitchLink from '../organisms/AuthSwitchLink'

const SignUpTemplate = () => {
  return (
    <PageWrapper>
      <ContentsWrapper className='max-w-md'>
        <SectionTitle>Sign Up</SectionTitle>
        <Section>
          {/* ページ見出し */}
          {/* ユーザー登録フォーム */}
          <Form>
            <InputArea
              htmlFor="name"
              id="name"
              labelName="ユーザーネーム"
              // onChange={onChange}
              // value={value}
              type="text"
              placeholder="Your Name"
            />
            <InputArea
              htmlFor="email"
              id="email"
              labelName="メールアドレス"
              // onChange={onChange}
              // value={value}
              type="text"
              placeholder="your-email@example.com"
            />
            <InputArea
              htmlFor="password"
              id="password"
              labelName="パスワード"
              // onChange={onChange}
              // value={value}
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