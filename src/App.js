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
        ingredients: {
            salad: {count: 1, total: 0},
            cheese: {count: 2, total: 0},
            meat: {count: 2, total: 0},
            bacon: {count: 1, total: 0}
        }
    };

    addIngredient = (name) => {
        this.changeIngredient(name, 1);
    };

    removeIngredient = (name) => {
        this.changeIngredient(name, -1);
    };

    changeIngredient = (name, factor) => {
        // скопировать ингредиент
        let ingredient = {...this.state.ingredients[name]};


        let price = availableIngredients.find(item => item.name === name).price;
        if (factor<0 && ingredient.count==0){
          return;
        }
        else {
          ingredient.count += factor;
        }
        ingredient.total = ingredient.count * price;

        // скопипровать объект "ингредиенты"
        let ingredients = {...this.state.ingredients};

        // поменять ингредиент в копии объекта "ингредиенты"
        ingredients[name] = ingredient;

        // скопировать состояние (state) компонента App.js
        let state = {...this.state};

        // поменять объект "игредиенты" в копии состояния (state)
        state.ingredients = ingredients;

        // задать новый state с перерисовкой компонентов на странице
        this.setState(state);
    };

    calculatePrice = () => {
      let price = 0
      for (let i in this.state.ingredients){
        this.state.ingredients[i].total = this.state.ingredients[i].count * availableIngredients.find(item => item.name === i).price;
        price += this.state.ingredients[i].total;
        }
      console.log('price:', price);
      return price;
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
                <Form price={this.calculatePrice()} add={this.addIngredient} remove={this.removeIngredient}/>
            </div>
        );
    }
}

export default App;