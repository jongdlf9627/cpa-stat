import React from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Table, Checkbox, Divider, Card, Space } from "antd";

const { Content } = Layout;

const Graph = (name: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="Stat">
      <Layout className="layout">
        <Row>
          <Col span={30} style={{ paddingTop: "10" }}>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>회계사 1차 시험 </Breadcrumb.Item>
                <Breadcrumb.Item>연도별 트렌드</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content" style={{ background: colorBgContainer, paddingTop: "10" }}>
                {/* <Space direction="vertical" size={16} style={{ paddingTop: "10" }}>
                  <Card title="연도를 골라주세여~" style={{ width: "68vw", margin: "20", fontSize: 16 }} headStyle={{ backgroundColor: "#fafafa", fontSize: 20 }}>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                      연도 전체선택 (2017~2022)
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                  </Card>
                  <Card title="과목을 골라주세여~~" style={{ width: "68vw", margin: "20", fontSize: 16 }} headStyle={{ backgroundColor: "#fafafa", fontSize: 20 }}>
                    <Checkbox indeterminate={indeterminate2} onChange={onCheckAllChange2} checked={checkAll2}>
                      과목 전체선택
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup options={plainOptions2} value={checkedList2} onChange={onChange2} />
                  </Card>
                </Space> */}

                <div className="chart-container" style={{ width: "70vw", height: "50vh", margin: "20" }}>
                  {/* <Pie data={data} options={options} plugins={plugins} /> */}
                  아직 준비중입니다~
                </div>
                {/* <Table dataSource={tableData} columns={columns} onChange={onChangeTable} pagination={false} /> */}
              </div>
            </Content>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Graph;
