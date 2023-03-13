import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject } from "../utils";

export const useUrlQuery = <K extends string>(keys: K[]) => {
  // 声明useSearchParams勾子 解析url所有查询参数
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    // 返回的第一个参数
    useMemo(() => {
      // 遍历keys数组，返回一个对象。用每个元素作为对象的键
      return keys.reduce((pre, key) => {
        return { ...pre, [key]: searchParam.get(key) || "" };
      }, {} as { [key in K]: string });
    }, [searchParam]),
    // 返回的第二个参数
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObject({
        ...Object.fromEntries(searchParam),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};
