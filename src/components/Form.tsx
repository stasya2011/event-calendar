import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { rules } from "../utils";
import { useTypeSelector, useActions } from "../hooks";
import { ChangeEvent, useState } from "react";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const FormComponent = () => {
  const { isAuth } = useTypeSelector((state) => state.authReduser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  const navigate = useNavigate();
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onSubmit = async () => {
    login(username, password);

    if (isAuth) {
      navigate("/");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={username} onChange={onChangeUserName} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password value={password} onChange={onChangePassword} />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
