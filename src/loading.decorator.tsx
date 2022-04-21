import { Skeleton } from "antd";
import React from "react";

export default (Conmponent: any) => {
  return class LoadableComponent extends React.Component {
    state: { value: string[]; loading: boolean } = {
      value: [],
      loading: true,
    };

    valueChangeHandler = (tags: string[]) => {
      this.setState({ value: tags });
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }

    render(): React.ReactNode {
      return this.state.loading ? <Skeleton.Input active={true} /> : (
        <Conmponent
          value={this.state.value}
          onChange={this.valueChangeHandler}
        />
      );
    }
  };
};
