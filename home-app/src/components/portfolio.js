import React from 'react';

import { Case } from './case'

import '../styles/portfolio.css';

const Entities = [
  {
		type: 'work',
		name: 'sem',
		description: 'My first site with a implemented CMS on the backend.',
    externalLink: '//sspanhaak.saldev.nl/',
    inner: 'inner/sem.svg',
  },
  {
		type: 'work',
		name: 'lands',
		description: 'Related to a course we must following at school. Project Bureau Salland is a site where companies can submit there small assignments (on student level) to work with.',
    externalLink: '//projectbureausalland.nl/',
    inner: 'inner/landstede.svg',
  },
  {
		type: 'work',
		name: 'knoop',
		description: 'My last examproject. The project lasted for 20 weeks in groups of 4 to 5 people. Our assignment was to build a multidisplay-presentationsytem, connected to an api written in C#. The backend consist of screen, user and presentation managementtools ',
    externalLink: '//presentatiesysteem-2017-2018.saldev.nl/',
    inner: 'inner/knoop.svg',
  },
  {
		type: 'worked_on',
		name: 'mts',
		description: 'Museumtijdschrift or MTS has the biggest museum database of whole Europe; listing all exhibitions, dates and places. I worked small things like exhibition details, also I worked on multiple mailtemplates eg. the newsletters. Commissioned by EGM Media. ',
    externalLink: '//museumtijdschrift.nl',
    inner: 'inner/mts.png',
  },
  {
		type: 'worked_on',
		name: 'bliem',
		description: 'The last site I build alone at my first internship. It was build from the groundup with WordPress on the backend and a self build custom theme on the front. Various elements were intergrated by custom order like the public calendar.',
    externalLink: '//bliem.nl/',
    inner: 'inner/bliem.svg',
  },
  {
		type: 'worked_on',
		name: 'john',
		description: 'Author John Grisham\'s dutch site with all information regarding him and his various books. Helped to establish the site using a custom theme developed by the guys at EGM Media.',
    externalLink: '//grisham.nl/',
    inner: 'inner/john.svg',
  },
]

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			work_cases: this.renderWorkCases(Entities, 'work'),
			worked_on_cases: this.renderWorkCases(Entities, 'worked_on')
    };
	}

  renderWorkCases = (data, type) => {
		var result = data.filter(function( obj ) {
			return obj.type === type;
		});

		let workArray = [];
		for (let i = 0; i < result.length; i++) {
			const element = result[i];
			workArray.push (<Case key={i} title={element.name} description={element.description} externalLink={element.externalLink} inner={element.inner}/>);
		}
		return workArray
	}

  render() {
		return(
			<div className="portfolio">
				<div className="content container">
					<h2 className="section_title">
						<span>Portfolio</span>
					</h2>
					<section className="work">
						{this.state.work_cases}
					</section>
					<h2 className="section_title">
						<span>Worked on during internship</span>
					</h2>
					<section className="worked-on">
						{this.state.worked_on_cases}
					</section>
				</div>
			</div>
		)
	}
}
  