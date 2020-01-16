/*******************************************
* G1.js -- Directions
* *****************************************/
import React from "react";

import TCText from "../components/TCText";
import map1 from "../images/map1.jpg";


class G1 extends React.Component {

  static navigationOptions = {
	  title: "Directions"
  };

  render() {
      return (
	      <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Directions"} 
				spanishtext={"Direcciones"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
		<TCText
			englishtext={"We are located at: 1234 S Springfield Ave Redondo Beach, CA 90278"} 
			spanishtext={"Estamos ubicados en: 1234 S Springfield Ave Redondo Beach, CA 90278"} 
			langprefs={this.props.langprefs} >
		</TCText>
		<img src={map1} style={{borderRadius:"20px", marginLeft:"15%", width: "70%"}} alt="oops" />
	      </div>
      );
  }
}

export default G1;
