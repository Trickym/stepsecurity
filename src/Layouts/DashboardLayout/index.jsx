import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Topbar />
        <Content
          style={{
            margin: "10px 10px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default DashboardLayout;
