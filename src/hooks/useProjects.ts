import { useCallback, useEffect } from "react";
import { Project } from "../types/projects";
import { cleanObject } from "../utils";
import { useAsync } from "./useAsync";
import { useHttp } from "./useHttp";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...rest } = useAsync<Project[]>();
  const reClient = useCallback(
    () => client("projects", { data: cleanObject(param || {}) }),
    [client, param]
  );
  useEffect(() => {
    run(reClient(), reClient);
  }, [reClient, run, param]);
  return rest;
};
