import { Button } from "antd";
import { useAuth } from "../hooks/useAuth";
import { ProjectList } from "../view";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={() => logout()}>退出</Button>
      <ProjectList />
    </div>
  );
};
