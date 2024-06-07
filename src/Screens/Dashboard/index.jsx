import {
  BankOutlined,
  CaretRightOutlined,
  CheckOutlined,
  CloseOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  FilterOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  InteractionOutlined,
  LoadingOutlined,
  NumberOutlined,
  PauseCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  QuestionOutlined,
  ReloadOutlined,
  RiseOutlined,
  SearchOutlined,
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
  Form,
  Input,
  Pagination,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";
import data from "./data";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
const icon = {
  pending: <LoadingOutlined />,
  approved: <CheckOutlined />,
  rejected: <CloseOutlined />,
  hold: <PauseCircleOutlined />,
};
const Dashboard = () => {
  const [filterDrawer, setFilterDrawer] = useState(false);
  return (
    <React.Fragment>
      {/* <div className="flex justify-end">
        <div className="w-full">
          <Input
            size="large"
            placeholder="Search by MRF ID"
            prefix={<SearchOutlined />}
          />
        </div>
      </div> */}
      <div className="grid grid-cols-12 ">
        <div className="md:col-span-3 col-span-12 max-1200:hidden ">
          <div className="w-full">
            <Input
              size="large"
              placeholder="Search by MRF ID"
              prefix={<SearchOutlined />}
            />
          </div>
          <Card className="mt-2">
            <div className="text-center text-lg">Filters</div>
            <div className="flex justify-between mt-2">
              <div type="text">
                <Typography.Paragraph underline>Clear All</Typography.Paragraph>
              </div>
              <Button
                onClick={() => {
                  setFilterDrawer(true);
                }}
                icon={<FilterOutlined />}
                size="small"
              >
                Select Filters
              </Button>
            </div>
            <div className="mt-2">
              <Space>
                <Typography.Text>Date : </Typography.Text> <Tag>21/03/24</Tag>
                to <Tag className="ml-2">21/04/24</Tag>
              </Space>
            </div>
            <div className="mt-5">
              <Space>
                <Typography.Text>Position : </Typography.Text>{" "}
                <Tag>Academics</Tag>
              </Space>
            </div>
            <div className="mt-5">
              <Space>
                <Typography.Text>Designation : </Typography.Text>{" "}
                <Tag>Area Business Manager</Tag>
              </Space>
            </div>
            <div className="mt-5">
              <Space>
                <Typography.Text>MRF Status : </Typography.Text>{" "}
                <Tag icon={icon["pending"]}>Pending</Tag>
              </Space>
            </div>
            <div className="mt-5">
              <Space>
                <Typography.Text>Branch : </Typography.Text> <Tag>Kolkata</Tag>
              </Space>
            </div>
          </Card>
          <div className="mt-3">
            <Button
              size="large"
              type="primary"
              className="w-full"
              icon={<PlusCircleOutlined />}
            >
              Add MRF
            </Button>
          </div>
        </div>
        <div className="md:col-span-9 col-span-12 max-1200:col-span-12   pl-3 ">
          <div className="w-full grid grid-cols-12 h-[calc(100vh-160px)] overflow-scroll">
            {data?.map((each) => (
              <div
                className="md:col-span-12 col-span-12 px-1 mb-3"
                key={each?.id}
              >
                <Card className="relative shadow-md" bodyStyle={{ padding: 0 }}>
                  <div className="p-4">
                    <div type="secondary" className="absolute top-2 right-3 ">
                      {/* <Badge dot> */}
                      <Typography.Text
                        className="m-0 p-0 text-lg font-medium"
                        type="secondary"
                      >
                        {each?.id}
                      </Typography.Text>
                      {/* </Badge> */}
                    </div>
                    <div className="flex gap-2 items-center">
                      <Typography className="text-lg font-medium capitalize">
                        {each?.position}
                      </Typography>
                      <div className="">
                        <Tooltip title="Designation">
                          <Tag color="purple">{each?.designation_fk_name}</Tag>
                        </Tooltip>
                        <Tooltip title="MRF Type">
                          <Tag color="" className="capitalize">
                            {each?.mrf_type?.split("_")?.join(" ")}
                          </Tag>
                        </Tooltip>
                        {each?.is_active ? (
                          <Tag>
                            <Badge className="mr-2" color="green" dot />
                            Active
                          </Tag>
                        ) : (
                          <Tag>
                            <Badge className="mr-2" color="red" dot />
                            Inactive
                          </Tag>
                        )}
                      </div>
                    </div>
                    <Typography>
                      <Typography.Text type="secondary">
                        Raised by {each?.employee_name}
                      </Typography.Text>
                    </Typography>
                    <Space className="mt-2" align="middle">
                      <Tooltip title="MRF ID">
                        <Typography>
                          <FieldTimeOutlined /> {each?.academic_year}
                        </Typography>
                      </Tooltip>
                      <Divider
                        type="vertical"
                        style={{ borderInlineStart: "2px solid #e7e7f1" }}
                      />
                      <Tooltip title="Annual Budget">
                        <Typography>
                          ₹{" "}
                          {each?.max_budget
                            ? each?.max_budget
                            : each?.salary
                            ? `${each?.salary} LPA`
                            : "Not Disclosed"}
                        </Typography>
                      </Tooltip>
                      <Divider
                        type="vertical"
                        style={{ borderInlineStart: "2px solid #e7e7f1" }}
                      />
                      <Tooltip title="Branch">
                        <Typography>
                          <BankOutlined /> {each?.branch_name}
                        </Typography>
                      </Tooltip>
                    </Space>
                    <Collapse
                      className="mt-2 bg-primary-2"
                      size="small"
                      expandIcon={({ isActive }) => (
                        <CaretRightOutlined rotate={isActive ? 90 : 0} />
                      )}
                      items={[
                        {
                          key: "1",
                          label: "More Details",
                          children: <div className=""></div>,
                        },
                      ]}
                    />
                  </div>
                  <div className="py-3 p-2 flex justify-between items-center border border-r-0 border-l-0 border-b-0">
                    <Typography.Text type="secondary" className="text-sm">
                      Raised on {dayjs(each?.created_at).format("Do MMM, YYYY")}
                    </Typography.Text>
                    <div className="flex gap-2 ">
                      {each?.status == "pending" ? (
                        <>
                          <Tag color="success" icon={<CheckOutlined />}>
                            Approve
                          </Tag>
                          <Tag color="error" icon={<CloseOutlined />}>
                            Reject
                          </Tag>
                          <Tag color="warning" icon={<PauseCircleOutlined />}>
                            Hold
                          </Tag>
                        </>
                      ) : each?.status == "reject" ? (
                        <>
                          <Tooltip title={each?.remark}>
                            <Tag
                              className="flex items-center"
                              color="error"
                              icon={<InfoCircleOutlined />}
                            >
                              MRF Rejected
                            </Tag>
                          </Tooltip>
                          <Button color="blue" icon={<ReloadOutlined />}>
                            Re-Raise
                          </Button>
                        </>
                      ) : each?.status == "approve" ? (
                        <>
                          {!each?.assigned_recruter ? (
                            <Button className="" icon={<PlusCircleOutlined />}>
                              Assign Recruiter
                            </Button>
                          ) : !each?.position_apply_id ? (
                            <Button icon={<PlusCircleOutlined />}>
                              Add Position
                            </Button>
                          ) : (
                            <>
                              <Button icon={<UserAddOutlined />}>
                                Applicants
                              </Button>
                            </>
                          )}
                          <Button icon={<RiseOutlined />}>
                            Track Progress
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button icon={<QuestionCircleOutlined />}>
                            Get Clarity
                          </Button>
                          <Button icon={<UndoOutlined />}>Reset Status</Button>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-2 p-2 bg-white rounded-lg shadow-md">
            <Pagination pageSize={10} current={1} total={100} />
          </div>
        </div>
      </div>
      <Drawer
        open={filterDrawer}
        onClose={() => setFilterDrawer(false)}
        placement="right"
        title={
          <Typography.Text className=" font-medium text-lg">
            MRF Filters
          </Typography.Text>
        }
        footer={
          <div className="flex gap-3 justify-end">
            <Button>Cancel</Button>
            <Button type="primary">Apply</Button>
          </div>
        }
      >
        <Form layout="vertical">
          <Form.Item label="Date Range">
            <DatePicker.RangePicker className="w-full" />
          </Form.Item>
          <Form.Item label="Position Type">
            <Select placeholder="Select Position Type">
              <Option>1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Designation">
            <Select placeholder="Select Designation">
              <Option>1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="MRF Type">
            <Select placeholder="Select MRF Type">
              <Option>1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Branch">
            <Select placeholder="Select Branch">
              <Option>1</Option>
            </Select>
          </Form.Item>
        </Form>
      </Drawer>
    </React.Fragment>
  );
};

export default Dashboard;
