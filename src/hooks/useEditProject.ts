import { useEffect } from "react";
import { Project } from "../types/projects";
import { cleanObject } from "../utils";
import { useAsync } from "./useAsync";
import { useHttp } from "./useHttp";

// 编辑
export const useEditProject = () => {
  const { run, ...rest } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        method: "PATCH",
        data: params,
      })
    );
  };
  return { mutate, ...rest };
};

// 新增
export const useAddProject = () => {
  const { run, ...rest } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        method: "POST",
        data: params,
      })
    );
  };
  return { mutate, ...rest };
};
