import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// class Reactstate extends React.Component{
//   constructor(){
//     super();
//     this.state = {Mywebsite:"welcome to my page",Mycontent:"its time to learn about React"}
//   }
//   changethevalue=()=>{
//     this.setState({Mywebsite:"welcome to my website"})
//   }
//   render() {return<div><h1>{this.state.Mywebsite},{this.state.Mycontent}</h1>
//   <button type="button" onClick={this.changethevalue}>Change the content</button>
//   </div>
// }
// }
// ReactDOM.render(<Reactstate/>,document.getElementById('root'));

// class ReactProps extends React.Component{
  
//   render() {return<h1>Welcome{this.props.Mywebsite}</h1>
// }
// }
// ReactDOM.render(<ReactProps Mywebsite=" to my website"/>,document.getElementById('root'));

const Mywebsite=["Home", "About", "Services", "Products", "Contant"];
const websitemenu =Mywebsite.map((Mywebsite)=>{
  return<h1>{Mywebsite}</h1>
});
ReactDOM.render(<ul>{websitemenu}</ul>
  ,document.getElementById('root'));