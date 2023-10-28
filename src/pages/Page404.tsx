import React from 'react';
import { IPageProps } from './MainPage';

export default class Page404 extends React.Component<IPageProps> {
  name: string;

  constructor(props: IPageProps) {
    super(props);
    this.name = 'Страница 404';
    this.showTest = this.showTest.bind(this);
  }

  showTest() {
    this.props.showPageName && this.props.showPageName(this.name);
  }

  render() {
    return (
      <div className="container-404">
        <h1>Error 404!</h1>
        <a href="http://localhost:5173/">На главную</a>
      </div>
    );
  }
}
