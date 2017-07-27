import * as React from 'react';

export interface IFooProps { }

/**
 * primitive
 */
export class Foo extends React.Component<IFooProps, {}> {
  public render() {
    return (
      <div>Foo</div>
    );
  }
}
