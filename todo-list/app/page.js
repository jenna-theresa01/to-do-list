"use client"
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Title from './title'
import InputBox from './inputBox'

export default function Home() {
  return (
      <main className={styles.main}>
        <div>
          <Title />
          <InputBox />
        </div>
      </main>

  )
}
