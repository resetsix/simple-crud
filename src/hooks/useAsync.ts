import { useState } from "react";

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
    ...initialState,
    ...defaultInitialState,
  };
  const [state, setState] = useState<State<T>>(config);
  const setData = (data: T) =>
    setState({
      data,
      error: null,
      stat: "success",
    });
  const setError = (error: Error) =>
    setState({
      error,
      data: null,
      stat: "error",
    });
  //用于触发异步函数
  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入Promise类型数据");
    }
    setState({ ...state, stat: "loading" });
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((err) => setError(err));
  };
  return {
    run,
    setData,
    setError,
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    ...state,
  };
};
