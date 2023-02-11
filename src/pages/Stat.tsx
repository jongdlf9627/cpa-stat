import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Table, Checkbox, Divider, Card, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import type { ColumnsType, TableProps } from "antd/es/table";
import { AlignType } from "rc-table/lib/interface";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { data_2022, Idata } from "../data/test";
import { data_all } from "../data/data";
import "../App.css";

interface DataType {
  key: React.Key;
  answer: string;
  num: number;
  numTotal: number;
  numPercent: string;
}

const { Header, Content, Footer } = Layout;
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);
const CheckboxGroup = Checkbox.Group;

const plainOptions = ["2017", "2018", "2019", "2020", "2021", "2022"];
const defaultCheckedList = ["2022"];
const plainOptions2 = ["경영학", "경제원론", "상법", "세법개론", "회계학"];
const defaultCheckedList2 = ["경영학"];

function Stat(name: any) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [dataTest, setDataTest] = useState<number[]>([]);
  const [dataTest2, setDataTest2] = useState<number[]>([]);
  const [title, setTitle] = useState<string>("");
  const [tableData, setTableData] = useState<any>();

  const getTestData = (): any => {
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;

    checkedList.forEach((val1: CheckboxValueType, idx1: number) => {
      checkedList2.forEach((val2: CheckboxValueType, idx2: number) => {
        data_all.map((value: Idata, idx: number) => {
          if (value.년도 === Number(val1) && value.과목명 === val2) {
            if (value.정답 === 1) {
              num1 += 1;
            } else if (value.정답 === 2) {
              num2 += 1;
            } else if (value.정답 === 3) {
              num3 += 1;
            } else if (value.정답 === 4) {
              num4 += 1;
            } else if (value.정답 === 0) {
              num0 += 1;
            } else {
              num5 += 1;
            }
          }
        });
      });
    });

    let numTotal = num0 + num1 + num2 + num3 + num4 + num5;
    let rtnPercent = null;
    if (num0 != 0) {
      rtnPercent = [
        ((num1 / numTotal) * 100).toFixed(2),
        ((num2 / numTotal) * 100).toFixed(2),
        ((num3 / numTotal) * 100).toFixed(2),
        ((num4 / numTotal) * 100).toFixed(2),
        ((num5 / numTotal) * 100).toFixed(2),
        ((num0 / numTotal) * 100).toFixed(2),
      ];
    } else {
      rtnPercent = [
        ((num1 / numTotal) * 100).toFixed(2),
        ((num2 / numTotal) * 100).toFixed(2),
        ((num3 / numTotal) * 100).toFixed(2),
        ((num4 / numTotal) * 100).toFixed(2),
        ((num5 / numTotal) * 100).toFixed(2),
      ];
    }
    let rtnNum = [num1, num2, num3, num4, num5, num0];
    let rtnTitle = `선택한 연도와 과목에 따른 통계는???`;
    setTitle(rtnTitle);

    let tableJsonData = [];

    for (let i = 0; i <= 5; i++) {
      let tableJson = {
        key: -1,
        answer: "",
        num: -1,
        numTotal: -1,
        numPercent: "",
      };

      if (i == 5) {
        tableJson.answer = "전체";
      } else {
        tableJson.answer = i + 1 + "번";
      }
      tableJson.key = i;
      tableJson.num = rtnNum[i];
      tableJson.numPercent = rtnPercent[i] + " %";
      tableJson.numTotal = numTotal;
      if (tableJson.answer == "전체" && tableJson.num == 0) {
      } else {
        tableJsonData.push(tableJson);
      }
    }
    setTableData(tableJsonData);
    return [rtnPercent, rtnNum];
  };

  const getData = () => {
    const [percent, number] = getTestData();
    setDataTest(percent);
    setDataTest2(number);
  };

  useEffect(() => {
    getData();
  }, []);

  const options = {
    responsive: true,
    cutoutPercentage: 100,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    layout: {
      padding: 10,
    },
    legend: {
      position: "top",
      fontColor: "black",
      align: "center",
      display: true,
      fullWidth: true,
      labels: {
        font: {
          size: 16,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
        },
      },
      datalabels: {
        display: true,
        color: "black",
        mode: "percentage",
        font: {
          size: 13,
        },
      },
    },
  };

  const plugins = [ChartDataLabels];

  const data = {
    labels: ["1번", "2번", "3번", "4번", "5번", "전체"],
    datasets: [
      {
        label: "Percent of Votes",
        data: dataTest,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // const dataSource = [
  //   {
  //     key: "1",
  //     answer: "1번",
  //     num: 32,
  //     numTotal: 32,
  //     numPercent: "10%",
  //   },
  //   {
  //     key: "2",
  //     answer: "2번",
  //     num: 30,
  //     numTotal: 32,
  //     numPercent: "11%",
  //   },
  //   {
  //     key: "3",
  //     answer: "3번",
  //     num: 31,
  //     numTotal: 32,
  //     numPercent: "10%",
  //   },
  // ];

  const columns: ColumnsType<DataType> = [
    {
      title: "답안 번호",
      dataIndex: "answer",
      key: "answer",
      align: "center" as AlignType,
    },
    {
      title: "답안 갯수",
      dataIndex: "num",
      key: "num",
      sorter: (a: any, b: any) => a.num - b.num,
      align: "center" as AlignType,
    },
    {
      title: "전체 갯수",
      dataIndex: "numTotal",
      key: "numTotal",
      align: "center" as AlignType,
    },
    {
      title: "비율",
      dataIndex: "numPercent",
      key: "numPercent",
      align: "center" as AlignType,
    },
  ];

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [checkedList2, setCheckedList2] = useState<CheckboxValueType[]>(defaultCheckedList2);
  const [indeterminate2, setIndeterminate2] = useState(true);
  const [checkAll2, setCheckAll2] = useState(false);

  const onChange2 = (list: CheckboxValueType[]) => {
    setCheckedList2(list);
    setIndeterminate2(!!list.length && list.length < plainOptions2.length);
    setCheckAll2(list.length === plainOptions2.length);
  };

  const onCheckAllChange2 = (e: CheckboxChangeEvent) => {
    setCheckedList2(e.target.checked ? plainOptions2 : []);
    setIndeterminate2(false);
    setCheckAll2(e.target.checked);
  };

  useEffect(() => {
    getData();
  }, [checkedList, checkedList2]);

  // useEffect(() => {
  //   console.log("11", tableData);
  // }, [tableData]);

  const onChangeTable: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="Stat">
      <Layout className="layout">
        <Row>
          <Col span={30} style={{ paddingTop: "10" }}>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>회계사 1차 시험 </Breadcrumb.Item>
                <Breadcrumb.Item>객관식 통계</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content" style={{ background: colorBgContainer, paddingTop: "10" }}>
                <Space direction="vertical" size={16} style={{ paddingTop: "10" }}>
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
                </Space>

                <div className="chart-container" style={{ width: "70vw", height: "50vh", margin: "20" }}>
                  <Pie data={data} options={options} plugins={plugins} />
                </div>
                <Table dataSource={tableData} columns={columns} onChange={onChangeTable} pagination={false} />
              </div>
            </Content>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Stat;
