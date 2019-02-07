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

const basePrice = 20;

const calc = ingredients => ingredients.reduce((sum, ing) => sum + ing.total, basePrice);
const changeIng = (ingredients, name, factor) => ingredients.map((theIngredient) => {
    if (theIngredient.name === name) {
        if (factor > 0 || theIngredient.count !== 0) {
            theIngredient.count += factor;
        }
    }
    theIngredient.total = theIngredient.count * availableIngredients.find(item => item.name === theIngredient.name).price;
    return theIngredient;
});

class App extends Component {

    state = {
        ingredients: [
            {name: 'salad', count: 0, total: 0, disable: true},
            {name: 'cheese', count: 0, total: 0, disable: true},
            {name: 'meat', count: 0, total: 0, disable: true},
            {name: 'bacon', count: 0, total: 0, disable: true}
        ],
        totalPrice: basePrice

    };

    addIngredient = (name) => {
        this.changeIngredient(name, 1);
    };

    removeIngredient = (name) => {
        this.changeIngredient(name, -1);
    };

    changeIngredient = (name, factor) => {
      const newIngredients = changeIng(this.state.ingredients, name, factor);
      const price = calc(newIngredients);

      this.setState({ ingredients: newIngredients, totalPrice: price });
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
                <Form price={this.state.totalPrice}
                      add={this.addIngredient}
                      remove={this.removeIngredient}
                      ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default App;