import React from 'react';

import '../styles/page.sass';
import '../styles/header.sass';

export class Header extends React.Component {
	render() {
		return(
			<div className="front-header">
				<div className="main">
					<p>
						<span role="img" aria-label="waving hand">👋</span> Hi, nice meeting you!
					</p>
					<p>
						My name is <span className="me">Sem Spanhaak</span>, currently studying for my BSc in Software Engineering at <a className="windes" href="//link.sems.dev/school">Windesheim</a>. Besides school, I work as a mobile app developer at <a className="akyla" href="//link.sems.dev/akyla">Akyla</a>, software development intern at <a className="zon" href="//link.sems.dev/zon">Zonneplan <span role="img" aria-label="Sun">☀️</span></a> and copywriter & product specialist at <a className="azerty" href="//link.sems.dev/azerty/">Azerty</a>. I completed internships at <a className="akyla" href="//link.sems.dev/akyla">Akyla</a>, <a className="iq" href="//link.sems.dev/iq">IQ-Media</a>, and <a className="egm" href="//link.sems.dev/epi">Epicode</a>. People I've worked for previously are <a className="creative-orange" href="//link.sems.dev/orange">Creative Orange</a>, <a className="e-active" href="//link.sems.dev/active">E-Active</a>, <a className="landstede" href="//link.sems.dev/landstede">Landstede</a>, <a className="azerty" href="//link.sems.dev/azerty/">Azerty</a>, and <a className="dielle" href="//link.sems.dev/dielle">Dielle</a>.
					</p>
					<p>
						I like to explore the world, talk about games, technology, and so much more.
					</p>
					<p>
						If you would like to contact me, you can! Try trough <a className="twitter" href="//link.sems.dev/twitter">Twitter</a>, <a className="linkedin" href="//link.sems.dev/linkedin">LinkedIn</a>, <a className="github" href="//link.sems.dev/gh">Github</a>, or email <a className="me" href="mailto:me@sems.dev">me@sems.dev</a> (<a download className="gpg" href="/publickey.me@sems.dev.asc">GPG</a>).
					</p>
				</div>
			</div>
		)
	}
}
  
