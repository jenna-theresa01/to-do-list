"use client"
import React, { useState, useEffect } from 'react'
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Title from './title'
import InputBoxWithButton from './inputBox'


export default function Home() {

const storedTasks = JSON.parse(localStorage.getItem('tasks'));

const [tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}, [tasks]);

function handleButtonClick (e) {
  console.log(e);
  let results = [];
  results.push({inputText});
}

function handleKeyPress (e) {
  console.log(e);
  let textResults = [];
  textResults.push({inputText});
}

  
  return (
      <main className={styles.main}>
        <div>
          <Title />
          <InputBoxWithButton 
            handleButtonClick={handleButtonClick}
            handleKeyPress={handleKeyPress}
          />
         
        </div>
      </main>

  )
}
