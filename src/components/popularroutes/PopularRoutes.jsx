import React, { useEffect, useState } from 'react'
import styles from '/src/styles/PopularRoutes.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStations } from '../../redux/slices/station.js'

export default function PopularStation() {

  const dispatch = useDispatch();
  const {stations} = useSelector(state => state.stations);

 const isStationsLoading = stations.status === 'loading';

  React.useEffect(()=>{
    dispatch(fetchStations())
  }, [])

  console.log(stations)

  return (
    <div>
        <div className={styles.PopularStationContainer}>
            <h2 className={styles.PopularStationHeader}>Розклад станції </h2>
            {(isStationsLoading ? [undefined] : stations.items).map((obj, index) => isStationsLoading ? (<p >Розклад, на жаль, не працює!</p> ):( <div>{obj.routes.map((route) => (<p>{route.from}</p>) )}</div> ) )}
        </div>
    </div>
  )
}
