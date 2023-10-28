import React, { Component } from 'react';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

export default class MainPage extends Component<IPageProps> {
  name: string;

  constructor(props: IPageProps) {
    super(props);
    this.name = 'Главная страница';
    this.showTest = this.showTest.bind(this);
  }

  showTest() {
    this.props.showPageName && this.props.showPageName(this.name);
  }

  componentDidMount(): void {
    this.showTest();
  }

  render() {
    return <div></div>;
  }
}
