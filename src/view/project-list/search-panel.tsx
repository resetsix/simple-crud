import React from "react";
import { Form, Input } from "antd";
import { User } from "../../types/users";
import { Project } from "../../types/projects";
import { UserSelect } from "../../components/use-select";

interface SearchPanelType {
  param: Partial<Pick<Project, "name" | "personId">>;
  users: User[];
  setParam: (param: SearchPanelType["param"]) => void;
}

export const SearchPanel = ({ param, setParam }: SearchPanelType) => {
  return (
    <Form layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          value={param.name}
          onChange={(e) => {
            setParam({ ...param, name: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName="负责人"
          value={param.personId}
          onChange={(value) => {
            setParam({ ...param, personId: value });
          }}
        />
      </Form.Item>
    </Form>
  );
};
