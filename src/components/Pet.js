import React from 'react';
import '../styles/pet.css';

function Pet(props) {
  return (
    <section className="pet-card">
      <header>
        <h1>{`${props.petToAdopt.name} the ${props.animal}`}</h1>
        <img  className="pet-img" src={props.petToAdopt.imageURL} alt="cat" />
      </header>
      <main className="pet-content">
        <dl>
          <dt>Name:</dt>
          <dd>{props.petToAdopt.name}</dd>
          <dt>Gender:</dt>
          <dd>{props.petToAdopt.sex}</dd>
          <dt>Age:</dt>
          <dd>{props.petToAdopt.age}</dd>
          <dt>Breed:</dt>
          <dd>{props.petToAdopt.breed}</dd>
          <dt>{props.petToAdopt.name}'s Story:</dt>
          <dd>{props.petToAdopt.story}</dd>
        </dl>
        <button className="adopt-btn" onClick={ () => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  )
}

export default Pet;