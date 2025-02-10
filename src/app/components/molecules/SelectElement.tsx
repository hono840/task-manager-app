import React, { FC } from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const SelectElement: FC<Props> = ({ onChange, value }) => {
  const options = [
    { value: "low", label: "低" },
    { value: "medium", label: "中" },
    { value: "high", label: "高" },
  ];
  return (
    <select
      className="w-full rounded p-2 text-gray-900"
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectElement;
