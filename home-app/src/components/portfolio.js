import React from 'react';

import { Case } from './case'

import '../styles/portfolio.css';

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			
    };
	}

	render() {
		return(
			<div className="portfolio">
				<div className="content container">
					<h2 className="section_title">
						<span>Portfolio</span>
					</h2>
					<section className="work">
						<Case title="sem" externalLink="//sspanhaak.saldev.nl/" inner="inner/sem.svg"/>
						<Case title="lands" externalLink="//projectbureausalland.nl/" inner="inner/landstede.svg"/>
						<Case title="knoop" externalLink="//presentatiesysteem-2017-2018.saldev.nl/" inner="inner/knoop.svg"/>
					</section>
					
					<h2 className="section_title">
						<span>Worked on during internship</span>
					</h2>
					<section className="worked-on">
						<Case title="mts" externalLink="//museumtijdschrift.nl" inner="inner/mts.png"/>
						<Case title="bliem" externalLink="//bliem.nl/" inner="inner/bliem.svg"/>
						<Case title="john" externalLink="//grisham.nl/" inner="inner/john.svg"/>
					</section>
				</div>
			</div>
		)
	}
}
  