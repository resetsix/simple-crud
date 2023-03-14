import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useUser } from "../../hooks/useUser";
import { useProjects } from "../../hooks/useProjects";
import { useToNumberParam } from "../../hooks/useToNumberParam";

export const ProjectList = () => {
  const [param, setParam] = useToNumberParam();

  const { data: users } = useUser();
  const { isLoading, data: lists,retry } = useProjects(useDebounce(param, 800));

  return (
    <div>
      <SearchPanel param={param} users={users || []} setParam={setParam} />
      <List
        refresh={retry}
        loading={isLoading}
        users={users || []}
        dataSource={lists || []}
      />
    </div>
  );
};

// ProjectList.whyDidYouRender = true
