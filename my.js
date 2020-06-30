// query to select button
var btn = document.querySelector('button');
btn.onclick = createTask;

// function to create new task
function createTask()
{
	var name=document.querySelector('input');
	
	// creating a coloumn div
	var newtask = document.createElement('div');
	newtask.classList='column taskIncomplete';
	
	// creating a checkbox
	var taskCB = document.createElement('input');
	taskCB.type = 'checkbox';
	taskCB.style.float = 'left';
	taskCB.onclick = onCheck;
	
	// name element
	var taskname = document.createElement('h3');
	// If name is not added then print unnamed
	if(name.value == "")
	{
	taskname.textContent = "Unnamed";
	}
	else
	{
	taskname.textContent = name.value;	
	}
	// delete button
	var delbtn = document.createElement('Button');
	delbtn.textContent = 'Delete'
	delbtn.style.float = 'right';
	delbtn.onclick = del;
	
	// adding task elements to task
	newtask.prepend(delbtn);
	newtask.prepend(taskname);
	newtask.prepend(taskCB);
	// appednig task to list
	document.querySelector('div').prepend(newtask)
}


function del(e)
{
	// playing sound
	var file= new Audio('ding-sound-effect.mp3')
	file.play();
	// delete the task
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

function onCheck(e)
{
	// playsound on checkbox click
	var file= new Audio('ding-sound-effect.mp3')
	file.play();
	// if it is set to completed
	if(e.target.checked == true )
	{
		e.target.parentNode.classList = 'column taskcomplete';
		e.target.parentNode.parentNode.appendChild(e.target.parentNode);
	}
	// if uncomplete is checked
	else
	{
		e.target.parentNode.classList = 'column taskIncomplete';
		e.target.parentNode.parentNode.appendChild(e.target.parentNode);
		
	}
}