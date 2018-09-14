import React, { Component } from 'react';
import './App.css';
import Tasks from "./Tasks.js";



const TaskCard = props => {
	const allTasks = props.tasks;
	console.log(allTasks)
	return(
		<div>
			<div className="row card-row">
    			<div className="col">
			      <div className="card task-card">
			        <div className="card-content">
			          <h1 className="card-title">{props.time}</h1>
				          {allTasks.map( task => {
				          return <Tasks 
				          	individualTask={task.name}
				          	taskId={task.taskId}
				          	isChecked={task.complete} />
				        })}
			        </div>
			        <div className="card-action for-width">
					    <form className="col s12">
			          		<a onClick={props.handleAddTask} value={props.category} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
					      <div className="row">
					        <div className="input-field col s12">
					          <input id="newTask" data-task={props.category} type="text" value={props.newTask} onChange={props.handleChange}/>
					          <label for="newTask">New Task</label>
					        </div>
					        <div className="input-field col s6">
					          <input id="taskId" value={props.category} hidden/>
					        </div>
					      </div>  
					    </form>
					    </div>
			      </div>
				</div>
			</div>
		</div>
		

	)
}




export default TaskCard;
