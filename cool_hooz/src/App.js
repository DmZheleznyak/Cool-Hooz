import React, { Component } from 'react';
import './components/slider/style.css';
import Slider from './components/slider/index.jsx';

const slides = [
	{
		city: 'Paris',
		country: 'France',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
	},
	{
		city: 'Singapore',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
	},
	{
		city: 'Prague',
		country: 'Czech Republick',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
	},
	{
		city: 'Amsterdam',
		country: 'Netherland',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
	},
	{
		city: 'Moscow',
		country: 'Russia',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
	}
]

class App extends Component {
  render() {
    return (
      <div className="App">
				<Slider slides = { slides } />
      </div>
    );
  }
}

export default App;
