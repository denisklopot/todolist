import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type FilterButtonNameType = "All" | "Active" | "Completed"

function App() {

    /*   let tasks1 = [
           { id: 1, title: "HTML&CSS", isDone: true },
           { id: 2, title: "JS", isDone: true },
           { id: 3, title: "ReactJS", isDone: false },
           { id: 4, title: "ReactJS2222", isDone: false }
       ]*/

    let [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS2222", isDone: false}
    ])

    const removeTask = (taskId: number) => {
        setTasks(tasks1.filter(el => el.id !== taskId))
    }

    /*let durshlag = tasks1
    durshlag = tasks1.filter(el => el.isDone)*/

/*    let[filterButtonName, setFilterButtonName] = useState<FilterButtonNameType>("All")

    let durshlag = tasks1

    if (filterButtonName === "Active") {
        durshlag = tasks1.filter(el => el.isDone)
    }
    if (filterButtonName === "Completed") {
        durshlag = tasks1.filter(el => !el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonNameType) => {
        setFilterButtonName(buttonName)
    }*/

    return (
        <div className="App">
            <Todolist shapka='What to learn'
                      tasks={tasks1}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
