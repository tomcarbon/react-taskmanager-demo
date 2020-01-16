/******************************************************
 * App.js TCC 20191201
 * ********************************************************/
import React from 'react';
import MyHeader from "./components/MyHeader";
import MyTrailer from "./components/MyTrailer";
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			language_preference: "english",
			dest: 'A1',
		};
	}

	handleToUpdate(someArg){
		/* variable passed from menu buttons located at MenuBar.js */
		/* not currently used */
		/* alert('We pass argument from Child to Parent: ' + someArg); */
		this.setState({dest:someArg});
	}

	languageToUpdate(someArg){
		/* variable passed from language buttons located at MyHeader.js */
		this.setState({language_preference:someArg});
	}

	render() {
	  var handleToUpdate = this.handleToUpdate;
	  var languageToUpdate = this.languageToUpdate;
	  return (
		  <div >
			<MyHeader 
		  		langprefs={this.state.language_preference} 
		  		languageToUpdate={languageToUpdate.bind(this)}
		  	/>
		  
			<MenuBar 
		  		handleToUpdate={handleToUpdate.bind(this)} 
		  		langprefs={this.state.language_preference}
		  	/>

		  	<Nav 	
		  		dest={this.state.dest} 
		  		langprefs={this.state.language_preference} 
		  	/>

		  	<MyTrailer />

		  </div>
	  );
	}
}

