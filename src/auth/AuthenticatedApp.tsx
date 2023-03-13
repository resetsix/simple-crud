import { Button } from "antd";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTitle } from "../hooks/useTitle";
import { resetRouter } from "../utils";
import { ProjectScreen } from "../view/project";
import { ProjectList } from "../view/project-list";

export const AuthenticatedApp = () => {
  useTitle("项目列表", false);
  return (
    <div>
      <PageHeader />
      {/* BrowserRouter的作用是 将当前路径下的locationpath传递给子组件 */}
      {/* 配置一系列匹配的路由规则和要渲染的组件 */}
      <Routes>
        {/* 配置单个路由规则和渲染的组件 */}
        <Route path="/projects" element={<ProjectList />} />
        {/* 跳转到详情路由 */}
        <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
        {/* 将 路径/ 导航到 /projects */}
        <Route path="*" element={<Navigate to={"/projects"} />} />
      </Routes>
    </div>
  );
};

const PageHeader = () => {
  const { logout } = useAuth();
  // 退出时间
  const handleLogout = () => {
    // 清除User的token
    logout();
    // 重置路由
    resetRouter();
  };
  return (
    <div>
      {/* 回到初始路由 */}
      <Button type="link" onClick={() => resetRouter()}>
        <h1>Logo</h1>
      </Button>
      <Button onClick={() => handleLogout()}>退出</Button>
    </div>
  );
};
