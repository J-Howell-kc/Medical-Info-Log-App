import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import Sidebar from "./components/Sidebar";
import Selector from "./components/Header";
import Biovitals from "./components/Biovitals";
import Symptoms from "./components/Symptoms";
import Emergencycontacts from "./components/Emergencycontacts";
import Allergies from "./components/Allergies";
import Medications from "./components/Medications";
import Nutrition from "./components/Nutrition";
import Signup from "./pages/Signup";
import { setContext } from "@apollo/client/link/context";
import { useState } from "react";
import "./app.css";

import { Layout, Space } from "antd";
const { Header, Footer, Content } = Layout;

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  const [currentTab, setTab] = useState("symptoms");

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

      case "emergencycontacts":
        return <Emergencycontacts />;

         case "signup":
          return <Signup />;

      default:
        return <Biovitals />;
    }
  };
  return (
    <ApolloProvider client={client}>
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
              <Selector setTab={setTab} />
            </Header>
            <Content style={contentStyle}>
              {/* <Biovitals /> */}
              {renderTab()}
            </Content>
            <Footer style={footerStyle}>HAMS by Group 2 2023</Footer>
          </Layout>
        </Layout>
      </Space>
    </ApolloProvider>
  );
};
export default App;

