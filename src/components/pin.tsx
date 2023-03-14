import React from "react";
import { Rate } from "antd";

interface PinType extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Pin = ({ checked, onCheckedChange, ...resetProps }:PinType) => {
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      // Boolean(num) === !!num  还是原来的值本身，不过只是变成了布尔值
      onChange={(num) => onCheckedChange?.(!!num)}
      {...resetProps}
    />
  );
};
