import { useUser } from '@/app/hooks/useUser';
import React, { useState } from 'react'
import { supabase } from '@/app/utils/supabaseClient';
import { useRouter } from 'next/navigation';
import ConfirmSignOutModal from './ConfirmSignOutModal';
import CompleteSignOutModal from './CompleteSignOutModal';

const HeaderMenuListPc = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  // ログイン状態を取得
  const user = useUser();

  const router = useRouter();

  const toggleModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log('サインアウトエラーが発生しました。');
        return;
      }
      setIsConfirmModalOpen(false);
      setIsSignOutModalOpen(true);
      setTimeout(() => {
        router.push("/signIn");
      }, 3000);
    } catch {
      console.log('サインアウトエラーが発生しました。');
    }
  }

  return (
    <>
      {/* src/app/components/organisms/HeaderMenuSp.tsx */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-400">
            ホーム
          </a>
        </li>
        {!user.isLoggedin &&
          <li>
            <a href="/signIn" className="hover:text-gray-400">
              サインイン
            </a>
          </li>
        }
        <li>
          <a href="/signUp" className="hover:text-gray-400">
            サインアップ
          </a>
        </li>
        {user.isLoggedin &&
          <li>
            <button className="hover:text-gray-400" onClick={toggleModal}>
              サインアウト
            </button>
          </li>
        }
      </ul>
      {isConfirmModalOpen && (
        <ConfirmSignOutModal onCancel={toggleModal} onSignOut={signOut} />
      )}
      {isSignOutModalOpen && (
        <CompleteSignOutModal />
      )}
    </>
  )
}

export default HeaderMenuListPc