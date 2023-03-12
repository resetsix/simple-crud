import { Form } from "antd";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { useAsync } from "../../hooks/useAsync";
import { useAuth } from "../../hooks/useAuth";
import { IAuth } from "../../types/IAuth";

export const RegisterScreen = ({ onError }: { onError: (onError: Error) => void }) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync();


  const handleRegister = (values: IAuth) => {
    run(register(values).catch((e) => onError(e)));
  };
  return (
    <Form onFinish={handleRegister}>
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
        <Input placeholder="your username" name="username" id="username" />
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
          placeholder="your password"
          name="password"
          id="password"
        />
      </Form.Item>
      <Form.Item
        label="请确认"
        name={"cpassword"}
        rules={[
          {
            required: true,
            message: "请确认新密码",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次输入的密码不一致"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="confirm new password"
          name="cpassword"
          id="cpassword"
        />
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
