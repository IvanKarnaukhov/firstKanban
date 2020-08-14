import React, {useState} from 'react';


function App() {

    const [inputValue, setInputValue] = useState('')
    const [task, setTask] = useState([1, 2, 3, 4])

    const addInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const addButtonHandler = () => {
        const newTask = [...task, inputValue ]
        setTask(newTask)
    }


    return (

        <div>
            <input onChange={addInputValue}/>
            <button onClick={addButtonHandler}>Add tasks</button>
            {task.map(el => <li>{el}</li>)}

        </div>
    );
}

export default App;
