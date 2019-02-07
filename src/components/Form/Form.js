import React from 'react';
import Row from "./Row/Row"

function Form(props) {
  return (
  <div>
    <span>Current price: {props.price}</span>
    <Row name="salad" clickLess = {()=>{props.remove('salad')}} clickMore = {() => {props.add('salad')}}/>
    <Row name="cheese" clickLess = {()=>{props.remove('cheese')}} clickMore = {() => {props.add('cheese')}}/>
    <Row name="meat" clickLess = {()=>{props.remove('meat')}} clickMore = {() => {props.add('meat')}}/>
    <Row name="bacon" clickLess = {()=>{props.remove('bacon')}} clickMore = {() => {props.add('bacon')}}/>
    <button type="button" className="btn btn-success" onClick={props.order}>Order</button>
  </div>);
}

export default Form;