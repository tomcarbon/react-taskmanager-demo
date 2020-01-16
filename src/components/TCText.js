/********************************************************************
 * TCText -- multi-language text output.
 * *****************************************************************/
import React from 'react';

/* depending on the selected language output the correct string. */
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
