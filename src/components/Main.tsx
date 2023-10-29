import React, { Component, ReactNode } from 'react';
import classes from '../css/layout.module.css';
import { ICharacter, IResponse } from '../http/interfaces';

interface MainProps {
  children?: ReactNode;
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

  private print() {
    return (
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
    );
  }
}
