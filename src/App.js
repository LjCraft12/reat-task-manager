import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Get Something',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Do Something',
            day: 'Feb 8th at 9:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'See Something',
            day: 'March 20th at 12:30pm',
            reminder: false
        },
        {
            id: 4,
            text: 'Smell Something',
            day: 'July 5th at 1:00am',
            reminder: true
        },
    ])

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task};
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = id => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const reminder = id => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/> : 'No Tasks Do'}
        </div>
    );
}

export default App;
