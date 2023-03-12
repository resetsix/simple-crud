import { useEffect, useState } from "react";

export const useTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, []);
};
