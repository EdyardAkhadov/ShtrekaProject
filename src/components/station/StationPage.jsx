import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './StationTable.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'

export default function StationPage() {
    const {stationName} = useParams();
    const [station, setStation] = useState();
    const [isLoading, setLoading] = useState(true);

useEffect(() => {
      const fetchResource = async () => {
          axios
          .get(`/stations/${stationName}`)
          .then((res) => {
            setStation(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      fetchResource()
    }, [isLoading])

  return (
    <div>
        <Navbar/>
        <div>
         <div className={styles.wrapper} style={isLoading ? {backgroundColor : "white"} : {backgroundImage:`url(${station.stationImage})`}}>
          <div className={styles.routes__container} >  
          <p className={styles.block_title}>Відправки з {isLoading ? <>завантаження</> : <>{station.stationName}</>}</p>
            <div className={styles.arrival}>
              
              <div className={styles.table__header}>
                <p className={styles.Header__item}>Номер потягу</p>
                <p className={styles.Header__item}>Станція відправки</p>
                <p className={styles.Header__item}>Станція прибуття</p>
                <p className={styles.Header__item}>Час відправки з {isLoading ? <>завантаження</> : <>{station.stationName}</>}</p>
              </div>
                {isLoading ? <>завантаження</> : station.routes.map(stationData => {
                  if(stationData.status === "arrival"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{stationData.number}</div>
                        <div className={styles.row}>{stationData.from}</div>
                        <div className={styles.row}>{stationData.to}</div>
                        <div className={styles.row}>{stationData.time}</div>
                      </div>
                    )
                  }              
                })}
            </div>
            <p className={styles.block_title}>Прибуття на {isLoading ? <>завантаження</> : <>{station.stationName}</>}</p>
            <div className={styles.departure}>        
              <div className={styles.table__header}>
                <p className={styles.Header__item}>Номер потягу</p>
                <p className={styles.Header__item}>Станція відправки</p>
                <p className={styles.Header__item}>Станція прибуття</p>
                <p className={styles.Header__item}>Час прибуття на {isLoading ? <>завантаження</> : <>{station.stationName}</>}</p>
              </div>
                {isLoading ? <>завантаження</> : station.routes.map(stationData => {
                  if(stationData.status === "departure"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{stationData.number}</div>
                        <div className={styles.row}>{stationData.from}</div>
                        <div className={styles.row}>{stationData.to}</div>
                        <div className={styles.row}>{stationData.time}</div>
                      </div>
                    )
                  }              
                })}
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
