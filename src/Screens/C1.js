/*******************************************
* C1.js -- Services
* *****************************************/
import React from "react";

import TCText from "../components/TCText";
import image3 from "../images/image3.jpg";


class C1 extends React.Component {

  static navigationOptions = {
	  title: "Services"
  };

  render() {
      return (
          <div style={{margin:"20px"}}>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Services"} 
				spanishtext={"Servicios"}
				langprefs={this.props.langprefs} >
			</TCText>
		</h2>
		<img src={image3} style={{float:"right", borderRadius:"15px" }} alt="oops"/>
	      <div style={{margin:"40px", backgroundColor:"#ffeed2", width:"40%", padding:"10px", borderRadius:"20px"}}>
	      <h5>
		<TCText
			englishtext={"The Services are listed here"} 
			spanishtext={"Los servicios se enumeran aquí"}
			langprefs={this.props.langprefs} >
		</TCText>
		<TCText
			englishtext={"Services #1"} 
			spanishtext={"Servicios n. ° 1"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}} >
				<TCText 
					englishtext={"The description for service #1"} 
					spanishtext={"La descripción del servicio n. ° 1"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
		<TCText
			englishtext={"Services #2"} 
			spanishtext={"Servicios n. ° 2"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}} >
				<TCText 
					englishtext={"The description for service #2"} 
					spanishtext={"La descripción del servicio n. ° 2"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
		<TCText
			englishtext={"Services #3"} 
			spanishtext={"Servicios n. ° 3"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}}> 
				<TCText 
					englishtext={"The description for service #3"} 
					spanishtext={"La descripción del servicio n. ° 3"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
	      </h5>
	      </div>

          </div>
      );
  }
}

export default C1;
