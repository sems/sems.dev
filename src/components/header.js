import React, { Component } from 'react';

import '../styles/page.sass';
import '../styles/header.sass';

export class Header extends Component {
  render() {
    return (
      <div className="front-header">
        <div className="main">
          <h1><span role="img" aria-label="waving hand">👋</span> Hi, nice meeting you!</h1>
          <p>
            My name is <span className="me">Sem Spanhaak</span>, currently studying at <a className="lnu" href="https://lnu.se/en">Linnaeus University</a> as part of my BSc in Software Engineering at <a className="windes" href="//link.sems.dev/school">Windesheim</a>. Besides school, I work as a mobile app developer at <a className="akyla" href="//link.sems.dev/akyla">Akyla</a>. 
          </p> 
          <p>
            I completed internships at <a className="zon" href="//link.sems.dev/zon">Zonneplan</a>, <a className="akyla" href="//link.sems.dev/akyla">Akyla</a>, <a className="iq" href="//link.sems.dev/iq">IQ-Media</a>, and <a className="egm" href="//link.sems.dev/epi">Epicode</a>. People I've worked for previously are <a className="creative-orange" href="//link.sems.dev/orange">Creative Orange</a>, <a className="e-active" href="//link.sems.dev/active">E-Active</a>, <a className="landstede" href="//link.sems.dev/landstede">Landstede</a>, <a className="azerty" href="//link.sems.dev/azerty/">Azerty</a>, and <a className="dielle" href="//link.sems.dev/dielle">Dielle</a>.
					</p>
          <p>
            I like to explore the world, take <a className="me" href="//bysem.me">pictures</a> while doing it. Also love to talk about games & technology, and so much more.
					</p>
          <p>
            If you would like to contact me, you can! Try through <a className="twitter" href="//link.sems.dev/twitter">Twitter</a>, <a className="linkedin" href="//link.sems.dev/linkedin">LinkedIn</a>, <a className="github" href="//github.com/sems">Github</a>, or email <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.
          </p>
          <p>
            Getting a message from me, and want to verify if it is really me? Check my public <a download className="gpg key" href="/publickey.me@sems.dev.asc">GPG</a> and <a download className="ssh key" href="/sems.main.pub">SSH</a> keys <span role="img" aria-label="key">🔑</span>.
          </p>
        </div>
      </div>
    )
  }
}