import React, { Component } from 'react';
import Pet from './Pet';
import {connect} from 'react-redux';
import { adoptDog, adoptCat, fetchCat, fetchDog } from '../actions/index';
import '../styles/dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props.catToAdopt)
    // this.getPets();
  }

  
  // componentDidMount() {
  //   const { dispatch } = this.props; 
  //   dispatch(fetchCat());
  //   dispatch(fetchDog());
  // }

  getPets() {
  this.props.dispatch(fetchCat());
  this.props.dispatch(fetchDog());
  }

  handleDogAdopt() {
    this.props.dispatch(adoptDog())
  }

  handleCatAdopt() {
    this.props.dispatch(adoptCat())
  }
  

  render() {
    return (
      <div className="dashboard">
        <Pet animal="cat" petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.handleCatAdopt()}/>
        <Pet animal="dog" petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.handleDogAdopt()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.cat.data,
  dogToAdopt: state.dogReducer.dog.data
});
export default (connect(mapStateToProps)(Dashboard))


