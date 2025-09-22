import { Col, Form, Select as AntdSelect } from "antd";
import { useState } from "react";

export default function CustomSelect({
  vertical,
  label,
  name,
  options,
  loading,
}: {
  vertical: boolean;
  label: string;
  name: string;
  options: { label: string; value: string }[];
  loading: boolean;
}) {
  const [enabled, setEnabled] = useState(false);
  const [search, setSearch] = useState("");

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Col flex={vertical ? "100%" : "20%"}>
      <Form.Item className="wide bold-label" label={label} name={name}>
        <AntdSelect
          onPopupScroll={() => {}}
          disabled={false}
          autoClearSearchValue={false}
          onClick={() => setEnabled(true)}
          filterOption={false}
          size="large"
          placeholder="Select an option"
          showSearch
          mode="multiple"
          allowClear
          onBlur={() => {}}
          options={options}
          onSelect={() => {}}
          onClear={() => {}}
          onDeselect={() => {}}
          onSearch={onSearch}
          value={search}
          loading={loading && enabled}
        />
      </Form.Item>
    </Col>
  );
}
