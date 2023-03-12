import { Button } from "antd";
import { useAuth } from "../hooks/useAuth";
import { useTitle } from "../hooks/useTitle";
import { ProjectList } from "../view";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  useTitle('项目列表',false)
  return (
    <div>
      <Button onClick={() => logout()}>退出</Button>
      <ProjectList />
    </div>
  );
};
