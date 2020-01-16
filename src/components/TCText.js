/********************************************************************
 * TCText -- multi-language text output.
 * 20191121
			<p>{this.state.outtext}</p>
 * *****************************************************************/
import React from 'react';

/* depending on the selected language out put the correct string. */

class TCText extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props);
		this.ttxt = '';
	}

	render () {
		const langprefs = this.props.langprefs;

		if (langprefs === 'english') {
			this.ttxt = this.props.englishtext;
		} else if (langprefs === 'spanish') {
			this.ttxt = this.props.spanishtext;
		} else {
			this.ttxt = this.props.spanishtext;
		}

		return (
			<div>{this.ttxt}</div>
		);
	}
}
export default TCText;
