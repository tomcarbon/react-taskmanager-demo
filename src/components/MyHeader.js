import React from 'react';
import Logo1 from "./Logo1";

class MyHeader extends React.Component {
	render() {
		var languageToUpdate = this.props.languageToUpdate;
		return (
			<div style={{height:"105px", backgroundColor:"#f0f8ff"}}>
				<Logo1  style={{float: 'left'}}/>
				<div style={{float:"right", width:"110px", padding:"20px"}}>
					<button style={languagebuttonstyle} onClick={() => languageToUpdate('english')}>English</button>
					<button style={languagebuttonstyle} onClick={() => languageToUpdate('spanish')}>Espanol</button>
				</div>
				<div  style={{float: 'right', margin:"10px", fontSize:"12px"}}>
					<div>Ficticious Business </div>
					<div>1234 S Springfield Ave</div>
					<div>Redondo Beach, CA 90278</div>
					<div>(310) 555-1212</div>
				</div>
			</div>
		);
	}
}

const languagebuttonstyle = {
	float:"left", 
	height:"30px", 
	backgroundColor:"#e1ffe1", 
	marginLeft:"10px",
	borderRadius:"10px",
};

export default MyHeader;
