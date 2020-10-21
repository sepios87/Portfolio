import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            userInput:' ' ,
            items: []
        }
    }

    onChange(event){
        //console.log(event.target.value);
        this.setState({
            userInput : event.target.value
        }, () => console.log(this.state.userInput));
    }

    addUser(event){
        event.preventDefault(); //eviter de reloader la page 
        console.log("ok");
        this.setState({
            items : this.state.items.concat(this.state.userInput),
            userInput : ' ' //effacer la saisie
        }, () => console.log(this.state.items));
    }

    afficherTodo(){
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <Button onClick={this.suppTodo.bind(this)}>Supprimer</Button>
                </div>
            )
        })
    }

    suppTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1); //supp l'element index de la TodoList
        this.setState({
            items : array
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.userInput} onChange={this.onChange.bind(this)}/>
                    <button className="btn btn-primary btn-sm" onClick={this.addUser.bind(this)}>Ajouter</button>
                </form>
                {this.afficherTodo()}
            </div>
        );
    }
}

export default TodoList;