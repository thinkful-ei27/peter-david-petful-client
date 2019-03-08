import React from 'react';

function Pet(props) {
  return (
    <section>
      <header>
        <h1>{props.animal}</h1>
        <img src={props.petToAdopt.imageURL} alt="cat" />
      </header>
      <main>
        <dl>
          <dt>Name:</dt>
          <dd>{props.petToAdopt.name}</dd>
          <dt>Gender:</dt>
          <dd>{props.petToAdopt.sex}</dd>
          <dt>Age:</dt>
          <dd>{props.petToAdopt.age}</dd>
          <dt>Breed:</dt>
          <dd>{props.petToAdopt.breed}</dd>
          <dt>Fluffy's Story:</dt>
          <dd>{props.petToAdopt.story}</dd>
        </dl>
        <button onClick={ () => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  )
}

export default Pet;