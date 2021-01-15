import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

const Clock = (props) =>{
  return(
      <div className="container-fluid bg-dark " >
          <div className="row  ">
              <div className="col-md-10 d-flex justify-content-md-center rowCss">
              <div className="col-md-1  divCss"><i class="far fa-clock"></i></div>
              <div className="col-md-1 divCss">{props.six % 10}</div>
              <div className="col-md-1  divCss">{props.five % 10}</div>
              <div className="col-md-1  divCss">{props.four % 10}</div>
              <div className="col-md-1  divCss">{props.three % 10}</div>
              <div className="col-md-1  divCss">{props.two % 10}</div>
              <div className="col-md-1  divCss">{props.one % 10}</div>
              </div>
          </div>
      </div>
  )
};

Clock.protoTypes ={
  one: PropTypes.number,
  two: PropTypes.number,
  three: PropTypes.number,
  four: PropTypes.number,
  five: PropTypes.number,
  six: PropTypes.number 

};

let cont = 0;
setInterval(function(){
  const six = Math.floor(cont/10000);
  const five= Math.floor(cont/10000);
  const four = Math.floor(cont/1000);
  const three = Math.floor(cont/100);
  const two = Math.floor(cont/10);
  const one = Math.floor(cont/1);
  ReactDOM.render(
    <React.StrictMode>
    <Clock 
    one = {one}
    two = {two}
    three = {three}
    four = {four}
    five = {five}
    six = {six}
    />
  </React.StrictMode>,
  document.getElementById('root')
  );
cont++;
},1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
