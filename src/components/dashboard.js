import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section>
          <header>
            <h1>Cat</h1>
            <img src="https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg" alt="cat" />
          </header>
          <main>
            <dl>
              <dt>Name:</dt>
              <dd>Fluffy</dd>
              <dt>Gender:</dt>
              <dd>Female</dd>
              <dt>Age:</dt>
              <dd>2</dd>
              <dt>Breed:</dt>
              <dd>Bengal</dd>
              <dt>Fluffy's Story:</dt>
              <dd>Thrown on the street</dd>
            </dl>
            <button>Adopt</button>
          </main>
        </section>
        <section>
          <header>
            <h1>Dog</h1>
            <img src="http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg" alt="dog" />
          </header>
          <main>
            <dl>
              <dt>Name:</dt>
              <dd>Zeus</dd>
              <dt>Gender:</dt>
              <dd>Male</dd>
              <dt>Age:</dt>
              <dd>3</dd>
              <dt>Breed:</dt>
              <dd>Golden Retriever</dd>
              <dt>Zues's Story:</dt>
              <dd>Owner Passed away</dd>
            </dl>
            <button>Adopt</button>
          </main>
        </section>
      </div>
    );
  }
}



export default Dashboard;