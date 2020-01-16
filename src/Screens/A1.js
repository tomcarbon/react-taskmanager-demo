/* HOME */
import React from "react";

import TCText from "../components/TCText";
import image1 from "../images/image1.jpg";


class A1 extends React.Component {

  static navigationOptions = {
	  title: "Home"
  };

  render() {
      return (
	      <div>
		<img src={image1} style={{maxWidth: "100%"}} alt="oops"/>
	      	<h2>Home</h2>
		<TCText
			englishtext={"Welcome to the Website Starter!."}  
			spanishtext={"Bienvenido al sitio web de inicio!"}  
			langprefs={this.props.language_preference} >
		</TCText>
	      </div>
      );
  }
}

export default A1;
