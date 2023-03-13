import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject } from "../utils";

export const useUrlQuery = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam);
  return [
    // 返回的第一个参数
    useMemo(() => {
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
