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
   const routeData = useParams()
   
   const [passengerName, setPassengerName] = useState();
   const [passengerSecondName, setPassengerSecondName] = useState();
   const [wagonNumber, setWagonNumber] = useState(1);
   const [wagonType, setWagonType] = useState();
   const [seatNumber, setSeatNumber] = useState();
   const [seatType, setSeatType] = useState();
   let fromStation = routeData.fromStation
   let toStation = routeData.toStation
   let date = routeData.date

   const routes = useSelector((state) => state.routes)

   let distance = routeData.distance

   useEffect(() => {
    const fetchResource = async () => {
        axios
        .get(`/route/${routeData.id}`)
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
  


  const onSubmit = async() =>{
    try {
      setSubmitLoading(true);

      const fields = {
        passengerName,
        passengerSecondName,
        date,
        fromStation,
        fromTime,
        toStation,
        toTime,
        trainNumber,
        wagonNumber,
        wagonType,
        seatNumber,
        seatType,
        price
      }
      alert("Квиток успішно куплений. Ви можете знайти його у вашому особистолму кабінеті!")
      const{data} = await axios.post('/ticket', fields)

      const id = data._id;
      console.log(id);
    } catch (err) {
      console.warn(err);
      alert("Не вдалося придбати квиток!");
    }
  }

   if(!isLoading){

    return(
      <div className={mainStyles.wrapper}>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className={styles.wagonMaket}> 
            <div  className={styles.wagonNumbers}>
              {route.places.map(wagons => (
                      <input 
                            type="button" onClick={(e) => {setWagonNumber(wagons.wagonNumber),
                                                           setWagonType(wagons.wagonType),
                                                           setSeatType(wagons.seatType),
                                                           setSeatNumber()}
                            } 
                            className={wagons.wagonNumber === wagonNumber ? styles.chosenWagonNumber : styles.wagonNumber}  
                            value={wagons.wagonNumber}/>
                ))}
            </div>
              {route.places.map(wagons => (
                    <div className={ wagons.wagonNumber === wagonNumber ?  styles.trainMaket : ""} >
                    {wagons.seats.map(seats => {
                      if(wagons.wagonNumber === wagonNumber){
                        
                      return(
                        <div className={styles.seatButton}>
                            {seats.status==="free" ? 
                            <input 
                                  className={ seats.number === seatNumber ?  styles.chosenSeat : styles.seat}  
                                  type="button" onClick={(e) => setSeatNumber(seats.number)} 
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
              <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)}/>
              <p>Ім'я:</p>
              <input type="text" value={passengerSecondName} onChange={(e) => setPassengerSecondName(e.target.value)}/>
              <div className={styles.ticketInfo}>
                <>{passengerName ?  <p>Ім'я пасажира: {passengerName}</p> : <></>}</>
                <>{passengerSecondName ?  <p>Прізвище пасажира: {passengerSecondName}</p> : <></>}</>
                <>{wagonNumber ? <p>Номер вагона: {wagonNumber}</p> : <></>}</>
                <>{wagonType ? <p>Тип вагона : {wagonType} </p> : <></>}</>
                <>{seatType  ? <p>Тип місця : {seatType}</p> : <></>}</>
                <>{seatNumber ?  <p>Номер місця: {seatNumber}</p> : <></>}</>
                  {
                    route.placesInfo.map(info => {
                      if(seatType === "Перший клас"){
                        return <p>Ціна: {info.ticketCostFirst + (info.firstCoff * distance)}</p>
                      }
                      if(seatType === "Другий клас"){
                        return <p>Ціна: {info.ticketCostSecond + (info.secondCoff * distance)}</p>
                      }
                    })
                  }
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
