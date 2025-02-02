import React from 'react'
import SectionTitle from '../components/atoms/SectionTitle'
import Form from '../components/molecules/Form'
import Label from '../components/molecules/Label'
import InputElement from '../components/atoms/InputElement'
import InputArea from '../components/molecules/InputArea'
import PrimaryButton from '../components/atoms/Buttons/PrimaryButton'
import ContentsWrapper from '../components/molecules/ContentsWrapper'
import PageWrapper from '../components/molecules/PageWrapper'
import Section from '../components/organisms/Section'
import AuthSwitchLink from '../components/organisms/AuthSwitchLink'

const page = () => {
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

export default page