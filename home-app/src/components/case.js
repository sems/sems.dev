import React from 'react';
import Tilt from 'react-tilt'

import '../styles/portfolio.css';

export class Case extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
      backgroundStyles: this.getOuter(),
		};
	}
	
	getOuter = () => {
		const imageURI = require("../assets/images/comp/" + this.props.title + "_comp.jpg");
		
		const styles = { 
			backgroundImage: "url('" + imageURI +"')",
		}
		return styles;
	}

	render() {
		return(
			<Tilt className={this.props.title + ' Tilt'} options={{ max : 25 }} style={ this.state.backgroundStyles } >
				<a href={this.props.externalLink}>
					<img className="Tilt-inner" src={require("../assets/images/" + this.props.inner)} alt={this.props.title} />
				</a>
			</Tilt>
		)
	}
}
  