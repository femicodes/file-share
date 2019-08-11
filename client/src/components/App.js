import React, { Component } from 'react'
import Header from './Header';
import Form from './HomeForm';

export class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <div className="app-container">
          <Header />
          <div className="app-content">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
