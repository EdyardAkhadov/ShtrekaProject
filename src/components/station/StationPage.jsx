import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './StationTable.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'
import { Link } from 'react-router-dom';
import NotFound from '../router/NotFound'
import Loader from '../loader/Loader'

import {useSelector } from 'react-redux';

import {selectIsAuth } from '../../redux/slices/auth';

export default function StationPage() {
    const {stationName, date} = useParams();
    const [station, setStation] = useState();
    const [isLoading, setLoading] = useState(true);
    const isAuth = useSelector(selectIsAuth);
    const userData = useSelector(state => state.auth.data);

useEffect(() => {
      const fetchResource = async () => {
          axios
          .get(`/stations/${stationName}/${date}`)
          .then((res) => {
            setStation(res.data);
            setTimeout(()=>{
              setLoading(false);
            }, 500)
          })
          .catch((err) => {
            console.log("err");
          })
      }
      fetchResource()
    }, [isLoading])
    

  if(station === "Cтанції не існує"){
    return isLoading ? (<Loader/>) : ( <NotFound/> )
  }else{
  return isLoading ? (<Loader/>) : (
    <div>
        <Navbar/>
        <div>
         <div className={styles.wrapper} style={{backgroundImage:`url(${station.stationImage})`}}>
          <div className={styles.routes__container} >  
          <p className={styles.block_title}>Відправки з {station.stationName}</p>
            <div className={styles.arrival}>
              
              <div className={styles.table__header}>
                <p className={styles.Header__item}>Номер потягу</p>
                <p className={styles.Header__item}>Станція відправки</p>
                <p className={styles.Header__item}>Станція прибуття</p>
                <p className={styles.Header__item}>Час відправки з {station.stationName}</p>
                
                <p className={styles.Header__item}>Придбайте квиток</p>
              </div>
                {station.routes.map(stationData => {
                  if(stationData.status === "departure"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{stationData.number}</div>
                        <div className={styles.row}>{stationData.from}</div>
                        <div className={styles.row}>{stationData.to}</div>
                        <div className={styles.row}>{stationData.time}</div>
                        <Link 
                          to={!isAuth ? `/login` : `/route/${stationData.from}/${stationData.to}`} 
                          style={{textDecoration: "none"}}>
                            <div className={styles.buy_button}>{!isAuth ? "Увійти в аккаунт" : "Придбати квиток"}</div>
                        </Link>
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
                <p className={styles.Header__item}>Придбайте квиток</p>
              </div>
                {station.routes.map(stationData => {
                  if(stationData.status === "arrival"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{stationData.number}</div>
                        <div className={styles.row}>{stationData.from}</div>
                        <div className={styles.row}>{stationData.to}</div>
                        <div className={styles.row}>{stationData.time}</div>
                        <Link 
                          to={!isAuth ? `/login` : `/route/${stationData.from}/${stationData.to}`} 
                          style={{textDecoration: "none"}}>
                            <div className={styles.buy_button}>{!isAuth ? "Увійти в аккаунт" : "Придбати квиток"}</div>
                          </Link>
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
}
