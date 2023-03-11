import React from "react";
import { Table, TableProps } from "antd";
import { Project } from "../types/projects";
import { User } from "../types/users";

interface ListType extends TableProps<Project> {
  users: User[];
  lists: Project[];
}

export const List = ({ users, lists }: ListType) => {
  return (
    <Table
      columns={[
        {
          title: "项目",
          dataIndex: "name",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={lists}
    />
  );
};
