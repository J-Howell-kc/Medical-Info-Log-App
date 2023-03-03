import { Layout, Menu } from 'antd';
const { Header } = Layout;
const Selector = () => {

  const headerStyle = {
    // backgroundColor: '#7dbcea',
  }


  return (
      <Layout className="layout">
        <Header  style={headerStyle} >
          <div className="logo" />
          <Menu
            theme="light"
             
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                label: 'Bio/Vitals',
                
                key: 'biovitals',
               
              },
              {
                label: 'Medications',
                key: 'medications', 
              },
              {
                label: 'Allergies',
                key: 'allergies',
              },
              {
                label: 'Nutrition',
                key: 'nutrition',
              },
              {
                label: 'Symptoms',
                key: 'symptoms',
              },
              {
                label: 'Emergency Contacts',
                key: 'emergencycontacts',
              },
            ]}
          />
        </Header>
      </Layout>
  );
};
export default Selector;
