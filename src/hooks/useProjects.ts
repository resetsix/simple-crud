import { useEffect } from "react";
import { Project } from "../types/projects";
import { cleanObject } from "../utils";
import { useAsync } from "./useAsync";
import { useHttp } from "./useHttp";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...rest } = useAsync<Project[]>();
  const reClient = () => client("projects", { data: cleanObject(param || {}) });
  useEffect(() => {
    run(reClient(), reClient);
  }, [param]);
  return rest;
};
