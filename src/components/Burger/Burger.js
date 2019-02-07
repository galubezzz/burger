import React from 'react';
import Bacon from './Bacon/Bacon';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Salad from './Salad/Salad';


function Burger(props) {
     let ingredients = [];

  for (let i = 0; i < props.ingredients[0].count; i++) ingredients.push(<Salad key={'salad' + i}/>);
  for (let i = 0; i < props.ingredients[1].count; i++) ingredients.push(<Cheese key={'cheese' + i}/>);
  for (let i = 0; i < props.ingredients[2].count; i++) ingredients.push(<Meat key={'meat' + i}/>);
  for (let i = 0; i < props.ingredients[3].count; i++) ingredients.push(<Bacon key={'bacon' + i}/>);


    return <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"/>
            <div className="Seeds2"/>
        </div>
        {ingredients}
        <div className="BreadBottom"/>
    </div>
}

export default Burger;