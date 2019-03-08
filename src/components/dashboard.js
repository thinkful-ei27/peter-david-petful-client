import React, { Component } from 'react';
import Pet from './Pet';
import {connect} from 'react-redux';
import { adoptDog, adoptCat, fetchCat, fetchDog } from '../actions/index';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    console.log(props.catToAdopt)

  }

  
  componentDidMount() {
    const { dispatch } = this.props; 
    dispatch(fetchCat());
    dispatch(fetchDog());

  }

  handleDogAdopt() {
    this.props.dispatch(adoptDog())
  }

  handleCatAdopt() {
    this.props.dispatch(adoptCat())
  }
  

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.adoptCat()}/>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.adoptDog()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street',
  },

  dogToAdopt: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
});
export default (connect(mapStateToProps)(Dashboard))


