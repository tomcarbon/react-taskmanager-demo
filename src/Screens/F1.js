/*******************************************
* F1.js -- Appointments
* *****************************************/
import React from "react";

import TCText from "../components/TCText";
import image5 from "../images/image5.jpg";


class F1 extends React.Component {

  static navigationOptions = {
	  title: "Appointments"
  };

  render() {
      return (
	      <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Appointments"} 
				spanishtext={"Equipo"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
		<TCText
			englishtext={"No appointment is necessary, but please feel free to call us at (310) 555-1212."} 
			spanishtext={"No es necesaria una cita, pero no dude en llamarnos al (310) 555-1212."} 
			langprefs={this.props.langprefs} >
		</TCText>
		<img src={image5} alt="oops" style={{borderRadius:"20px"}}/>
	      </div>
      );
  }
}

export default F1;
