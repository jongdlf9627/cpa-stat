import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function Headers(props: any) {
  console.log(props.match);

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">통계</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/graph">그래프</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/* <Row>
          <Col span={30} style={{ paddingTop: "10" }}>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>회계사 1차 시험 </Breadcrumb.Item>
                <Breadcrumb.Item>객관식 통계</Breadcrumb.Item>
              </Breadcrumb>
            </Content>
          </Col>
        </Row> */}
      </Layout>
    </div>
  );
}

export default Headers;
