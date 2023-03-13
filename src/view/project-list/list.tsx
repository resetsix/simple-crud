import React from "react";
import { Table, TableProps } from "antd";
import { Project } from "../../types/projects";
import { User } from "../../types/users";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

interface ListType extends TableProps<Project> {
  users: User[];
}

export const List = ({ users, ...rest }: ListType) => {
  return (
    <Table
      rowKey={"id"}
      columns={[
        {
          title: "名称",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
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
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : null}
              </span>
            );
          },
        },
      ]}
      {...rest}
    />
  );
};