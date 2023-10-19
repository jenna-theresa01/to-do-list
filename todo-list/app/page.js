"use client"
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Title from './title'
import InputBoxWithButton from './inputBox'


export default function Home() {

  
  return (
      <main className={styles.main}>
        <div>
          <Title />
          <InputBoxWithButton />
          
        </div>
      </main>

  )
}
