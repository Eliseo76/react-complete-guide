

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
        ],
         otherstate: "some other value",
         showPersons: false
    };
    //Creating a class method in the component we simply use = just like we do for any
    //property in the class. its a property with a function within, next when we call this
    //method we must use "this" to maintain the proper "this" in the component and no cause
    //confusion of the "this" keyword in the component.


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
    };
    //When we make a function in a class based component its better to use an anonymous function in
    //the class with the below method because this method will keep the "this" keyword from getting
    // confused an to what it applies to.
    togglePersonsHandler = ()=> {
    //We are going to toggle all the person items to show on click or remove on click so we need to
    //    toggle something for this to occur.
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

  render() {
        //Something very important is the fact that when the screen is updated
        // all code in this render method is updated so we should when needed
        //take advantage of this and use this fact to update the dynamic data
        //to conditionally render the data.
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: " 1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };
        //Here we are setting a variable to null and then because the state has been updated
        //we are running this if statement to check if the state has changed if it has then
        // the dynamic content is delivered so showpersons is a boolean and it is changed when
        //the button is clicked  firing the togglePersonsHandler to show the content. So it is a great
        //idea to use the rendering to reevaluate if a particular state has been changed to decide if
        // dynamic content needs to be displayed.
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map(person =>{
                        return <Person name = {person.name}
                        age={person.age}/>
                    })}

               </div>
           );
        }
    // An opening and closing tag can be used with the name of the component inside
    //       or a self closing tag. see <Person/> or <Person><Person>
    //DEALING WITH CONTENT THAT IS IN BETWEEN THE OPENING AND CLOSING TAGS.

    //We will be toggeling the

    return (
      <div className="App">
       <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>

    );
    //This is the code that complies when we run the component.
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!') );
  }
}

export default App;


