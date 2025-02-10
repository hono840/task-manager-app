import React, { FC } from "react";
import HeaderMenuListSp from "../molecules/HeaderMenuListSp";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const HeaderMenuSp: FC<Props> = ({ isOpen, onClick }) => {
  return (
    // サイドメニュー（オフキャンバス）
    <div
      className={`
          fixed top-0 right-0 w-64 h-full bg-gray-800 shadow-lg
          transform ${isOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300
          flex flex-col
          z-50
        `}
    >
      {/* バツボタン */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClick}
          className="text-white focus:outline-none hover:text-gray-400"
        >
          {/* バツアイコン */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* メニュー項目例 */}
      <nav className="px-4 flex-grow">
        <HeaderMenuListSp />
      </nav>
    </div>
  );
};

export default HeaderMenuSp;
