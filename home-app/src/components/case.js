import React from 'react';
import Tilt from 'react-tilt'

import '../styles/portfolio.css';

export class Case extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
      styles: this.getOuter(),
      expanded: false,
      innerIcon: require("../assets/images/" + this.props.inner),
      innerIconExpanded: require("../assets/window-close.svg")
    };
    this.expandClickHandler = this.expandClickHandler.bind(this);
	}
	
	getOuter = () => {
    const imageURI = require("../assets/images/comp/" + this.props.title + "_comp.jpg");
		const styles = { 
			backgroundImage: "url('" + imageURI +"')",
    }
		return styles;
	}

  expandClickHandler = () =>{
    this.setState({
      expanded: !this.state.expanded,
    })
  }

	render() {
    let case_class = this.state.expanded ? "preview_expanded" : "preview";
		return(
      <div>
        <Tilt className={this.props.title + ' Tilt ' + case_class} options={{ max : 25 }} style={ !this.state.expanded && this.state.styles } >
          <a onClick={this.expandClickHandler}>
            <img className="Tilt-inner" src={this.state.expanded ? this.state.innerIconExpanded : this.state.innerIcon} alt={this.props.title} />
          </a>
          {this.state.expanded && 
          <div className="inner-expanded">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Id consequatur aliquid tempora dicta neque, sequi necessitatibus nobis. 
              Dolores, magnam excepturi! Ullam, quae. Maiores earum aperiam alias vel? 
              Rem, facilis a.
            </p>
            <a href={this.props.externalLink}>Naar site</a>
          </div>}
        </Tilt>
      </div>
		)
	}
}
  