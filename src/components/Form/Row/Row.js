import React from 'react';

function Row(props){
  return (<div className="row m-1">
    <span className='col-sm-4 p-1'>{props.label()}</span>
      <div className = 'col-sm-4'>
          <button disabled={props.disabled} type="button" className="btn btn-primary" onClick={props.clickLess}>Less</button>
      </div>
      <div className = 'col-sm-4'>
          <button type="button" className="btn btn-primary" onClick={props.clickMore}>More</button>
      </div>
  </div>);
}

export default Row;