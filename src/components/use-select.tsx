import { useUser } from "../hooks/useUser";
import { IdSelect } from "./id-select";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  // 获取user负责人数据 
  const { data: users } = useUser();
  // 返回IdSelect下拉组件 传入user数据
  return <IdSelect options={users || []} {...props} />;
};
