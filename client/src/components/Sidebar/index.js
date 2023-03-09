import { Layout, Calendar } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from 'react'
import Signup from "../../pages/Signup";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
const { Sider } = Layout;

const siderStyle = {
  textAlign: "center",
  height: "100vh",
  width: 300,
  color: "#fff",
  backgroundColor: "#fff",
  flex: 'none',
}
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onClick = (value) => {
  value.preventDefault();
  console.log('hello')
  console.log(value.format("YYYY-MM-DD"));
};

const Sidebar = () => {
  // const { token } = theme.useToken();
  // const wrapperStyle = {
    //   width: '20%',
    //   border: `1px solid ${token.colorBorderSecondary}`,
    //   borderRadius: token.borderRadiusLG,
    //   backgroundColor: '#7dbcea',
    // };
    const [loginUser] = useMutation(LOGIN_USER);

    const onFinish = async (values) => {
      const response = await loginUser({
        variables: { ...values },
      });
      auth.login(response.data.login.token);
      console.log(response);
      console.log("Success:", values);
    };



  const [currentForm, setCurrentForm] = useState("login");
  return (
    <>
    {currentForm === "login" && (
      <Sider id='sidercontainer' style={siderStyle} width={300}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>

        </Form.Item>
      </Form>
      <Button type="primary" onClick={() => setCurrentForm ("signup")}>
            Signup
          </Button>
      <Calendar style={{ width: '100%'}} fullscreen={false} onChange={onClick} />
      </Sider>
    )}
    {currentForm === "signup" && (<Signup setCurrentForm={setCurrentForm} />)}
    </>
  );
};
export default Sidebar;


