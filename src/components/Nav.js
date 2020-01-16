/********************************************************************
 * Nav -- navigation for the site
 *******************************************************************/
import React from 'react';
import A1 from "../Screens/A1"
import B1 from "../Screens/B1"
import C1 from "../Screens/C1"
import D1 from "../Screens/D1"
import E1 from "../Screens/E1"
import F1 from "../Screens/F1"
import G1 from "../Screens/G1"
import H1 from "../Screens/H1"


class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		if (this.props.dest === 'A1') {
			return (
				<div>
				<B1 langprefs={this.props.langprefs}/>
				<C1 langprefs={this.props.langprefs}/>
				<E1 langprefs={this.props.langprefs}/>
				<G1 langprefs={this.props.langprefs}/>
				<D1 langprefs={this.props.langprefs}/>
				<F1 langprefs={this.props.langprefs}/>
				</div>
			);
		} else if (this.props.dest === 'B1') {
			return (
				<B1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'C1') {
			return (
				<C1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'D1') {
			return (
				<D1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'E1') {
			return (
				<E1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'F1') {
			return (
				<F1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'G1') {
			return (
				<G1 langprefs={this.props.langprefs}/>
			);
		} else if (this.props.dest === 'H1') {
			return (
				<H1 langprefs={this.props.langprefs}/>
			);
		} else {
			console.info("Unexpected value of " + this.props.dest + "'. Resetting to A1");
			return (
				<A1 langprefs={this.props.langprefs}/>
			);
		}
	}
}
export default Nav;
