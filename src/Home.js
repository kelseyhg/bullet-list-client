import React, { Component } from 'react';
import TaskCard from "./TaskCard.js";

const myTasks =[ 

{	taskId: 1,
	name: "dentist at seven",
	category: 0,
	complete: true

},

 {	taskId: 2,
	name: "send email",
	category: 0,
	complete: false

},

 {	taskId: 3,
	name: "submit resume",
	category: 0,
	complete: true

},

 {	taskId: 4,
	name: "go to meeting",
	category: 1,
	complete: false

},

{	taskId: 5,
	name: "meet Amita for coffee",
	category: 1,
	complete: false

},
{	taskId: 6, 
	name: "buy more coffee", 
	category: 1, 
	complete: false
},
{	taskId: 7, 
	name: "fight club", 
	category: 2, 
	complete: false
}, 
{	taskId: 8, 
	name: "finish reading The Secret", 
	category: 2, 
	complete: false
}

]

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			newTask0: '',
			newTask1: '',
			newTask2: '',
			category: '',
			allTasks: [],
		}
		console.log("TASKS", myTasks);
	}

  	async componentDidMount() {
		this.setState({
			allTasks: myTasks
		}, () => console.log("THIS STATE", this.state.allTasks))
	}

	handleChange = e => {

		console.log("E", e.target);
		this.setState({
			newTask: e.target.value,
		})
	};


	 handleAddTask = e => {
	    const currentTasks = this.state.allTasks;
	    const taskName = this.state.newTask;
	    const category = this.state.category;
	    const newTask = {
      		name: taskName,
      		category: 0,
      		completed: false
    }
	    console.log(newTask);
	    currentTasks.push(newTask);
    	this.setState({
	      newTask: '',
	      myTasks: currentTasks
    });
    	//const submittableTask = JSON.stringify(newTask);
    	//axios.post(SERVER_URL + '/daily', { data: submittableTask })
      //.then(response => {console.log(response)})
      //.catch(err => { console.log('ERROR', err);})
	  
  }


  render() {
  	const morning = [];

	const daytime = [];

	const evening = [];

	this.state.allTasks.forEach(function(t){
	if (t.category == 0) {
		morning.push(t)
	} else if (t.category == 1) {
		daytime.push(t)
	} else
		evening.push(t)
	});

    return(
       <div>
        <h4>Daily Tasks</h4>
        <div class="flex">
	        <TaskCard
	          time="Morning"
	          category="0"
	          tasks={morning}
	          handleChange={this.handleChange}
	          handleAddTask={this.handleAddTask}
	          newTask={this.state.newTask} />
	        <TaskCard
	          time="Daytime"
	          category="1"
	          tasks={daytime}
	          
	          handleAddTask={this.handleAddTask}
	          />
	        <TaskCard
	          time="Evening"
	          category="2"
	          tasks={evening}
	     
	          handleAddTask={this.handleAddTask}
	         />
	    </div>
      </div>
      );
  }
}

export default Home;
