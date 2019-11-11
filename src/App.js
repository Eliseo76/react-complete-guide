

import React, { Component } from 'react';
//importing the Person.js file for use in here the root component
//The name of the import is up to us, but it must be have(the name of the
//component) a capital letter. Person is used here.
import Person from './Person/Person';
//The reason for the capital is because all lower case words are considered jsx
//or html code so we dont want to use a lowercase to call a function component
//and cause errors. Upper case tells jsx its a custom component.

//WHY USE A EXTERNAL COMPONENT AND NOT JUST WRITE IT HERE?
//Because it is keeps the code more clean and organized also its
// reusable and configurable. We can repeat the code many times
// in code where ever we want.

import './App.css';

class App extends Component {
    //state is a reserved word that updates the DOM as the data is changed
    // ------This is only available in class extended Components.---------
    // state property is an object {} and within the object we place a new property
    // in the state object i.e. persons: Then we create an array[] for this
    //object property and then within that we create another object{} and within
    // property and values to be accessed. Then we call this in the jsx by using
    // this.state.person[<index>].property. see below. in jsx.
    state = {
        persons:[
            {name: 'Max', age: 28},
            {name:'Eliseo', age: 43},
            {name:'Manu', age: 26}
        ]
    }
    //Creating a class method in the component we simply use = just like we do for any
    //property in the class. its a property with a function within, next when we call this
    //method we must use "this" to maintain the proper "this" in the component and no cause
    //confusion of the "this" keyword in the component.
    switchNameHandler = (newname) => {
        // console.log('Was Clicked')
    //    changing state with an onClick event
    //    DONT DO THIS TO CHANGE THE STATE SEE BELOW.
    //     this.state.persons[0].name = "Eliseo Rodriguez"
        this.setState({persons:[
            {name: newname, age: 28},
            {name:'Eliseo Rodriguez', age: 43},
            {name:'Manu', age: 28}
        ]})
    }

    nameChangedHandler = (event) => {
        this.setState({
            //event.target.value, is the event that is occured whicb in this case is a onChange event
            //in the jsx this eventHandler is being sent to the jsx in Person.js and used but also
            //the updated data is being fed back to the state here at the event.target the input on
            //Person.js Which the value is being added in the input. So we are updating the state
            //with the data entered in the input as it happens. the .value is the data as it changes.
            persons:[
                {name:'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: "Stephanie", age: 27}
            ]
        })
    }


  render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: " 1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };
    // An opening and closing tag can be used with the name of the component inside
    //       or a self closing tag. see <Person/> or <Person><Person>
    //DEALING WITH CONTENT THAT IS IN BETWEEN THE OPENING AND CLOSING TAGS.

    //
    return (
      <div className="App">
       <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
          <button style={style} onClick={() => this.switchNameHandler("Max a Million")}>Switch Name</button>
         <Person
             name = {this.state.persons[0].name}
             age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={ this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, "Maximilian")}
        >My Hobbies: Racing</Person>
         <Person
             name={this.state.persons[2].name}
             age={this.state.persons[2].age}/>
      </div>

    );
    //This is the code that complies when we run the component.
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!') );
  }
}

export default App;


