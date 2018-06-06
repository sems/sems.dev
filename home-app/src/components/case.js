import React from 'react';
import Tilt from 'react-tilt'

import '../styles/portfolio.css';

export class Case extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}
	
	getOuter = () => {
		const imageURI = "../assets/images/comp/" + this.props.title + "_comp.jpg";
		const styles = { 
			backgroundImage: "url(" + imageURI +")",
			height: 250, 
			width: 250
		}
		return styles;
	}

	render() {
		return(
			<Tilt className={this.props.title + ' Tilt'} options={{ max : 25 }} style={ this.getOuter() } >
				<a href={this.props.externalLink}>
					<img className="Tilt-inner svg" src={require("../assets/images/" + this.props.inner)} alt={this.props.title} />
				</a>
			</Tilt>
		)
	}
}
  