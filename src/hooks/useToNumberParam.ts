import { useMemo } from "react";
import { useUrlQuery } from "./useUrlQuery";

export const useToNumberParam = () => {
  const [param, setParam] = useUrlQuery(["name", "personId"]);
  return [
    useMemo(() => {
      return { ...param, personId: Number(param.personId) || undefined };
    }, [param]),
    setParam,
  ] as const;
};
