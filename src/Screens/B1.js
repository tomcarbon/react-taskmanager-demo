/*******************************************
* B1.js -- About Us
********************************************/
import React from "react";

import TCText from "../components/TCText";
import image2 from "../images/image2.jpg";


class B1 extends React.Component {


  render() {
      return (
         <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Our Ficticious Store"} 
				spanishtext={"Nuestra tienda ficticia"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>

		<div style={{textAlign:"right", width: "400px", margin:"25px"}} >
			<TCText
				englishtext={"Since nothing is for sale here, please enjoy these royalty-free pictures from Alaska."}  
				spanishtext={"Como aquí no hay nada a la venta, disfrute de estas imágenes libres de regalías de Alaska."}
				langprefs={this.props.langprefs} >
			</TCText>
		</div>

		<img src={image2} alt="oops" style={{maxWidth:"100%", borderRadius:"20px"}}/>
         </div>
      );
  }
}

export default B1;
