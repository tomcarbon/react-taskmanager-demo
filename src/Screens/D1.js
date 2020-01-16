/*******************************************
* D1.js -- Testimonials
* *****************************************/
import React from "react";

import TCText from "../components/TCText";
import image1 from "../images/image1.jpg";


class D1 extends React.Component {

  static navigationOptions = {
	  title: "Testimonials"
  };

  render() {
      return (
	<div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Testimonials"} 
				spanishtext={"Testimonios"}
				langprefs={this.props.langprefs} >
			</TCText>
		</h2>
		<img src={image1} style={{width: "40%", float:"right", borderRadius:"10px"}} alt="oops"/>
	      <div style={{width:"50%", marginLeft:"40px", marginTop:"10px", backgroundColor:"#e8e8ff", borderRadius:"20px", padding:"20px"}}>

			<TCText
				englishtext={"This site is exactly as I expected."}
				spanishtext={"Este sitio es exactamente como lo esperaba."} 
				langprefs={this.props.langprefs} >
			</TCText>
			<h5 style={{textAlign:"right"}}><TCText
				englishtext={"Tom C.- Los Angeles, CA"}
				spanishtext={"Tom C.- Los Angeles, CA"}
				langprefs={this.props.langprefs} >
			</TCText></h5>
		</div>
      </div>
      );
  }
}

export default D1;
