import React, {Component} from 'react';

// import Person from '../components/Persons/Person/Person';

import Persons from '../components/Persons/Persons'

import Cockpit from "../components/Cockpit/Cockpit"
import classes from './App.module.css';


class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor")
    }
    state = {
        persons: [
            {id: 56654, name: 'Max', age: 28},
            {id: 24654, name: 'Eliseo', age: 43},
            {id: 8558, name: 'Manu', age: 26}
        ],
        otherstate: "some other value",
        showPersons: false
    };
static  getDerivedStateFromProps(props, state){
    console.log("[App.js] gotDerivedStateFromProps", props);
    return state;
}

componentDidMount() {
    console.log("[App.js] componentDidMount")
}

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const personsCopy = [...this.state.persons];
        personsCopy[personIndex] = person;
        this.setState({persons: personsCopy})
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        console.log("[App.js] render");
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }




        return (

            <div className={classes.App}>
                <Cockpit appTitle={this.props.appTitle}
                    showPersons={this.state.showPersons}
                         persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>

        );
         }
}

export default App;

