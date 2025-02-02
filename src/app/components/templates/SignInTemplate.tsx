import React from 'react'
import PageWrapper from '../molecules/PageWrapper'
import ContentsWrapper from '../molecules/ContentsWrapper'
import SectionTitle from '../atoms/SectionTitle'
import Section from '../organisms/Section'
import Form from '../molecules/Form'
import InputArea from '../molecules/InputArea'
import PrimaryButton from '../atoms/Buttons/PrimaryButton'
import AuthSwitchLink from '../organisms/AuthSwitchLink'

const SignInTemplate = () => {
  return (
    <PageWrapper>
      <ContentsWrapper className='max-w-md'>
        <SectionTitle>Sign In</SectionTitle>
        <Section>
          <Form>
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
            <PrimaryButton type='submit' buttonName='サインイン' />
          </Form>
          {/* サインアップ画面への遷移 */}
          <AuthSwitchLink
            href='/signUp'
            guideText='アカウントを持っていませんか？'
            linkText='サインアップ'
          />
        </Section>
      </ContentsWrapper>
    </PageWrapper>
  )
}

export default SignInTemplate