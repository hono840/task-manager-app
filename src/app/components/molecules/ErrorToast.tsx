import React from "react";
import CloseButtonIcon from "../atoms/icons/CloseButtonIcon";
import FailedIcon from "../atoms/icons/FailedIcon";

const ErrorToast = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-4 animate-fadeIn">
      {/* アイコン（成功時のチェックマーク） */}
      <FailedIcon />
      {/* メッセージ */}
      <span className="text-sm">
        サインインしました、ホーム画面へ移動します
      </span>

      {/* 閉じるボタン */}
      <button className="text-white hover:text-gray-200">
        <CloseButtonIcon />
      </button>
    </div>
  );
};

export default ErrorToast;
