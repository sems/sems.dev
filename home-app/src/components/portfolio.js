import React from 'react';
import Tilt from 'react-tilt'

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
						<Tilt className="Tilt sem" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//sspanhaak.saldev.nl/">
								<img className="Tilt-inner svg" src={require("../assets/images/sem.svg")} alt="" />
							</a>
						</Tilt>
						<Tilt className="Tilt lands" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//projectbureausalland.nl/">
								<img className="Tilt-inner svg" src={require("../assets/images/landstede.svg")} alt="" />
							</a>
						</Tilt>
						<Tilt className="Tilt knoop" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//presentatiesysteem-2017-2018.saldev.nl/">
								<img className="Tilt-inner" src={require("../assets/images/icon_knoop.svg")} alt="" />
							</a>
						</Tilt>
					</section>
					
					<h2 className="section_title">
						<span>Worked on during internship</span>
					</h2>
					<section className="worked-on">
						<Tilt className="Tilt mts" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//museumtijdschrift.nl">
								<img className="Tilt-inner " src={require("../assets/images/mts-logo-white.png")}  alt="" />
							</a>
						</Tilt>
						<Tilt className="Tilt bliem" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//bliem.nl/">
								<img className="Tilt-inner " src={require("../assets/images/bliem.svg")}  alt="" />
							</a>
						</Tilt>
						<Tilt className="Tilt john" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
							<a href="//grisham.nl/">
								<img className="Tilt-inner svg" src={require("../assets/images/john.svg")} alt="" />
							</a>
						</Tilt>

					</section>
				</div>
			</div>
		)
	}
}
  