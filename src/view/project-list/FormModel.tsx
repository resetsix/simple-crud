import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { useAddProject } from "../../hooks/useEditProject";
import { Project } from "../../types/projects";
import { User } from "../../types/users";

interface Values {
  title: string;
  description: string;
  modifier: string;
}
interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  users: User[];
}

interface SearchPanelType {
  param: Partial<Pick<Project, "name" | "personId">>;
  users: User[];
  setParam: (param: SearchPanelType["param"]) => void;
  refresh?: () => void;
}

// 打开按钮和弹出的表单
export const FormModel = ({ ...rest }: SearchPanelType) => {
  const [open, setOpen] = useState(false);

  const { mutate } = useAddProject();

  // 提交事件
  const onCreate = (values: any) => {
    // const projects = JSON.parse(localStorage.getItem("__jira__project") || "");
    // const newProject = { ...values, created: Date.now() };
    // projects.push(newProject);
    // localStorage.setItem("__jira__project", JSON.stringify(projects));

    // 获取当前时间的unix时间戳
    const date = { ...values, created: Date.now() };
    mutate(date).then(rest.refresh);
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        创建项目
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        {...rest}
      />
    </div>
  );
};
// 详细表单
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
  ...rest
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="创建项目"
      okText="确认"
      cancelText="取消"
      destroyOnClose
      onCancel={onCancel}
      onOk={() => {
        form
          // validateFields 表单的验证规则
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        preserve={false}
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="name"
          label="名称"
          rules={[
            {
              required: true,
              message: "请输入名称!",
            },
          ]}
        >
          <Input placeholder="请输入项目名称" />
        </Form.Item>
        <Form.Item
          name="organization"
          label="部门"
          rules={[
            {
              required: true,
              message: "请输入部门",
            },
          ]}
        >
          <Input type="textarea" placeholder="请输入部门名" />
        </Form.Item>
        <Form.Item name="personId" label="负责人">
          <Select value="">
            <Select.Option value="" disable>
              负责人
            </Select.Option>
            {rest.users.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
