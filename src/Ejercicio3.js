import React from 'react';


const Ejercicio3 = props =>{
    return (
        <div className="App-total">
    <header className="App-header">
    <div className="first-container">
      <img src={props.picture} className="App-logo" alt="logo" />
      <div className="titles-container">
    <h1 className="title-name">{props.name}</h1>
    <h2 className="date">{props.date}</h2>
      </div>
    </div>
  </header>
    <p>{props.text}</p>
   <div className="likes">
    <p className="read-more">{props.likes}</p>
    <div className="number-likes">
      <p className="number">37</p>
      
    </div>
  </div> 
  </div>
  );
}
export default Ejercicio3;