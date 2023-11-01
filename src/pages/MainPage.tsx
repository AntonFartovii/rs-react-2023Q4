import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchCharacters } from '../http/charactersApi';
import { IResponse } from '../http/interfaces';
import classes from '../css/layout.module.css';
import { getUrl } from '../utils/utils';

export interface IPageProps {
  showPageName?: (name: string) => void;
}

interface PageState {
  response: IResponse | undefined;
  loading: boolean;
}

export default class MainPage extends Component<IPageProps, PageState> {
  constructor(props: IPageProps) {
    super(props);
    this.state = {
      response: undefined,
      loading: false,
    };
    this.getData = this.getData.bind(this);
  }

  async getData(url: string) {
    this.setState({ loading: true });
    const response = await fetchCharacters(url);
    response && console.log(response);
    response && this.setState({ response });
    this.setState({ loading: false });
  }

  async componentDidMount(): Promise<void> {
    const searchValue = localStorage.getItem('searchValue');
    const url = getUrl(searchValue);
    await this.getData(url);
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <Header getData={this.getData} />
        <Main getData={this.getData} loading={this.state.loading} response={this.state.response} />
      </div>
    );
  }
}
