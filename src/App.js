
/*useState is a hook*/ 
import {useState} from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

   const [showAddTask,setShowAddTask] = useState(false)

    const [tasks,setTasks] = useState([{
      id:1,
      text:'Pickup from school',
      dayTime : '3:15 PM on 10th Jan 2022',
      reminder : true,
  },
  {
    id:2,
    text:'Business meeting',
    dayTime : '3:45 PM on 10th Jan 2022',
    reminder : false,
  }])

  const deleteTask = (id)=>{
   // console.log('Delete a task',id)
   setTasks(tasks.filter(task => task.id != id));
  }

  const toggleReminder = (id) =>{
   // console.log('Toggle reminder',id);
    setTasks(tasks.map(task => task.id == id ? {...task,reminder:!task.reminder} : task));
  }

  const addTask = (task) =>{
   //  console.log('Task ',task);
   const id = Math.floor(Math.random() * 10000) + 1;
   const newTask = {id,...task};
   setTasks([...tasks,newTask]);
   }

  return (
    <div className="container">

     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} 
                                  onToggle={toggleReminder} 
                                  onDelete={deleteTask}/>) : 'No task(s) to show'}
    </div>
  );
}

export default App;
