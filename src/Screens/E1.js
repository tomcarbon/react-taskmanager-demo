/*******************************************
* E1.js -- Specials
* *****************************************/
import React from "react";

import TCText from "../components/TCText";


class E1 extends React.Component {

  static navigationOptions = {
	  title: "Our Specials"
  };

  render() {
      return (
	      <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Specials"} 
				spanishtext={"Especials"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
		  <img style={{width:"400px", margin:"25px", borderRadius:"5px"}} src={ require('../images/coupon001.png') } alt="whoooooops." />
	      </div>
      );
  }
}

export default E1;
