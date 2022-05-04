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
            My name is <span className="me">Sem Spanhaak</span>, currently writing my thesis at <a className="wehkamp" href="//wehkamp.nl/">Wehkamp</a>, as part of my bachelor in Software Engineering at <a className="windes" href="//windesheim.nl/">Windesheim</a>. I completed a pre-master in Computing Science at <a className="uu" href="//uu.nl/en">Utrecht University</a> and did part of my bachelor at <a className="lnu" href="//lnu.se/en">Linnaeus University</a>. Besides school, I work as a mobile app engineer at <a className="akyla" href="//akyla.nl/">Akyla</a>. 
          </p> 
          <p>
            I completed internships at <a className="zon" href="//zonneplan.nl/">Zonneplan</a>, <a className="akyla" href="//akyla.nl">Akyla</a>, <a className="iq" href="//iqmedia.nl/">IQ-Media</a>, and <a className="egm" href="//epicode.nl/">Epicode</a>. People I've worked for previously are <a className="creative-orange" href="//creativeorange.nl/">Creative Orange</a>, <a className="e-active" href="//e-active.nl/">E-Active</a>, <a className="landstede" href="//landstedembo.nl/">Landstede</a>, <a className="azerty" href="//azerty.nl/">Azerty</a>, and <a className="dielle" href="//diellepelletkachel.nl/">Dielle</a>.
					</p>
          <p>
            I like to explore the world, take <a className="me" href="//bysem.me">pictures</a> while doing it. Also love to talk about games & technology, and so much more.
					</p>
          <p>
            If you would like to contact me, you can! Try through <a className="twitter" href="//twitter.com/semspanhaak">Twitter</a>, <a className="linkedin" href="//linkedin.com/in/semspanhaak/">LinkedIn</a>, <a className="github" href="//github.com/sems">Github</a>, or email <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.
          </p>
          <p>
            Getting a message from me, and want to verify if it is really me? Check my public <a download className="gpg key" href="/publickey.me@sems.dev.asc">GPG</a> and <a download className="ssh key" href="/sems.main.pub">SSH</a> keys <span role="img" aria-label="key">🔑</span>.
          </p>
        </div>
      </div>
    )
  }
}
