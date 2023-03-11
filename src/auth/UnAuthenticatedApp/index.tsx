import { Button, Card } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnAuthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card >
        {isLogin ? <LoginScreen /> : <RegisterScreen />}
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
