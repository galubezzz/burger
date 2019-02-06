import React from 'react';

function Row(props){
  return (<div className="Row">
    <span>{props.name}</span>
    <button type="button" className="btn btn-primary" onClick={props.clickLess}>Less</button>
    <button type="button" className="btn btn-primary" onClick={props.clickMore}>More</button>
  </div>);
}

export default Row;