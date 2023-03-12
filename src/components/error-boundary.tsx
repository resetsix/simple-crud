import React, { Component } from "react";

type FullbackRender = (props: { error: Error | null }) => React.ReactElement;

export default class ErrorBoundary extends Component<
  React.PropsWithChildren<{ fallbackRender: FullbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  // 接受error
  static getDrievedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender(error);
    }
    return children;
  }
}
