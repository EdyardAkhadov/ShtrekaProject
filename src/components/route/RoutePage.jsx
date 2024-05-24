import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './RoutePage.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'
import Loader from '../loader/Loader'
import NotFound from '../router/NotFound'
import TextField from "@mui/material/TextField";
import { fetchRoutes } from '../../redux/slices/routes'
import { useDispatch, useSelector } from 'react-redux'


export default function FoundedRoutes() {
 
   const [isLoading, setLoading] = useState(true);
   const [route, setRoute] = useState();
   const [wagon, setWagon] = useState(1);
   const [seat, setSeat] = useState();
   const routes = useSelector((state) => state.routes)
   const routeId = useParams()
   console.log(routeId.id)

   useEffect(() => {
    const fetchResource = async () => {
        axios
        .get(`/route/${routeId.id}`)
        .then((res) => {
          setRoute(res.data);
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


   
   if(!isLoading){
    return(
      <div>
        <Navbar/>
        <div className={styles.wrapper}>
          <div> 
            <div className={styles.wagonNumbers}>
              {route.places.map(wagons => (
                      <input type="button" onClick={(e) => setWagon(wagons.wagonNumber)} className={styles.wagonNumber} value={wagons.wagonNumber}/>
                ))}
            </div>
              {route.places.map(wagons => (
                    <div className={ wagons.wagonNumber === wagon ?  styles.trainMaket : ""} >
                    {wagons.seats.map(seats => {
                      if(wagons.wagonNumber === wagon){
                        
                      return(
                        <div className={styles.seatButton}>
                            {seats.status==="free" ? 
                            <input className={ seats.number === seat ?  styles.chosenSeat : styles.seat}  type="button" onClick={(e) => setSeat(seats.number)} value={seats.number} /> : 
                            <input  type="button" disabled value={seats.number} />}
                        </div>
                        )}
                    })}
                    </div>
              ))}
            </div>
            <div className={styles.passangerInfo}>

            </div>
          </div>
      </div>
    )
   }
   else{
    return(
      <Loader/>
    )
   }
  
}
