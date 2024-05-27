import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './ChooseRouteTicket.module.css'
import Navbar from '../navbar/NavBar'
import axios from '../../axios'
import Loader from '../loader/Loader'
import NotFound from '../router/NotFound'
import mainStyles from '../../styles/MainStyles.module.css'
import Footer from '../footer/Footer'


export default function ChooseRouteTicket() {
    const {routeFromStation, routeToStation} = useParams();
    const [route, setRoute] = useState();
    const [isLoading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false)

    const [passengerName, setPassengerName] = useState('');
    const [passengerSecondName, setPassengerSecondName] = useState('');
    const [fromStation, setFromStation] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toStation, setToStation] = useState('');
    const [toTime, setToTime] = useState('');
    const [stationToNumber, setStationToNumber] = useState(1000);
    const [trainNumber, setTrainNumber] = useState('');
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();
    const [date, setDate] = useState();

    const [stationFromNumber, setStationFromNumber] = useState(0);
    const [isFromStation, setIsFromStation] = useState(false);
    const [isToStation, setIsToStation] = useState(false);
    const [isDate, setIsDate] = useState(false);
    const [isToday, setIsToday] = useState(false);
    const [isTomorrow, setIsTomorrow] = useState(false);

  const nowDate = new Date();
  let nowDay = nowDate.getDate();
  let nextDay = (1+nowDate.getDate());

  let nowMonth = nowDate.getMonth()

  if(nowDay < 10){
    nowDay = "0" + nowDay;
  }

  if(nextDay < 10){
    nextDay = "0" + nextDay;
  }

  if(nowMonth + 1 >= 10){
    nowMonth += 1;
  }else{
     nowMonth += 1;
     nowMonth = "0" + nowMonth;
  }
  
  const nowYear = nowDate.getFullYear();

 const today =  nowDay+"."+nowMonth+"."+nowYear;
  const tomorrow =  nextDay+"."+nowMonth+"."+nowYear;

  const price = (parseInt(toPrice) - parseInt(fromPrice)).toString();
  

useEffect(() => {
      const fetchResource = async () => {
          axios
          .get(`/route/${routeFromStation}/${routeToStation}`)
          .then((res) => {
            setRoute(res.data);
            setTimeout(()=>{
              setLoading(false);
            }, 500)
          })
          .catch((err) => {
            console.log(err);
          })
      }
      fetchResource()
    }, [isLoading])

function deleteTicket(){
    setIsDate(false);
    setIsFromStation(false);
    setIsToStation(false)
    setIsToday(false);
    setStationFromNumber(0);
    setStationToNumber(100);
    setIsTomorrow(false);
    setDate();
    setFromStation();
    setFromTime();
    setToStation();
    setToTime();
  }

    const onSubmit = async() =>{
      try {
        setSubmitLoading(true);

        const fields = {
          passengerName,
          passengerSecondName,
          date,
          trainNumber,
          fromStation,
          fromTime,
          toStation,
          toTime,
          price
        }

        deleteTicket()
        alert("Квиток успішно куплений. Ви можете знайти його у вашому особистолму кабінеті!")
        const{data} = await axios.post('/ticket', fields)

        const id = data._id;
        console.log(id);
      } catch (err) {
        console.warn(err);
        alert("Не вдалося придбати квиток!");
      }
    }

  if(route === "Маршруту не існує"){
    return isLoading ? (<Loader/>) : ( <NotFound/> )
  }else{
  return isLoading ? (<Loader/>) : (
    <div className={mainStyles.wrapper}>
        <Navbar/>
        <div className={styles.container}>
          <h2>Маршрут {route.departureStation + " - " + route.arrivalStation}</h2>
          <div className={styles.trainInformationBlock}>
            <p className={styles.trainInformation}>Номер потягу : {route.trainNumber}</p>
            <p className={styles.trainInformation}>Тип потягу : { route.trainType}</p>
            <div className={styles.userData}>
              <label htmlFor="passengerName">Ім'я пасажира :</label>
              <input 
                id='passengerName'
                type="text" 
                value={passengerName} 
                onChange={(e) => setPassengerName(e.target.value)}/>
              
              <label htmlFor="setPassengerName">Прізвище пасажира :</label>
              <input 
                id='setPassengerName'
                type="text" 
                value={passengerSecondName} 
                onChange={(e) => setPassengerSecondName(e.target.value)}/>
            </div>
            <div className={styles.dates}>
              <p className={styles.trainInformation}>Оберіть дату :</p>
              <input 
                
                className={isToday ? styles.chosenButton : styles.dateButton} 
                type="button" value={today} 
                onClick={(e) =>  {
                  setDate(today)
                  setIsDate(true)
                  setIsToday(true)
                  setIsTomorrow(false)}}/>
                  
              <input 
                className={isTomorrow ? styles.chosenButton : styles.dateButton} 
                type="button" 
                value={tomorrow} 
                onClick={(e) =>  {
                  setDate(tomorrow)
                  setIsDate(true)
                  setIsTomorrow(true)
                  setIsToday(false)}}/>
            </div>
           </div>
          <div className={styles.table}>
            <div className={isDate && !isToStation ? styles.stationTable:  styles.stationTableAfter} >
              <div className={styles.stationInfoHeader}>Номер станції</div>
              <div className={styles.stationInfoHeader}>Назва станції</div>
              <div className={styles.stationInfoHeader}>Час відправки зі станції</div>
              <div style={isDate && !isToStation ? {"color" : "#034b03"} : {"display" : "none"}} className={styles.stationInfoHeader}>{isFromStation ? "Оберіть станцію прибуття" : "Оберіть станцію відправки"}</div>
            </div>

            {route.stations.map(station => {
              if(station.stationNumber >= stationFromNumber && station.stationNumber <= stationToNumber){
                return(
                  <div className={isDate && !isToStation ? styles.stationTable:  styles.stationTableAfter}>
                    <div className={(station.stationNumber === stationFromNumber 
                                    || station.stationNumber === stationToNumber) 
                                    ? styles.stationFromTo: styles.stationInfo}>
                                      {station.stationNumber}
                    </div>
                    <div className={(station.stationNumber === stationFromNumber 
                                    || station.stationNumber === stationToNumber) 
                                    ? styles.stationFromTo: styles.stationInfo}>
                                      {station.name}
                    </div>
                    
                    <div className={(station.stationNumber === stationFromNumber 
                                    || station.stationNumber === stationToNumber) 
                                    ? styles.stationFromTo: styles.stationInfo}>
                                      {station.time}
                    </div>
                      <input
                      className={styles.stationInfoButton}
                      style={isFromStation || !isDate ? {"display" : "none"} : {}}
                      type='button' 
                      value="Обрати"
                      onClick={(e) => { setFromStation(station.name);
                                        setIsFromStation(true);
                                        setStationFromNumber(station.stationNumber)
                                        setFromTime(station.time)
                                        setTrainNumber(route.trainNumber)
                                        setFromPrice(station.price)}}>
                      </input>  
                      <input 
                      className={styles.stationInfoButton}
                      disabled={((station.stationNumber === stationFromNumber ) || isToStation) ? true : false}
                      style={isFromStation  ?  {} : {"display" : "none"}} 
                      type='button'
                      value="Обрати" 
                      onClick={(e) => {
                                  setToStation(station.name);
                                  setStationToNumber(station.stationNumber)
                                  setToTime(station.time)
                                  setIsToStation(true)
                                  setToPrice(station.price)}}>

                      </input>
                  </div>
                )
              }

            })}
          </div>
          <div style={isToStation ? {} : {"display" : "none"}}>
            <dir className={styles.ticket}>
              <h3>Квиток</h3>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Прізвище та ім'я пасажира :</p>
                <p className={styles.ticketData}>{passengerName} {passengerSecondName}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Дата відправки :</p>
                <p className={styles.ticketData}>{date}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Номер потяга :</p>
                <p className={styles.ticketData}>{trainNumber}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Станція відправки :</p>
                <p className={styles.ticketData}>{fromStation}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Час відправки :</p>
                <p className={styles.ticketData}>{fromTime}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Станція прибуття :</p>
                <p className={styles.ticketData}>{toStation}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Час прибуття :</p>
                <p className={styles.ticketData}>{toTime}</p>
              </div>
              <div className={styles.ticketInfo}>
                <p className={styles.ticketParam}>Ціна :</p>
                <p className={styles.ticketData}>{price} грн</p>
              </div>
              <div className={styles.ticketButtons}>
                <button onClick={deleteTicket} className={styles.delete}>Видалити</button>
                <button onClick={onSubmit} className={styles.submit}>Купити</button>
              </div>
              
            </dir>
          </div>
        </div>
        <div className={mainStyles.Footer}><Footer/></div>
    </div>
  )
}
}
