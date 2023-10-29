import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchCharacters } from '../http/charactersApi';
import { IResponse } from '../http/interfaces';

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

  async getData() {
    this.setState({ loading: true });
    const response = await fetchCharacters();
    response && console.log(response);
    response && this.setState({ response });
    this.setState({ loading: false });
  }

  async componentDidMount(): Promise<void> {
    await this.getData();
  }

  render() {
    return (
      <>
        <Header getData={this.getData} />
        <Main loading={this.state.loading} response={this.state.response} />
      </>
    );
  }
}
