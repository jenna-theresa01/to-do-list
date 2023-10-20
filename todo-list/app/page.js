"use client"
import React, { useState, useEffect } from 'react'
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Title from './title'
import InputBoxWithButton from './inputBox'
import InputTable from './inputTable'
import TabGroups from './tabGroups'


export default function Home() {


const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []; // trying to retrieve data from local storage; if data found, it is parsed from a JSON string to JS obj; if no data found, default to empty array

const [inputTask, setInputTask] = useState('');
const [tasks, setTasks] = useState(storedTasks);
const [showTask, setShowTask] = useState(false); // initializes 'showTask' variable with "false". this is used to control the visibility of a task


useEffect(() => { // hook used to set up to run when "tasks" state changes
  localStorage.setItem('tasks', JSON.stringify(tasks)) // saves the tasks in "tasks" state to local storage under key 'tasks'

}, [tasks]);


let handleButtonClick = () => {
  if (inputTask !== "") { // checks if inputTask is not an empty string; 
    setShowTask(!showTask) // if not empty it toggles 'showTask'

    setTasks([...tasks, inputTask]); // adds the current value of 'inputTasks' to the 'tasks' array
    setInputTask(""); // resets the 'inputTask' to an empty string
  }
}

  return (
      <main className={styles.main}>
        <div>
          <Title />
          <InputBoxWithButton 
          inputTask={inputTask}
          setInputTask={setInputTask}
          showTask={showTask}
          setShowTask={setShowTask}
          handleButtonClick={handleButtonClick}
          />
          <InputTable 
          tasks={[tasks]}
          />
        </div>
        <TabGroups />
      </main>

  )
}
