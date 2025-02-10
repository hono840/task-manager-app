import React, { FC } from "react";
import Label from "./Label";
import SelectElement from "./SelectElement";

type Props = {
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const SelectArea: FC<Props> = ({ labelName, onChange, value }) => {
  return (
    <div>
      <Label labelName={labelName} />
      <SelectElement onChange={onChange} value={value} />
    </div>
  );
};

export default SelectArea;
