import React, { FC } from "react";
import Label from "./Label";
import InputElement from "../atoms/InputElement";

type Props = {
  id?: string;
  htmlFor?: string;
  labelName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | undefined;
  type: string;
  placeholder?: string;
};

const InputArea: FC<Props> = ({
  id,
  htmlFor,
  labelName,
  onChange,
  value,
  type,
  placeholder,
}) => {
  return (
    <div>
      <Label htmlFor={htmlFor} labelName={labelName} />
      <InputElement
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputArea;
