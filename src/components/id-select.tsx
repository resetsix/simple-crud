import React from "react";
import { Select } from "antd";

// 属性透传 将Select上的所有属性都透传给子组件
type SelectProps = React.ComponentProps<typeof Select>;

// Omit：剔除掉指定属性 返回剩余属性组成新的属性
interface IdSelectType
  extends Omit<SelectProps, "options" | "value" | "onChange"> {
  // 允许传入四种类型的id
  value: string | number | undefined | null;
  // 当id改变时，只允许传入number或undefined类型
  onChange: (value?: number) => void;
  // 默认选项的名称
  defaultOptionName?: string;
  // 子选项
  options?: { name: string; id: number }[];
}

/* 
  将一个值转换成number类型
    如果传入的值是没有意义的，如undefined、null 
      就直接返回0
    如果传入的值是有意义的（一定是一个数字）
      就直接返回数字
*/
const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

export const IdSelect = (props: IdSelectType) => {
  // 从props参数中解构出value, onChange, defaultOptionName, option以及剩下参数rest
  const { value, onChange, defaultOptionName, options, ...rest } = props;
  return (
    <Select
      // 将传入的value转换为number类型 并赋值给Select组件
      value={toNumber(value)}
      // 监听事件：当option的id发生变化时，转换为number类型
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...rest}
    >
      {/* 默认选项 value值为0 （最终会赋值成undefined） */}
      {defaultOptionName ? (
        <Select.Option key={0} value={0}>
          {defaultOptionName}
        </Select.Option>
      ) : null}
      {/* 子选项 */}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};
