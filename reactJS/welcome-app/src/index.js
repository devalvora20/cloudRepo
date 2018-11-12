import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WelcomeComponent from './welcomeComponent';
// import BlueButtonGameComponent from './blueButtonGameComponent';
// import TwoWayBindingComponent from './twoWayBindingComponent';
// import PrimeNumberComponent from './primeNumberComponent';
// import NumbersApiComponent from './numbersApiComponent';
// import ToggleButtonComponent from './toggleButtonComponent';
// import StarButtonComponent from './starButtonComponent';
import QuestionBankComponent from './questionBankComponent';
// var jsx=(
//     <h1>
//         Welcome To React
//     </h1>
// );
// function onToggleClick(msg){
//     console.log(msg);
// }
ReactDOM.render(<QuestionBankComponent />,document.querySelector('#root'));
// ReactDOM.render(<StarButtonComponent rating={'4'} />,document.querySelector('#root'));
// ReactDOM.render(<ToggleButtonComponent textContent={'swabhav'} onColor={'red'} onToggleClick={onToggleClick} offColor={'blue'}/>,document.querySelector('#root'));