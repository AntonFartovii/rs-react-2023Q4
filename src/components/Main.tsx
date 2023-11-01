import React, { Component, ReactNode } from 'react';
import classes from '../css/layout.module.css';
import { ICharacter, IResponse } from '../http/interfaces';

interface MainProps {
  children?: ReactNode;
  getData: (url: string) => Promise<void>;
  response: IResponse | undefined;
  loading: boolean;
}

export default class Main extends Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <main className="container container-main">
        <div className={classes['inner-wrapper']}>
          <div className="main-wrapper">
            {this.props.loading ? (
              <span className="loader"></span>
            ) : this.props.response?.results ? (
              this.print()
            ) : (
              <div>Ничего не найдено!</div>
            )}
          </div>
        </div>
      </main>
    );
  }

  async pageHandler(type: string) {
    const info = this.props.response?.info;
    if (type === 'prev') {
      if (info?.prev) {
        await this.props.getData(info.prev);
      }
    } else if (type === 'next') {
      if (info?.next) {
        await this.props.getData(info.next);
      }
    }
  }

  private print() {
    return (
      <>
        <div className="pagination">{this.printPagination()}</div>
        <div className="character-list">
          {this.props.response &&
            this.props.response.results?.map((item: ICharacter) => (
              <div className="character-item" key={item.id}>
                {item.name}
                <div className="character-image">
                  <img src={item.image} />
                </div>
                <div>Location: {item.location.name}</div>
                <div>Species: {item.species}</div>
                <div>Status: {item.status}</div>
              </div>
            ))}
        </div>
      </>
    );
  }

  private printPagination() {
    const prev = this.props.response?.info?.prev as string;
    const next = this.props.response?.info?.next as string;
    const prevClass = prev ? 'pagination-item active' : 'pagination-item';
    const nextClass = next ? 'pagination-item active' : 'pagination-item';
    return (
      <>
        <input
          type="button"
          className={prevClass}
          value="Prev"
          onClick={() => this.pageHandler('prev')}
        />
        <input
          type="button"
          className={nextClass}
          value="Next"
          onClick={() => this.pageHandler('next')}
        />
      </>
    );
  }
}
