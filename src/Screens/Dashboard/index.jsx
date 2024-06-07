import {
  ApiOutlined,
  BankOutlined,
  BranchesOutlined,
  CaretRightOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  CloseOutlined,
  DatabaseOutlined,
  DollarOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  FilterOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  InteractionOutlined,
  KeyOutlined,
  LayoutOutlined,
  LoadingOutlined,
  NumberOutlined,
  PauseCircleOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  QuestionOutlined,
  ReloadOutlined,
  RiseOutlined,
  SearchOutlined,
  SecurityScanFilled,
  SecurityScanOutlined,
  SettingOutlined,
  SmileOutlined,
  UndoOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Collapse,
  DatePicker,
  Divider,
  Drawer,
  Empty,
  Form,
  Input,
  Pagination,
  Result,
  Select,
  Space,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Typography,
  message,
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React, { useState } from "react";
import data from "./data";
const colors = {
  Critical: "error",
  High: "volcano",
  Medium: "warning",
  Low: "success",
};
const Dashboard = () => {
  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
      ellipsis: true,
    },
    {
      key: "complianceStatus",
      dataIndex: "complianceStatus",
      title: "Compliance Status",
      width: 200,
      render: (data) => (
        <span>
          <CheckCircleOutlined className="pr-1  text-green-500" /> {data}
        </span>
      ),
      align: "center",
    },
    {
      key: "severity",
      dataIndex: "severity",
      title: "Severity",
      width: 200,
      render: (data) => <Tag color={colors[data]}>{data}</Tag>,
      align: "center",
    },
    {
      key: "failedChecks",
      dataIndex: "failedChecks",
      title: "Failed Checks",
      width: 200,
      align: "center",
    },
  ];
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 ">
        <div className="md:col-span-12 col-span-12 max-1200:col-span-12   ">
          <Card className="relative ">
            <Tabs size="large">
              <TabPane icon={<RiseOutlined />} tab="Overview" key={"1"}>
                <div className="h-[calc(100vh-230px)]">
                  <Typography>
                    <Typography.Text className="text-lg">
                      All Controls
                    </Typography.Text>
                  </Typography>
                  <Table
                    scroll={{ y: "calc(100vh - 400px)" }}
                    className="mt-3"
                    pagination={{ pageSize: 6 }}
                    dataSource={data}
                    columns={columns}
                    size="large"
                  />
                </div>
              </TabPane>
              <TabPane
                icon={<SecurityScanOutlined />}
                tab="Runtime Security"
                key={"2"}
              >
                <div className="h-[calc(100vh-230px)]">
                  <div className="max-768:hidden ">
                    <Tabs tabPosition="left">
                      <TabPane
                        icon={<PlayCircleOutlined />}
                        tab="Latest Workflow Runs"
                        key={"11"}
                      >
                        <div className="flex justify-end w-full">
                          <div className="grid grid-cols-12 py-2 mb-3 w-full">
                            <div className="md:col-span-4 col-span-12">
                              <Select
                                showSearch
                                filterOption={(input, options) => {
                                  return (options?.children ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase());
                                }}
                                className="w-full "
                                suffixIcon={<SearchOutlined />}
                                placeholder="Filter by repository"
                                size="large"
                              >
                                {[1, 2, 34, 5, 6, 6, 6]?.map((each, ind) => (
                                  <Select.Option key={each + ind}>
                                    {`Repo ${ind}`}
                                  </Select.Option>
                                ))}
                              </Select>
                            </div>
                          </div>
                        </div>
                        <Table
                          dataSource={[]}
                          scroll={{ x: "max-content" }}
                          columns={[
                            {
                              title:
                                "Latest workflow runs across the organization",
                              dataIndex: "jdn",
                              key: "jhgf",
                              width: "50%",
                            },
                            {
                              title: "Runtime Security Summary",
                              dataIndex: "jdnn",
                              key: "jhgf",
                              width: "50%",
                            },
                          ]}
                        />
                      </TabPane>
                      <TabPane
                        icon={<BranchesOutlined />}
                        tab="All Observed Endpoints"
                        key={"12"}
                      >
                        <Empty description="No Data" />
                      </TabPane>
                      <TabPane
                        icon={<SecurityScanOutlined />}
                        tab="Policies"
                        key={"13"}
                      >
                        <Empty description="No Data" />
                      </TabPane>
                      <TabPane
                        icon={<EyeOutlined />}
                        tab="Runtime Detections"
                        key={"14"}
                      >
                        <Empty description="No Data" />
                      </TabPane>
                      <TabPane
                        icon={<DatabaseOutlined />}
                        tab="Cluster Status"
                        key={"15"}
                      >
                        <Empty description="No Data" />
                      </TabPane>
                    </Tabs>
                  </div>
                  <div className="min-769:hidden">
                    <Empty description="Please open in desktop" />
                  </div>
                </div>
              </TabPane>
              <TabPane
                icon={<ApiOutlined />}
                tab="Orchestra Security"
                key={"3"}
              >
                <div className="h-[calc(100vh-230px)] grid place-content-center">
                  <Empty />
                </div>
              </TabPane>
              <TabPane icon={<KeyOutlined />} tab="Action Secrets" key={"4"}>
                <div className="h-[calc(100vh-230px)]">
                  <Card title="Organization Secrets">
                    <Table
                      size="small"
                      dataSource={[]}
                      columns={[
                        {
                          title: "Secret Name",
                          dataIndex: "jdn",
                          key: "jhgf",
                          width: "50%",
                          align: "center",
                        },
                        {
                          title: "Days since last rotated",
                          dataIndex: "jdnn",
                          key: "jhgf",
                          width: "50%",
                          align: "center",
                        },
                      ]}
                    />
                  </Card>
                  <Card title="Repository Secrets" className="mt-3">
                    <Table
                      dataSource={[]}
                      size="small"
                      columns={[
                        {
                          title: "Repository",
                          dataIndex: "jdn",
                          key: "jhgf",
                          width: "33%",
                          align: "center",
                        },
                        {
                          title: "Secret Name",
                          dataIndex: "jdnn",
                          key: "jhgf",
                          width: "33%",
                          align: "center",
                        },
                        {
                          title: "Days since last rotated",
                          dataIndex: "jdnn",
                          key: "jhgf",
                          width: "33%",
                          align: "center",
                        },
                      ]}
                    />
                  </Card>
                </div>
              </TabPane>
              <TabPane icon={<PlayCircleOutlined />} tab="Actions" key={"5"}>
                <div className="h-[calc(100vh-230px)]">
                  <div className="min-769:hidden">
                    <Empty description="Please open in desktop" />
                  </div>
                  <Tabs className="max-768:hidden" tabPosition="left">
                    <TabPane
                      icon={<PlayCircleOutlined />}
                      tab="Github Actions In Use"
                      key={"13"}
                    >
                      <Empty description="No Data" />
                    </TabPane>
                    <TabPane
                      icon={<LayoutOutlined />}
                      tab="Github Actions Security Store"
                      key={"14"}
                    >
                      <Empty description="No Data" />
                    </TabPane>
                    <TabPane
                      icon={<SecurityScanOutlined />}
                      tab="Step Security Maintained Actions"
                      key={"15"}
                    >
                      <Empty description="No Data" />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
              <TabPane icon={<SettingOutlined />} tab="Settings" key={"6"}>
                <div className="h-[calc(100vh-230px)]">
                  <Result
                    icon={<SmileOutlined style={{ color: "#928AFE" }} />}
                    title="Thankyou"
                    subTitle="Let's build it together!"
                  />
                </div>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
