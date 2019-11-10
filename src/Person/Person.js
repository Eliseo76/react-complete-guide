//ES6 is recommended for React so we will use it in the code.
// usually when making a function component we use the lowercase when naming it
// const because we dont plan on changing it, We also will be using the => function
//because it handles the "this" keyword better.
// we need to import react from the react package.  Because we are not creating a component class
//but only creating a  component function we dont need to import the {component} here.
import React from 'react';
//When we are using attributes from the jsx we use the arg conventionally called props it give access
//to the component these things are like name="Eliseo" in the jsx
import "./Person.css";
//importing the css for use in the jsx
const person = (props) =>{
//    ADDING DYNAMIC CONTENT TO THE JSX --------------------------------------
//    to inject code into the jsx we need to add {} and in it add the code.
//    without the {} it will render as text. NOTE: We cannot enter big code only one line
//     expressions short code not like a class. Or we can call a function.
//    Attributes in the jsx-------------
//    We use {props.attributeName} where we want the dynamic code. If this were a class-based
//    component it would be this.props
// WAS:   return <p>I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
//    To use the age attribute we use props.age
     //DEALING WITH CONTENT THAT IS IN BETWEEN THE OPENING AND CLOSING TAGS.
//We need to add () to the code to make it span over a few lines
//    Then we need to add a <div> tag to place the <p> tag in and the call for the content needed.
//Here we are using a reserved word .children , children refers to any elements that are found in
//    between the open and closing tag. This can be anything even another component.
return (
    <div className="Person">
        <p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

//we always need to export the code for use in other files.
export default person;

