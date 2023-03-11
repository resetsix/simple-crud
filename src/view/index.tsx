import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useMount } from "../hooks/useMount";
import { cleanObject } from "../utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useHttp } from "../hooks/useHttp";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);

  const debounceValue = useDebounce(param, 800);

  const client = useHttp();

  useMount(() => {
    client("users").then(setUsers);
  });

  useEffect(() => {
    client("projects", { data: cleanObject(debounceValue) }).then(setLists);
  }, [debounceValue]);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  );
};
