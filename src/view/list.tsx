import React from "react";
import { Project } from "../types/projects";
import { User } from "../types/users";

interface ListType {
  users: User[];
  lists: Project[];
}

export const List = ({ users, lists }: ListType) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((project) => (
          <tr>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
