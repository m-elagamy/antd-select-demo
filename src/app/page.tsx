"use client";
import { Select, Typography, Card, Space, Tag, Divider } from "antd";
import { useState } from "react";
import CustomSelect from "@/select";
import CustomTable from "@/custom-table";

export default function Home() {
  const [value, setValue] = useState<string | undefined>(undefined);

  const options = [
    { label: "Alpine", value: "alpine" },
    { label: "Boreal", value: "boreal" },
    { label: "Canyon", value: "canyon" },
    { label: "Delta", value: "delta" },
    { label: "Evergreen", value: "evergreen" },
    { label: "Fjord", value: "fjord" },
    { label: "Glacier", value: "glacier" },
    { label: "Harbor", value: "harbor" },
    { label: "Ivory", value: "ivory" },
    { label: "Juniper", value: "juniper" },
    { label: "Kestrel", value: "kestrel" },
    { label: "Lagoon", value: "lagoon" },
    { label: "Meadow", value: "meadow" },
    { label: "Nimbus", value: "nimbus" },
    { label: "Oasis", value: "oasis" },
    { label: "Pine", value: "pine" },
    { label: "Quartz", value: "quartz" },
    { label: "Ridge", value: "ridge" },
    { label: "Sable", value: "sable" },
  ];

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Address", dataIndex: "address" },
    { title: "Occupation", dataIndex: "occupation" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Country", dataIndex: "country" },
    { title: "Status", dataIndex: "status" },
  ];

  const data = [
    {
      name: "John Doe",
      age: 25,
      address: "123 Main St",
      occupation: "Engineer",
      email: "john.doe@example.com",
      phone: "555-1234",
      country: "USA",
      status: "Active",
    },
    {
      name: "Jane Smith",
      age: 32,
      address: "456 Oak Ave",
      occupation: "Designer",
      email: "jane.smith@example.com",
      phone: "555-5678",
      country: "Canada",
      status: "Inactive",
    },
    {
      name: "Carlos Ruiz",
      age: 29,
      address: "789 Pine Rd",
      occupation: "Developer",
      email: "carlos.ruiz@example.com",
      phone: "555-8765",
      country: "Mexico",
      status: "Active",
    },
    {
      name: "Akira Tanaka",
      age: 41,
      address: "321 Sakura St",
      occupation: "Manager",
      email: "akira.tanaka@example.com",
      phone: "555-4321",
      country: "Japan",
      status: "Pending",
    },
    {
      name: "Fatima Al-Farsi",
      age: 36,
      address: "654 Palm Blvd",
      occupation: "Analyst",
      email: "fatima.alfarsi@example.com",
      phone: "555-2468",
      country: "UAE",
      status: "Active",
    },
    {
      name: "Liam O'Connor",
      age: 28,
      address: "987 Clover Ln",
      occupation: "Consultant",
      email: "liam.oconnor@example.com",
      phone: "555-1357",
      country: "Ireland",
      status: "Inactive",
    },
    {
      name: "Sofia Rossi",
      age: 34,
      address: "159 Via Roma",
      occupation: "Architect",
      email: "sofia.rossi@example.com",
      phone: "555-9753",
      country: "Italy",
      status: "Active",
    },
    {
      name: "Chen Wei",
      age: 30,
      address: "753 Lotus Rd",
      occupation: "Scientist",
      email: "chen.wei@example.com",
      phone: "555-8642",
      country: "China",
      status: "Active",
    },
    {
      name: "Amelia Brown",
      age: 27,
      address: "852 Maple Dr",
      occupation: "Teacher",
      email: "amelia.brown@example.com",
      phone: "555-3698",
      country: "UK",
      status: "Pending",
    },
    {
      name: "Raj Patel",
      age: 38,
      address: "246 Banyan St",
      occupation: "Doctor",
      email: "raj.patel@example.com",
      phone: "555-1472",
      country: "India",
      status: "Active",
    },
  ];

  const metadata = {
    total: 100,
  };

  const limit = 10;
  const page = 1;

  const loading = false;

  return (
    <>
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <Card
          className="w-full max-w-xl shadow-xl"
          styles={{ body: { padding: 16 }, header: { padding: 16 } }}
          title={
            <Space direction="vertical" size={2}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Ant Design Select Demo
              </Typography.Title>
              <Typography.Text type="secondary">
                Clean, modern UI with a searchable dropdown
              </Typography.Text>
            </Space>
          }
        >
          <Space direction="vertical" size={16} className="w-full">
            <div className="grid gap-3">
              <Typography.Text strong>Choose an option</Typography.Text>
              <Select
                allowClear
                showSearch
                placeholder="Select a placeholder option"
                optionFilterProp="label"
                size="large"
                className="w-full"
                options={options}
                value={value}
                onChange={(v) => setValue(v)}
                virtual={false}
              />
            </div>
            <div className="flex items-center gap-2">
              <Typography.Text type="secondary">You selected:</Typography.Text>
              {value ? (
                <Tag color="blue" className="ml-2">
                  {options.find((o) => o.value === value)?.label}
                </Tag>
              ) : (
                <Tag className="ml-2">None</Tag>
              )}
            </div>
            <Divider style={{ margin: "8px 0" }} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              More placeholder sections
            </Typography.Title>
            <Typography.Text type="secondary">
              Additional Select components to make the page scrollable.
            </Typography.Text>
            <Space direction="vertical" size={16} className="w-full">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="grid gap-3">
                  <Typography.Text strong>
                    Placeholder Section {idx + 1}
                  </Typography.Text>
                  <Select
                    allowClear
                    showSearch
                    placeholder={`Select a placeholder option #${idx + 1}`}
                    optionFilterProp="label"
                    size="large"
                    className="w-full"
                    options={options}
                    virtual={false}
                  />
                </div>
              ))}
            </Space>
          </Space>
        </Card>
      </div>

      <Divider />

      <h2>Custom Select</h2>
      <CustomSelect
        vertical
        label="Choose an option"
        name="option"
        options={options}
        loading={false}
      />

      <CustomTable
        columns={columns}
        data={data}
        loading={loading}
        metadata={metadata}
        limit={limit}
        page={page}
        handleOnChangeLimit={() => {}}
        handleOnChangePage={() => {}}
        scrollX={700}
      />

      <Divider />
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <Card
          className="w-full max-w-xl shadow-xl"
          styles={{ body: { padding: 16 }, header: { padding: 16 } }}
          title={
            <Space direction="vertical" size={2}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Ant Design Select Demo
              </Typography.Title>
              <Typography.Text type="secondary">
                Clean, modern UI with a searchable dropdown
              </Typography.Text>
            </Space>
          }
        >
          <Space direction="vertical" size={16} className="w-full">
            <div className="grid gap-3">
              <Typography.Text strong>Choose an option</Typography.Text>
              <Select
                allowClear
                showSearch
                placeholder="Select a placeholder option"
                optionFilterProp="label"
                size="large"
                className="w-full"
                options={options}
                value={value}
                onChange={(v) => setValue(v)}
                virtual={false}
              />
            </div>
            <div className="flex items-center gap-2">
              <Typography.Text type="secondary">You selected:</Typography.Text>
              {value ? (
                <Tag color="blue" className="ml-2">
                  {options.find((o) => o.value === value)?.label}
                </Tag>
              ) : (
                <Tag className="ml-2">None</Tag>
              )}
            </div>
            <Divider style={{ margin: "8px 0" }} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              More placeholder sections
            </Typography.Title>
            <Typography.Text type="secondary">
              Additional Select components to make the page scrollable.
            </Typography.Text>
            <Space direction="vertical" size={16} className="w-full">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="grid gap-3">
                  <Typography.Text strong>
                    Placeholder Section {idx + 1}
                  </Typography.Text>
                  <Select
                    allowClear
                    showSearch
                    placeholder={`Select a placeholder option #${idx + 1}`}
                    optionFilterProp="label"
                    size="large"
                    className="w-full"
                    options={options}
                    virtual={false}
                  />
                </div>
              ))}
            </Space>
          </Space>
        </Card>
      </div>
    </>
  );
}
