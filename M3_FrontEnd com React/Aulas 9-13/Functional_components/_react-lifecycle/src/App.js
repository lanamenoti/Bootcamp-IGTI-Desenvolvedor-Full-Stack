import React, { Component } from 'react';
import Toggle from './components/Toggle/Toggle';
import Users from './components/Users/Users';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    //Executado somente uma vez no componente
    //Bom para botar requisicoes http

    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate de App.js');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount de App.js');
  }

  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };

  render() {
    const { showUsers, users } = this.state;

    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle enabled={showUsers} onToggle={this.handleShowUsers} />
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
