import { Select } from "antd";
import React from "react";
import loadingDecorator from "./loading.decorator";

@loadingDecorator
class SelectTag extends React.Component {
  render(): React.ReactNode {
    return (
      <Select
        mode="tags"
        style={{ width: "100%" }}
        open={false}
        {...this.props}
      ></Select>
    );
  }
}

export default SelectTag;