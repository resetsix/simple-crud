import { Button, Card, Typography } from "antd";
import { useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnAuthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<Error | null>();
  useTitle("请登录或注册以继续", false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <h1>{isLogin ? "请登录" : "请注册"}</h1>
        {error ? (
          <Typography.Text type="danger">{error.message}</Typography.Text>
        ) : null}
        {isLogin ? (
          <LoginScreen onError={setError} />
        ) : (
          <RegisterScreen onError={setError} />
        )}
        <Button
          type="link"
          // style={{ marginTop: "10px", width: "100%" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "切换到注册" : "切换到登录"}
        </Button>
      </Card>
    </div>
  );
};
