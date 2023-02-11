import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Table, Checkbox, Divider, Card, Space } from "antd";

const { Header, Content, Footer } = Layout;

function Foot() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <Layout className="layout">
        <Footer style={{ textAlign: "center" }}>For SulSul By Jong @2023</Footer>
      </Layout>
    </div>
  );
}

export default Foot;
