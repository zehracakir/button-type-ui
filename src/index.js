import React from 'react'
import styles from './styles.module.css'

export const Button = ({type,text}) =>{
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}