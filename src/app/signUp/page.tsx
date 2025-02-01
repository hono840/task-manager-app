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
              labelName="Name"
              // onChange={onChange}
              // value={value}
              type="text"
              placeholder="Your Name"
            />
            <InputArea
              htmlFor="email"
              id="email"
              labelName="Email"
              // onChange={onChange}
              // value={value}
              type="text"
              placeholder="your-email@example.com"
            />
            <InputArea
              htmlFor="password"
              id="password"
              labelName="Password"
              // onChange={onChange}
              // value={value}
              type="password"
              placeholder="••••••••"
            />
            <PrimaryButton type='submit' buttonName='SignUp' />
          </Form>
          {/* サインイン画面への遷移 */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/signIn" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </Section>
      </ContentsWrapper>
    </PageWrapper>
  )
}

export default page