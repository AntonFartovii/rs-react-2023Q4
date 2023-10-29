import React, { Component } from 'react';

interface ButtonState {
  click: boolean;
}

interface ButtonProps {}

export class ButtonWithError extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      click: false,
    };
  }

  clickHandler = () => this.setState({ click: true });

  componentDidUpdate() {
    if (this.state.click) {
      throw new Error('My Error!');
    }
  }

  render() {
    return (
      <input type="button" onClick={this.clickHandler} className="test-button" value="Test Error" />
    );
  }
}
