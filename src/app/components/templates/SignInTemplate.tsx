import React from 'react'

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* コンテンツを中央に配置 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* 見出し */}
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {/* サインインフォーム */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded p-2 text-gray-900"
              placeholder="your-email@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded p-2 text-gray-900"
              placeholder="••••••••"
            />
          </div>

          {/* 追加オプション例: パスワードを忘れた場合やRemember Me */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 h-4 w-4"
              />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* サインインボタン */}
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>

        {/* アカウント作成へのリンクなど */}
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn