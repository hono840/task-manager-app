import React from 'react'
import SectionTitle from '../components/atoms/SectionTitle'
import Form from '../components/molecules/Form'
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

export default page