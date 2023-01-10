import React, {useState} from "react";
import {FilterButtonNameType} from "./App";

export type TodolistPropsType = {
    shapka: string
    //tasks: Array<TasksType>
    tasks: TasksType[]
    removeTask: (taskId: number) => void
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {

    let [filterButtonName, setFilterButtonName] = useState<FilterButtonNameType>("All")
    let durshlag = props.tasks

    if (filterButtonName === "Active") {
        durshlag = props.tasks.filter(el => el.isDone)
    }
    if (filterButtonName === "Completed") {
        durshlag = props.tasks.filter(el => !el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonNameType) => {
        setFilterButtonName(buttonName)
    }

    return (
        <div>
            <h3>{props.shapka}</h3>
            <h3>{props.shapka}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlag.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filteredCurrentTasks("All")}>All</button>
                <button onClick={() => filteredCurrentTasks("Active")}>Active</button>
                <button onClick={() => filteredCurrentTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}