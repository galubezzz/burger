import React from 'react';
import Row from "./Row/Row"

function Form(props) {
  return (
  <div>
    <span>Current price: {props.price}</span>
    <Row name="salad" clickLess = {props.remove} clickMore = {props.add('salad')}/>
    <Row name="cheese"/>
    <Row name="meat"/>
    <Row name="bacon"/>
    <button type="button" className="btn btn-success" onClick={props.order}>Order</button>
  </div>);
}

export default Form;