import { Form } from "antd";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Input from "antd/es/input";
import { login } from "../api/api-provider";
import { IAuth } from "../types/IAuth";

export const LoginScreen = () => {
  const handleLogin = (values: IAuth) => {
    login(values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card style={{ display: "table" }}>
        <Form onFinish={handleLogin}>
          <Form.Item
            label="账号"
            name={"username"}
            rules={[
              {
                required: true,
                message: "请输入账号",
              },
            ]}
          >
            <Input placeholder="username" name="username" id="username" />
          </Form.Item>
          <Form.Item
            label="密码"
            name={"password"}
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              name="password"
              id="password"
            />
          </Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            登录
          </Button>
        </Form>
      </Card>
    </div>
  );
};
