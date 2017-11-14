import * as React from 'react';
import './App.css';
import Comparer from './Comparer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the app</h2>
        </div>
        <Comparer />
      </div>
    );
  }
}

export default App;
