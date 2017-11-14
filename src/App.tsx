import * as React from 'react';
import Comparer from './Comparer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h2>Løftesammenligning</h2>
          </div>
        </div>
        <div className="container">
          <Comparer/>
        </div>
      </div>
    );
  }
}

export default App;
