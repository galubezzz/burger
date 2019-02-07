import React from 'react';
import Row from "./Row/Row"

function Form(props) {
  return (
  <div>
    <span>Current price: {props.price}</span>

      <div>
          {
              props.ingredients.map(
                  ingredient => <Row key={ingredient.name}
                                     name={ingredient.name}
                                     clickLess = {()=>{props.remove(ingredient.name)}}
                                     clickMore = {() => {props.add(ingredient.name)}}/>
          )
          }
      </div>
    <button type="button" className="btn btn-success" onClick={props.order}>Order</button>
  </div>);
}

export default Form;