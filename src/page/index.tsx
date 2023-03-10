import React, { useEffect, useState } from "react";
import { apiUrl } from "../constant/api";
import { List } from "./list";
import { SearchPanel } from "./search-panel";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async (res) => {
      if (res.ok) {
        setLists(await res.json());
      }
    });
  }, [param]);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  );
};
