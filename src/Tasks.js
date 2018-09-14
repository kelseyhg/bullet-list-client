import React, { Component } from 'react';


class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: this.props.isChecked
		}
	} 

 changeStatus = e => {
    console.log(e.target);
	let updatedStatus;
	e.target.value === 'false' ? updatedStatus = true : updatedStatus = false;   
    this.setState({
    	completed: updatedStatus
    }, () => console.log(this.state));
  }
	render() {
		let checkbox;
		if (this.state.completed) {
			checkbox = <input class="black" value={this.state.completed} id={this.props.taskId} type="checkbox" class="filled-in" onClick={this.changeStatus} checked />
		} else {
			checkbox = <input class="black" value={this.state.completed} id={this.props.taskId} type="checkbox" class="filled-in" onClick={this.changeStatus} />
		}
		return  (
			<div className="task-card">
				<p>
					<label>
	        			{checkbox}
	        			<span class="black-text">{this.props.individualTask}</span>
      				</label>
				</p>
			</div>
			);
		}
	
}

export default Tasks;