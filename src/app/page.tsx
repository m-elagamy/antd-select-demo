"use client";
import { Select, Typography, Card, Space, Tag, Divider } from "antd";
import { useState } from "react";

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

  return (
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
              size="large"
              placeholder="Select a placeholder option"
              optionFilterProp="label"
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
                  size="large"
                  placeholder={`Select a placeholder option #${idx + 1}`}
                  optionFilterProp="label"
                  className="w-full"
                  options={options}
                />
              </div>
            ))}
          </Space>
        </Space>
      </Card>
    </div>
  );
}
