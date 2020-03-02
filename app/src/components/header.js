import React from 'react';

import '../styles/page.sass';
import '../styles/header.sass';

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
						<span role="img" aria-label="waving hand">👋</span> Hi, nice meeting you!
					</p>
					<p>
						My name is <span className="me">Sem Spanhaak</span>, currently studying for my BSc in Software Engineering at <a className="windes" href="//www.windesheim.com/">Windesheim</a>. 
						Besides school, I work as a copywriter, sales assistant and product specialist at <a className="azerty" href="//azerty.nl/">Azerty</a>.
						The latest internship I did was at <a className="iq" href="//iqmedia.nl">IQ-Media</a> and the first at <a className="egm" href="//egm-media.com">EGM Media</a>.
						People I've worked for are <a className="creative-orange" href="//creativeorange.nl">Creative Orange</a>, <a className="e-active" href="//e-active.nl/">E-Active</a>, <a className="landstede" href="//landstedembo.nl">Landstede</a>, <a className="azerty" href="//azerty.nl/">Azerty</a>, and <a className="dielle" href="//www.diellepelletkachel.nl/">Dielle</a>.
					</p>
					<p>
						I like to explore the world, talk about games, technology and much more.
					</p>
					<p>
						If you would like to contact me, you can! Try trough <a className="twitter" href="//twitter.com/semspanhaak">Twitter</a>, <a className="linkedin" href="//linkedin.com/in/semspanhaak">LinkedIn</a>, <a className="github" href="//github.com/semspanhaak">Github</a> or email <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.
					</p>
				</div>
			</div>
		)
	}
}
  