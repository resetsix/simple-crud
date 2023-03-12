import { useEffect, useRef } from "react";

export const useTitle = (title: string, keepOnUnmount = true) => {
  // useRef方法的current属性的值，在整个生命周期中都不会改变。用于保存原始标题的引用
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    // 将文档title修改为传入的指定title
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 当组件组件卸载时，将文档title修改为原来最初的title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
