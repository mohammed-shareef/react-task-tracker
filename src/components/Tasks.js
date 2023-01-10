import Task from './Task'

/*const tasks =[{
    id:0,
    text:'Pickup from school',
    day : '3:15 PM on 10th Jan 2022',
    reminder : 'true',
},
{
  id:1,
  text:'Business meeting',
  day : '3:15 PM on 10th Jan 2022',
  reminder : 'true',
}]*/

const Tasks = ({tasks,onDelete,onToggle}) => {

  return (
    <>
     {tasks.map(task =>
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>

      //This has been moved to its own component Task.js
      // task => <h4 key={task.id}>{task.text}</h4>)
     )}
   </>
  )
}

export default Tasks
