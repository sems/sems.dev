import React from 'react';

import '../styles/header.css';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="front-header">
				<div className="main">
					<p>
						Hi, nice meeting you!
					</p>
					<p>
						My name is <span className="me">Sem</span>, currently studying for my BSc in Software Engineering at <a className="windes" href="//www.windesheim.com/">Windesheim</a>. 
						Besides school, I work as a sales assistent and product specialist at <a className="azerty" href="//azerty.nl/">Azerty</a>.
						The first internship I did was at <a className="egm" href="//egm-media.com">EGM Media</a> and the latest at <a className="iq" href="//iqmedia.nl">IQ-Media</a>.
						People I've worked for are <a className="creative-orange" href="//creativeorange.nl">Creative Orange</a>, <a className="e-active" href="//e-active.nl/">E-Active</a>, <a className="landstede" href="//landstedembo.nl">Landstede</a>, <a className="azerty" href="//azerty.nl/">Azerty</a>, and <a className="dielle" href="//www.diellepelletkachel.nl/">Dielle</a>.
					</p>
					<p>
						I like to explore the world, talk about games, technology and so much more.
					</p>
					<p>
						Ways to contact me: <a className="twitter" href="//twitter.com/semspanhaak">Twitter</a>, <a className="linkedin" href="//linkedin.com/in/semspanhaak">LinkedIn</a> or <a className="github" href="//github.com/semspanhaak">Github</a>.
						If you want to mail, you can! You can mail to <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.
					</p>
				</div>
			</div>
		)
	}
}
  