import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlQuery = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((pre, key) => {
          return { ...pre, [key]: searchParam.get("name") || "" };
        }, {} as { [key in K]: string }),
      [searchParam]
    ),
    setSearchParam,
  ] as const;
};
