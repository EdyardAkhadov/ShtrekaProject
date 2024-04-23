import React, { useState } from 'react'
import styles from '/src/styles/PopularRoutes.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from '../../axios'

export default function PopularStation() {
  React.useEffect(()=>{
    axios.get('/posts')
  })

  return (
    <div>
        <div className={styles.PopularStationContainer}>
            <h2 className={styles.PopularStationHeader}>Розклад станції </h2>
            
        </div>
    </div>
  )
}
