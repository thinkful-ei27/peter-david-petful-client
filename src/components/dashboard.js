import React, { Component } from 'react';
import Pet from './Pet'
class Dashboard extends Component {

  constructor(props) {
    super(props);
    console.log(props.catToAdopt)

  }

  handleDogAdopt() {

  }
  

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={ e=> console.log('Delete that shit')}/>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={ e=> console.log('Delete that shit')}/>
      </div>
    );
  }
}




export default Dashboard;