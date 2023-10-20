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


const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const [inputTask, setInputTask] = useState('');
const [tasks, setTasks] = useState(storedTasks);
const [showTask, setShowTask] = useState(false);


useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}, [tasks]);

let handleButtonClick = () => {
  if (inputTask !== "") {
    setShowTask(!showTask)

    setTasks([...tasks, inputTask]);
    setInputTask("");
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
