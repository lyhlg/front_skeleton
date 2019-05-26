import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render(): JSX.Element {
    const fn: Function = (num: number) => num + 3;
    return (
      <h1>
        Hello from {fn(3)} {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
