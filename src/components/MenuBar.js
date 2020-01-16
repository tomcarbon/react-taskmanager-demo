/*******************************************
 * MenuBar.js
 * display the menu bar that's below the header
 * tcc 20191201
			<div style={{height:"50px", backgroundColor:"#f0f8ff" }} >
 * ****************************************/
import React from 'react';
import TCText from './TCText';

class MenuBar extends React.Component {
	/*
	constructor(props) {
		super(props);
        }
	*/

	render() {
		var handleToUpdate = this.props.handleToUpdate;
		return (
			<div style={{height:"auto", backgroundColor:"#f0f8ff" }} >
				<span>
				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('A1')}>
					<TCText
						englishtext={"Home"} 
						spanishtext={"Casa"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('C1')}>
					<TCText
						englishtext={"Services"} 
						spanishtext={"Servicios"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('E1')}>
					<TCText
						englishtext={"Specials"} 
						spanishtext={"Especiales"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('G1')}>
					<TCText
						englishtext={"Directions"} 
						spanishtext={"Direcciones"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('D1')}>
					<TCText
						englishtext={"Testimonials"} 
						spanishtext={"Testimonios"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('F1')}>
					<TCText
						englishtext={"Appointments"} 
						spanishtext={"Equipo"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('B1')}>
					<TCText
						englishtext={"About Us"} 
						spanishtext={"Sobre nosotros"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>

				<button 
					style={menubuttonstyle}
					onClick={() => handleToUpdate('H1')}>
					<TCText
						englishtext={"Employment"} 
						spanishtext={"Empleo"} 
						langprefs={this.props.langprefs} >
					</TCText>
				</button>
				</span>
			</div>
		);
	}
}
const menubuttonstyle = {
	/*
	float:"left", 
	*/
	height:"30px", 
	backgroundColor:"#e1c699", 
	marginLeft:"10px",
	borderRadius:"10px",
};

export default MenuBar;
