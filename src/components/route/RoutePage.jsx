import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './RoutePage.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'
import Loader from '../loader/Loader'
import mainStyles from '../../styles/MainStyles.module.css'
import NotFound from '../router/NotFound'
import TextField from "@mui/material/TextField";
import { fetchRoutes } from '../../redux/slices/routes'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../footer/Footer'


export default function FoundedRoutes() {
 
   const [isLoading, setLoading] = useState(true);
   const [route, setRoute] = useState();
   const [wagon, setWagon] = useState(1);
   const [wagonType, setWagonType] = useState();
   const [seatType, setSeatType] = useState();
   const [seat, setSeat] = useState();
   const [name, setName] = useState();
   const [secondName, setSecondName] = useState();
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
      <div className={mainStyles.wrapper}>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className={styles.wagonMaket}> 
            <div  className={styles.wagonNumbers}>
              {route.places.map(wagons => (
                      <input 
                            type="button" onClick={(e) => {setWagon(wagons.wagonNumber),
                                                           setWagonType(wagons.wagonType),
                                                           setSeatType(wagons.seatType),
                                                          setSeat()}
                            } 
                            className={wagons.wagonNumber === wagon ? styles.chosenWagonNumber : styles.wagonNumber}  
                            value={wagons.wagonNumber}/>
                ))}
            </div>
              {route.places.map(wagons => (
                    <div className={ wagons.wagonNumber === wagon ?  styles.trainMaket : ""} >
                    {wagons.seats.map(seats => {
                      if(wagons.wagonNumber === wagon){
                        
                      return(
                        <div className={styles.seatButton}>
                            {seats.status==="free" ? 
                            <input 
                                  className={ seats.number === seat ?  styles.chosenSeat : styles.seat}  
                                  type="button" onClick={(e) => setSeat(seats.number)} 
                                  value={seats.number} /> : 
                            <input  type="button" disabled value={seats.number} />}
                        </div>
                        )}
                    })}
                    </div>
              ))}
            </div>
            <div className={styles.passangerInfo}>
              <p>Прізвище: </p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <p>Ім'я:</p>
              <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>
              <div className={styles.ticketInfo}>
                <>{name ?  <p>Ім'я пасажира: {name}</p> : <></>}</>
                <>{secondName ?  <p>Прізвище пасажира: {secondName}</p> : <></>}</>
                <>{wagon ? <p>Номер вагона: {wagon}</p> : <></>}</>
                <>{wagonType ? <p>Тип вагона : {wagonType} </p> : <></>}</>
                <>{seatType  ? <p>Тип місця : {seatType}</p> : <></>}</>
                <>{seat ?  <p>Номер місця: {seat}</p> : <></>}</>
              </div>
              <input className={styles.buyButton} type="button" value="Придбати квиток" />
            </div>
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
