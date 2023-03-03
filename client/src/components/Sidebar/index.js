import { Layout, Calendar, theme } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
const { Sider } = Layout;

const siderStyle = {
  textAlign: "center",
  height: "100vh",
  width: "100vw",
  color: "#fff",
  backgroundColor: "#fff",
}
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const Sidebar = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '20%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    
      <Sider style={siderStyle}>
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
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Calendar style={{ width: '100%', overflowX: 'hidden'}} fullscreen={false} onPanelChange={onPanelChange} />
      </Sider>
  
  );
};
export default Sidebar;


// const Header = () => {
//     const logout = (event) => {
//       event.preventDefault();
//       Auth.logout();
//     };
//     return (
//       <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//         <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//           <Link className="text-dark" to="/">
//             <h1 className="m-0" style={{ fontSize: '3rem' }}>
//               Tech Friends
//             </h1>
//           </Link>
//           <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//             Meet your new programming pals.
//           </p>
//           <div>
//             {Auth.loggedIn() ? (
//               <>
//                 <Link className="btn btn-lg btn-primary m-2" to="/me">
//                   View My Profile
//                 </Link>
//                 <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link className="btn btn-lg btn-primary m-2" to="/login">
//                   Login
//                 </Link>
//                 <Link className="btn btn-lg btn-light m-2" to="/signup">
//                   Signup
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </header>
//     );
//   };