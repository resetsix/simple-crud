import React, { useEffect, useState } from "react";
import { apiUrl } from "../constant/api";
import { useDebounce } from "../hooks/useDebounce";
import { useMount } from "../hooks/useMount";
import { cleanObject } from "../utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import qs from "qs";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);

  const debounceValue = useDebounce(param, 800);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  useEffect(() => {
    fetch(
      `${apiUrl}/projects/?${qs.stringify(cleanObject(debounceValue))}`
    ).then(async (res) => {
      if (res.ok) {
        setLists(await res.json());
      }
    });
  }, [debounceValue]);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  );
};
