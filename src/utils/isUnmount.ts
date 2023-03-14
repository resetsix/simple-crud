import { useEffect, useRef } from "react";

// 判断组件的挂载状态。如果是未挂载或已卸载则返回false，反之返回true
export const useMountRef = () => {
  const unmountRef = useRef(false);
  useEffect(() => {
    unmountRef.current = true;
    return () => {
      unmountRef.current = false;
    };
  });
  return unmountRef;
};
