import React, { Component } from 'react';

import '../styles/page.sass';
import '../styles/header.sass';

export class Header extends Component {
  render() {
    return (
      <div className="front-header">
        <div className="main">
          <h1>Hello <span role="img" aria-label="waving hand">👋</span></h1>
          <p>
            My name is <span className="me">Sem</span>, currently an iOS Software Engineer at <a className="ns" href="//ns.nl/">NS</a>. 
          </p> 
          <p>
            I completed my bachelor in Software Engineering at <a className="windes" href="//windesheim.nl/">Windesheim</a>, pre-master in Computing Science at <a className="uu" href="//uu.nl/en">Utrecht University</a>, and did part of my bachelor at <a className="lnu" href="//lnu.se/en">Linnaeus University</a> in Sweden. 
          </p>
          <p>
            I like to explore the world, take <a className="me" href="//bysem.me">pictures</a> while doing it. Also love to talk about games & technology, and so much more.
					</p>
          <p>
            If you would like to contact me, you can! Try through <a className="bsky" href="//bsky.app/profile/sems.dev">Bluesky</a>, <a className="github" href="//github.com/sems">Github</a>, or send an email to <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.
          </p>
          <p>
            Getting a message from me, and want to verify if it is really me? Check my public <a download className="gpg key" href="/publickey.me@sems.dev.asc">GPG</a> and <a download className="ssh key" href="/sems.main.pub">SSH</a> keys <span role="img" aria-label="key">🔑</span>.
          </p>
        </div>
      </div>
    )
  }
}
