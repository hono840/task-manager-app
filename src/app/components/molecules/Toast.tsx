import React, { FC } from "react";
import SuccessIcon from "../atoms/icons/SuccessIcon";
import CloseButtonIcon from "../atoms/icons/CloseButtonIcon";
import FailedIcon from "../atoms/icons/FailedIcon";

type Props = {
  success?: boolean;
  onClick: () => void;
};

const Toast: FC<Props> = ({ success, onClick }) => {
  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-4 animate-fadeIn ${success ? "bg-green-500" : "bg-red-500"
        }`}
    >
      {success ? <SuccessIcon /> : <FailedIcon />}
      {/* メッセージ */}
      <span className="text-sm">
        {success
          ? "サインインしました、ホーム画面へ移動します"
          : "サインインに失敗しました。再度お試しください"}
      </span>

      {/* 閉じるボタン */}
      <button className="text-white hover:text-gray-200" onClick={onClick}>
        <CloseButtonIcon />
      </button>
    </div>
  );
};

export default Toast;
