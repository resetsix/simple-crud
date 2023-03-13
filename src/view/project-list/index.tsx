import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useUrlQuery } from "../../hooks/useUrlQuery";
import { useUser } from "../../hooks/useUser";
import { useProjects } from "../../hooks/useProjects";

export const ProjectList = () => {
  const [param, setParam] = useUrlQuery(["name", "personId"]);
  const debounceValue = useDebounce(param, 800);

  const { data: users } = useUser(debounceValue);
  const { isLoading, data: lists } = useProjects(debounceValue);

  return (
    <div>
      <SearchPanel param={param} users={users || []} setParam={setParam} />
      <List loading={isLoading} users={users || []} dataSource={lists || []} />
    </div>
  );
};

// ProjectList.whyDidYouRender = true
