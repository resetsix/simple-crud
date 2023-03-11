import React from "react";
import { Form, Input, Select } from "antd";
import { User } from "../types/users";

interface SearchPanelType {
  param: {
    name: string;
    personId: string;
  };
  users: User[];
  setParam: (param: SearchPanelType["param"]) => void;
}

export const SearchPanel = ({ param, users, setParam }: SearchPanelType) => {
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
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({ ...param, personId: value });
          }}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => (
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
