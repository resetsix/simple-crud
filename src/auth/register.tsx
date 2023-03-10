import { Form } from "antd";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Input from "antd/es/input";

export const RegisterScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card style={{ display: "table" }}>
        <Form>
          <Form.Item
            label="新账号"
            name={"username"}
            rules={[
              {
                required: true,
                message: "请输入新账号",
              },
            ]}
          >
            <Input placeholder="username" name="username" id="username" />
          </Form.Item>
          <Form.Item
            label="新密码"
            name={"password"}
            rules={[
              {
                required: true,
                message: "请输入新密码",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              name="password"
              id="password"
            />
          </Form.Item>
          <Form.Item
            label="确认新密码"
            name={"cpassword"}
            rules={[
              {
                required: true,
                message: "请确认新密码",
              },
            ]}
          >
            <Input.Password
              placeholder="cpassword"
              name="cpassword"
              id="cpassword"
            />
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
