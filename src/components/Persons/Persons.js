import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentsUpdate');
    return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
    }

    render() {
        console.log("[Persons.js] renderring....");
        return  this.props.persons.map((person, index) => {
            return ( <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}/>
            );
        });
    }


};

export default Persons;