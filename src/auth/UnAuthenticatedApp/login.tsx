import { Form } from "antd";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { useAsync } from "../../hooks/useAsync";
import { useAuth } from "../../hooks/useAuth";
import { IAuth } from "../../types/IAuth";

export const LoginScreen = ({onError}: {onError:(onError:Error) => void}) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const handleLogin = (values: IAuth) => {
    run(login(values)).catch(e => onError(e))
  };

  return (
    <Form onFinish={handleLogin}>
      <Form.Item
        label="你的账号"
        name={"username"}
        rules={[
          {
            required: true,
            message: "请输入账号",
          },
        ]}
      >
        <Input placeholder="your username" name="username" id="username" />
      </Form.Item>
      <Form.Item
        label="你的密码"
        name={"password"}
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input.Password
          placeholder="your password"
          name="password"
          id="password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
