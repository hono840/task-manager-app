import { useUser } from "@/app/hooks/useUser";
import React from "react";

const HeaderMenuListSp = () => {
  const user = useUser();
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <a href="#" className="hover:text-gray-400">
          ホーム
        </a>
      </li>
      {!user.isLoggedin && (
        <li>
          <a href="/signIn" className="hover:text-gray-400">
            サインイン
          </a>
        </li>
      )}
      <li>
        <a href="/signUp" className="hover:text-gray-400">
          サインアップ
        </a>
      </li>
      {user.isLoggedin && (
        <li>
          <a href="#" className="hover:text-gray-400">
            サインアウト
          </a>
        </li>
      )}
    </ul>
  );
};

export default HeaderMenuListSp;
