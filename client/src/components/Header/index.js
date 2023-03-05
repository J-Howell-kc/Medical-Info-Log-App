import { Layout, Menu, Button } from "antd";
const { Header } = Layout;

const items = [
  {
    label: "Bio/Vitals",

    key: "biovitals",
  },
  {
    label: "Medications",
    key: "medications",
  },
  {
    label: "Allergies",
    key: "allergies",
  },
  {
    label: "Nutrition",
    key: "nutrition",
  },
  {
    label: "Symptoms",
    key: "symptoms",
  },
  {
    label: "Emergency Contacts",
    key: "emergencycontacts",
  },
];

const Selector = (props) => {
  const { currentTab, setTab } = props;

  const onClick = (e) => {
    setTab(e.key);
  };
  const headerStyle = {
    // backgroundColor: '#7dbcea',
  };

  return (
    <Layout className="layout">
      <Header style={headerStyle}>
        <div className="logo" />
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[currentTab]}
          mode="horizontal"
          // defaultSelectedKeys={['1']}
          items={items}
        />
      </Header>
    </Layout>
  );
};
export default Selector;
