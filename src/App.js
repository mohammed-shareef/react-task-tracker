
/*useState is a hook*/ 
import { async } from 'q'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

   const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([])

  useEffect(()=>{

    const getTasks = async () =>{
      const tasks = await fetchTasks();
      setTasks(tasks);
    }

    getTasks();

  },[])

  const fetchTasks = async () =>{
      
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
}

  const deleteTask = async (id) => {
   // console.log('Delete a task',id)
   await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
   })
   setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = (id) =>{
   // console.log('Toggle reminder',id);
    setTasks(tasks.map(task => task.id === id ? {...task,reminder:!task.reminder} : task));
  }

  const addTask = async (task) =>{
   //  console.log('Task ',task);
     const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(task)
     })

     const data = await res.json();

     setTasks([...tasks,data]);
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
