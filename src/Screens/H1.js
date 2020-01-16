/*******************************************
* H1.js -- Employment
* *****************************************/
import React from "react";

import TCText from "../components/TCText";
import image4 from "../images/image4.jpg";


class H1 extends React.Component {

  static navigationOptions = {
	  title: "Employment"
  };

  render() {
      return (
	      <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Employment"} 
				spanishtext={"Empleo"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
		<TCText
			englishtext={"We are looking for a talented and resourceful person to join our team!"} 
			spanishtext={"¡Estamos buscando un mecánico talentoso e ingenioso para unirse a nuestro equipo!"} 
			langprefs={this.props.langprefs} >
		</TCText>
		<img src={image4} alt="oops" style={{borderRadius:"20px"}}/>
	      </div>
      );
  }
}

export default H1;
