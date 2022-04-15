import React, { useState } from "react";
import { Card, TreeSelect, Typography } from "antd";

const { TreeNode, SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];


const TreeComponent = () => {
  const [value, setValue] = useState(undefined);
  const [tag, setTag] = useState<string[]>(['0-0-0'])
  const onChange = () => {
    setValue(value);
  };

 const onTagChange = (value: any) => {
     setTag(value)
  }

  const tProps = {
    treeData,
    value: tag,
    onChange: setTag,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  return (
    <>
      <Typography.Title level={5}>
        Basic Tree select
      </Typography.Title>
      <Card>
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll
          onChange={onChange}
        >
          <TreeNode value="parent 1" title="parent 1">
            <TreeNode value="parent 1-0" title="parent 1-0">
              <TreeNode value="leaf1" title="leaf1" />
              <TreeNode value="leaf2" title="leaf2" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1">
              <TreeNode
                value="leaf3"
                title={<b style={{ color: "#08c" }}>leaf3</b>}
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </Card>
      <Typography.Title level={5}>
        Multiple Tree select
      </Typography.Title>
      <Card>
      <TreeSelect {...tProps} />
      </Card>
    </>
  );
};

export default TreeComponent;
