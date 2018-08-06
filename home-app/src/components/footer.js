import React from 'react';

export class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="footer">
                <p>Code with <span role="img" aria-label="Heart">❤️</span>, hosted on <a href="//github.com/semspanhaak">Github</a></p>
			</div>
		)
	}
}
  