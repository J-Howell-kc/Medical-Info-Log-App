import React from "react";
import Sidebar from "./components/Sidebar";
import Selector from "./components/Header";
import Biovitals from "./components/Biovitals";
import Symptoms from "./components/Symptoms";
import Emergencycontacts from "./components/Emergencycontacts";
import Allergies from "./components/Allergies";
import Medications from "./components/Medications";
import Nutrition from "./components/Nutrition";
import { useState } from "react";
import './app.css'
// import '~antd/dist/antd.css';
import { Layout, Space } from "antd";
const { Header, Footer, Content } = Layout;


const headerStyle = {
  textAlign: "center",
  color: "#fff",
  width: "100%",
  paddingInline: 50,
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const App = () => {
  
  const [currentTab, setTab] = useState("biovitals");

  const renderTab = () => {
    switch (currentTab) {
      case "biovitals":
        return <Biovitals />;

      case "medications":
        return <Medications />;

     case "allergies":
       return <Allergies />;

     case "nutrition":
         return <Nutrition />;

       case "symptoms":
        return <Symptoms />;

      //   case "emergencycontacts":
      //   return <EmergencyContacts />;

      default:
        return <Biovitals />;
    }
  };
  return (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    
  >
    <Layout>
      
        <Sidebar />
    
      <Layout>
        <Header style={headerStyle}>
          <Selector />
          </Header>
        <Content style={contentStyle}>
          {/* <Biovitals /> */}
          {renderTab()}
        </Content>
        <Footer style={footerStyle}>HAMS by Group 2 2023</Footer>
      </Layout>
    </Layout>
  </Space>
);
};
export default App;

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route
//                 path="/"
//                 element={<Home />}
//               />
//               <Route
//                 path="/login"
//                 element={<Login />}
//               />
//               <Route
//                 path="/signup"
//                 element={<Signup />}
//               />
//               <Route
//                 path="/me"
//                 element={<Profile />}
//               />
//               <Route
//                 path="/profiles/:profileId"
//                 element={<Profile />}
//               />
//             </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }
