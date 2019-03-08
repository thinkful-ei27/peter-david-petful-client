import React, { Component } from 'react';

import '../styles/card.css';

class Card extends Component {
  render() {
    return (
      <div>
        <a>
          <div className="picture">  
          </div>
        </a>
        <ul>
          <li>
           <strong>Name: </strong> {/* this.Name */} 
          </li>
          <li>
           <strong>Gender: </strong> {/* this.Name */} 
          </li>
          <li>
           <strong>Age: </strong> {/* this.Name */} 
          </li>
          <li>
           <strong>Breed: </strong> {/* this.Name */} 
          </li>
          <li>
           <strong>Fluffy's story:</strong> {/* this.Name */} 
          </li>
        </ul>

      </div>
    );
  }
}

//Create card compoenent
//has a picture, name, gender, Age, Breed, ${name}'s Story, Adopt(Delete)Button

export default Card;
