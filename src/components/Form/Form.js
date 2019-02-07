import React from 'react';
import Row from "./Row/Row";
import './Form.css';

function Form(props) {
  return (
  <div>
    <span>Current price: {props.price}</span>

      <div className='form'>
          {
              props.ingredients.map(
                  ingredient => <Row key = {ingredient.name}
                                     label = {() => props.label(ingredient.name)}
                                     clickLess = {() => {props.remove(ingredient.name)}}
                                     clickMore = {() => {props.add(ingredient.name)}}
                                     disabled={ingredient.disabled} />
          )
          }
      </div>
    <button type="button" className="btn btn-success" onClick={props.order}>Order</button>
  </div>);
}

export default Form;