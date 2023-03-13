import { useMemo } from "react";
import { useUrlQuery } from "./useUrlQuery";

/* 
  将解析到的url查询参数 （personId） 转换为 number类型
    并做相应处理 :如果是有效数字就直接传入；如果不是有效数字则返回undefined
*/
export const useToNumberParam = () => {
  // 获取 name 和 personId查询参数
  const [param, setParam] = useUrlQuery(["name", "personId"]);
  // 返回一个数组:包括两个参数：转换后的查询参数对象 和 修改查询参数的函数
  return [
    useMemo(() => {
      return { ...param, personId: Number(param.personId) || undefined };
    }, [param]),
    setParam,
  ] as const;
};
