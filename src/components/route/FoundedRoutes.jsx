import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './FoundedRoutes.module.css'
import mainStyles from '../../styles/MainStyles.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'
import Loader from '../loader/Loader'
import NotFound from '../router/NotFound'
import TextField from "@mui/material/TextField";
import { fetchRoutes } from '../../redux/slices/routes'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../footer/Footer'


export default function FoundedRoutes() {
 
   const routes = useSelector((state) => state.routes)

   const {fromStation, toStation, date} = useParams();

   const dispatch = useDispatch();
   
   
   const [fromStationDistance, setFromStationDistance] = useState();
   const [toStationDistance, setToStationDistance] = useState();
   const [distance, setDistance] = useState();
   

   const userData = useSelector(state => state.auth.data);
 
   useEffect(() => {
     dispatch(fetchRoutes({fromStation, toStation, date}));
   }, [])

   useEffect(() => {
      routes.routes.items.map(route => (
        route.stations.map(station => {
            if(station.name === fromStation){
              setFromStationDistance(station.distance)
            }
            if(station.name === toStation){
              setToStationDistance(station.distance)
            }
            setDistance(toStationDistance-fromStationDistance)
        }
        ) 
      ))
    
   }, [routes.routes.status === "loaded"])


   
   if(routes.routes.status === "loaded"){
    return(
      <div className={mainStyles.wrapper}>
        <Navbar/>
        <div className={styles.wrapper}>
          <h2>Квитки на {date}</h2>
          {routes.routes.items.map(route => (
            <div className={styles.route}>
              <p> <b className={styles.trainNumber}>{route.trainNumber}</b> <b className={styles.trainType}>{route.trainType}</b></p>
               <div className={styles.routeStations}>
                {route.stations.map(station => (
                    <div>
                      {station.name === fromStation ? 
                        <div>
                          <p className={styles.stationName}>{station.name}</p>
                          <p className={styles.stationTime}>{station.time}</p>
                          </div> 
                      : ""}
                    </div>
                ))}
                  <p className={styles.line}></p>
                  {route.stations.map(station => (
                    <div>                    
                      {station.name === toStation ? 
                        <div>
                          <p className={styles.stationName}>{station.name}</p>
                          <p className={styles.stationTime}>{station.time}</p>
                        </div> 
                        : ""}
                    </div>
                  ))}
              </div>
              {route.placesInfo.map(places => (
                <div>
                  <div>
                   <p>Перший клас : <b>{places.firstClass} місць</b></p>
                    {route.stations.map(stationInfo => {
                        if(stationInfo.name === toStation){
                          return(
                            <p>Вартість : <b>{places.ticketCostFirst + (places.firstCoff * distance)} грн.</b></p> 
                          )
                        }
                      })}
                  </div>
                  <div>
                   <p>Другий клас : <b>{places.secondClass} місць</b></p>
                    {route.stations.map(stationInfo => {
                          if(stationInfo.name === toStation){
                            return(
                               <p>Вартість : <b>{places.ticketCostSecond + (places.secondCoff * distance)} грн.</b></p>
                            )
                          }
                    })}
                  </div>
                  
                </div>
              ))}
              <Link className={styles.buyButton} to={`/route/${route._id}`}>Придбати</Link>
            </div>
          ))}
        </div>
        
        <div className={mainStyles.Footer}><Footer/></div>
      </div>
    )
   }
   else{
    return(
      <Loader/>
    )
   }
  
}
