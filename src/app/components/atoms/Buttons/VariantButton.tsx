import React, { FC } from "react";

type Props = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  status: "alert" | "info" | "cancel";
  children: string;
};

const VariantButton: FC<Props> = ({ type, onClick, status, children }) => {
  // 基本スタイル
  const baseStyle = "text-white py-1 px-3 rounded text-sm";
  // ステータスごとのスタイル
  const statusStyles = {
    alert: "bg-red-600 hover:bg-red-500",
    info: "bg-green-600 hover:bg-green-500",
    cancel: "bg-gray-600 hover:bg-gray-500",
  };
  return (
    <button
      type={type}
      className={`${baseStyle} ${statusStyles[status]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default VariantButton;
