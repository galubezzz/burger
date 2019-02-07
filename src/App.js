import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Form from './components/Form/Form';


// список доступных ингредиентов
const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 30, label: 'Мясо'},
    {name: 'bacon', price: 20, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: [
            {name: 'salad', count: 1, total: 0},
            {name: 'cheese', count: 2, total: 0},
            {name: 'meat', count: 2, total: 0},
            {name: 'bacon', count: 1, total: 0}
        ]
    };

    addIngredient = (name) => {
        this.changeIngredient(name, 1);
    };

    removeIngredient = (name) => {
        this.changeIngredient(name, -1);
    };

    changeIngredient = (name, factor) => {

      const newIngredients = this.state.ingredients.map((theIngredient, index) => {
          console.log('the ingredient #', index, theIngredient);

          if (theIngredient.name === name) {
              if (factor > 0 || theIngredient.count !== 0) {
                  theIngredient.count += factor;
              }
          }

          return theIngredient;
      });

      this.setState({ ingredients: newIngredients });
    };

    calculatePrice = () => {
      //let price = 0
      //for (let i in this.state.ingredients){
        //this.state.ingredients[i].total = this.state.ingredients[i].count * availableIngredients.find(item => item.name === i).price;
        //price += this.state.ingredients[i].total;
       // }
      //console.log('price:', price);
      return 0;
    };

    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                {/* здесь вывести панель с общей ценой */}
                {/* для подсчёта цены можно добавить метод в App.js */}
                {/* и вызвать его в фигурных скобках в JSX, */}
                {/* чтобы получить и вывести результат. */}
                {/* под ценой вывести форму BurgerForm */}
                {/* в форме вывести IngredientControl для каждого ингредиента */}
                <Form price={this.calculatePrice()}
                      add={this.addIngredient}
                      remove={this.removeIngredient}
                      ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default App;