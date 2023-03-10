import { useCallback, useState } from "react";
import { useMountRef } from "../utils/isUnmount";

interface State<T> {
  stat: "idle" | "loading" | "success" | "error";
  data: T | null;
  error: Error | null;
}

const defaultInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

export const useAsync = <T>(initialState?: State<T>) => {
  const config = {
    ...defaultInitialState,
    ...initialState,
  };
  const [state, setState] = useState<State<T>>(config);

  const [retry, setRetry] = useState(() => () => {});

  const mountRef = useMountRef();

  const setData = useCallback(
    (data: T) =>
      setState({
        data,
        error: null,
        stat: "success",
      }),
    []
  );
  const setError = useCallback(
    (error: Error) =>
      setState({
        error,
        data: null,
        stat: "error",
      }),
    []
  );
  //用于触发异步函数
  const run = useCallback(
    (promise: Promise<T>, retryConfig?: () => Promise<T>) => {
      if (!promise || !promise.then) {
        throw new Error("请传入Promise类型数据");
      }
      // 如果存在（传入）一个promise函数的引用，那么就记住这一次promise请求 方便重发
      if (retryConfig) {
        // 既要请求的结果，也要请求的方法
        setRetry(() => () => run(retryConfig(), retryConfig));
      }
      setState((prevState) => ({ ...prevState, stat: "loading" }));
      return promise
        .then((data) => {
          if (mountRef.current) setData(data);
          return data;
        })
        .catch((err) => {
          setError(err);
        });
    },
    [mountRef, setData, setError]
  );
  return {
    run,
    setData,
    setError,
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    retry,
    ...state,
  };
};
