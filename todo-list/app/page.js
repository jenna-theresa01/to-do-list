"use client"
import React, { useState } from 'react'
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Title from './title'
import InputBoxWithButton from './inputBox'


export default function Home() {

const [liked, setLike] = useState(true);

function handleChange(e) {
  setLike(e.target.checked);
}

  
  return (
      <main className={styles.main}>
        <div>
          <Title />
          <InputBoxWithButton />
          <label>
            <input
            type="checkbox"
            checked={liked}
            onChange={handleChange}
            />
            <p>You {liked ? 'liked' : 'did not like'} this.</p>
          </label>
        </div>
      </main>

  )
}
