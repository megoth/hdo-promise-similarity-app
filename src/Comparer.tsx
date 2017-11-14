import * as React from 'react';

class Comparer extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="compareTextA">Løfter A</label>
              <textarea id="compareTextA" className="form-control" rows={10}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="compareTextB">Løfter B</label>
              <textarea id="compareTextB" className="form-control" rows={10}/>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-block">Sammenlign</button>
      </div>
    );
  }
}

export default Comparer;