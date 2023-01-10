import {useState} from 'react'

const AddTask = ({onAdd}) => {

  const [text,setText] = useState('')
  const [dayTime,setDayTime] = useState('')
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e)=> {
     e.preventDefault();

     if(!text) {
        alert('Please enter the task detail to create');
        return;
     }

     if(!dayTime) {
        alert('Please enter the day & time of the task');
        return;
     }

     onAdd({text, dayTime,reminder});

     setText('');
     setDayTime('');
     setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder=' Enter a task to create' value={text} 
               onChange={e => setText(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='The time & date for the task'
               value={dayTime} 
               onChange={e => setDayTime(e.target.value)}/>
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' 
               value={reminder} 
               checked={reminder}
               onChange={e => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
