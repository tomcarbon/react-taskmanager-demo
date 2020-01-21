/*******************************************
* TaskManager.js -- demo
******************************************/
import React from "react";
import '../css/taskmanager.css';
import TaskManagerAddTask from "./TaskManagerAddTask";
import TaskManagerDisplay from "./TaskManagerDisplay";
import TaskManagerPleaseWait from "./TaskManagerPleaseWait";


class TaskManager extends React.Component {
	constructor() {
		super();
		this.state = { 
			isModalOpen: false,
			isPleaseWaitOpen: false,
			readyDropdown: "",
			readyTextBox:  "medium",
			arr:		[],
			forceit:   0,  
			erec: {edit: false, idx: 0, txt: "", priority: ""}
		};
		sessionStorage.clear();
	}

	editRecord = (index) => {
		var myList = JSON.parse(sessionStorage.getItem("voila"));
		this.setState({arr: myList});
		var text = this.state.arr[index].text;
		var priority = this.state.arr[index].priority;
		this.setState({ erec: {edit: true, idx: index, txt: text, priority: priority}});
		this.openModal();
	}

	deleteRecord = (index, confirmMessage) => {
		this.openPleaseWait();
		var myList = JSON.parse(sessionStorage.getItem("voila"));
		if (confirmMessage === true) {
			if (window.confirm("Are you sure you want to remove this task?") === false ) {
				this.closePleaseWait();
				return;
			}
		}
		var newArr = [];
		for (var i=0; i<myList.length ; i++) {
			if (i === index) {
				/* do nothing */
			} else {
				newArr.push(myList[i]);
			}
		}
		this.setState({arr: newArr});
		sessionStorage.setItem("voila", JSON.stringify(newArr));
		var self = this;
		setTimeout(function(){ 
			var z = self.state.forceit + 1;
			self.setState({forceit: z});
			setTimeout(function(){ 
				self.closePleaseWait();
			}, 400);
		}, 100);
	}

	/* These are for the 'Add Task' modal: */
	openModal = () => {
		this.setState({ isModalOpen: true});
	}
	cancelModal() {
		this.setState({ isModalOpen: false});
		this.setState({ erec: {edit: false, idx: 0}});
	}
	closeModal() {
		this.setState({ isModalOpen: false});
		/* load sessionStorage if any */
		
		if (this.state.readyTextBox !== "") {
			var sortidx;
			switch(this.state.readyDropdown) {
				case "high":	sortidx = 1; break;
				case "medium":	sortidx = 2; break;
				case "low":	sortidx = 3; break;
				default:  	break;
			}
			var y = [];
			y = this.state.arr;
			y.push({ sortidx: sortidx, text: this.state.readyTextBox, priority: this.state.readyDropdown });
			this.setState({arr:y});
		}

		if (typeof(Storage) !== "undefined") {
			sessionStorage.setItem("voila", JSON.stringify(this.state.arr));
		} else {
			alert("Sorry, session storage is not supported on this browser.");
		}
		if (this.state.erec['edit'] === true) {
			this.deleteRecord(this.state.erec['idx'], false);
			this.setState({ erec: {edit: false, idx: 0}});
		} else {
			if (sessionStorage["voila"] === "undefined") {
				return;	
			} 
			var List = JSON.parse(sessionStorage.getItem("voila"));
			sessionStorage.setItem("voila", JSON.stringify(List));
			var z = this.state.forceit + 1;
			this.setState({forceit: z});
		}
	}

	openPleaseWait = () => {
		this.setState({ isPleaseWaitOpen: true});
	}
	closePleaseWait = () => {
		this.setState({ isPleaseWaitOpen: false});
	}

	updateDropdown(a) {
		this.setState({ readyDropdown: a});
	}

	updateTextBox(a) {
		this.setState({ readyTextBox: a});
	}

  render() {
	var closeModal = this.closeModal;
	var cancelModal = this.cancelModal;
	var openPleaseWait = this.openPleaseWait;
	var closePleaseWait = this.closePleaseWait;
	var updateTextBox = this.updateTextBox;
	var updateDropdown = this.updateDropdown;

      return (
	<div className="tm-body">
		<div onClick={() => this.openModal()}>Add a new task</div>
	        <p></p>

		<TaskManagerAddTask 
			amOpen={this.state.isModalOpen}
			closeModal={closeModal.bind(this)}
			cancelModal={cancelModal.bind(this)}
			updateTextBox={updateTextBox.bind(this)}
			updateDropdown={updateDropdown.bind(this)}
	      		erec={this.state.erec}
	        />
	      	<TaskManagerPleaseWait amOpen={this.state.isPleaseWaitOpen}/>
	        <TaskManagerDisplay 
	      		idname="display1"
			openPleaseWait={openPleaseWait.bind(this)}
			closePleaseWait={closePleaseWait.bind(this)}
	      		deleteRecord={this.deleteRecord} 
	      		editRecord={this.editRecord} 
	      		forceit={this.state.forceit} />
	</div>
      );
	  
  }
}

export default TaskManager;
