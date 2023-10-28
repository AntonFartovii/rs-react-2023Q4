import React, { Component, FormEvent } from 'react';
import classes from '../css/layout.module.css';

interface IHeaderProps {
  getData: () => void;
}

interface IHeaderState {
  searchValue: string;
}

export default class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  clickHandler() {
    localStorage.setItem('searchValue', this.state.searchValue);
    this.props.getData();
  }

  searchHandler(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <header className={classes.container}>
        <div className={classes['inner-wrapper'] + ' ' + classes['header-wrapper']}>
          <div className="search-box">
            <div className="search-text">
              <input
                type="text"
                name="searchValue"
                value={this.state.searchValue}
                onInput={this.searchHandler.bind(this)}
              />
            </div>
            <div className="search-button">
              <input type="button" value="Search" onClick={this.clickHandler.bind(this)} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
