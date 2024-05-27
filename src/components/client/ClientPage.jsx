import React, { useEffect, useState } from 'react'
import styles from "./ClientPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {selectIsAuth } from '../../redux/slices/auth';
import Navbar from '/src/components/navbar/NavBar.jsx';
import { fetchTickets } from '../../redux/slices/tickets';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import QRCode from 'react-qr-code'
import Footer from '../footer/Footer';
import mainStyles from '../../styles/MainStyles.module.css'

export default function ClientPage() {
  const isAuth = useSelector(selectIsAuth);

  const tickets = useSelector((state) => state.tickets)

  const [isActiveTicket, setIsActiveTicket] = useState(true);

  const userId = useParams();
  const dispatch = useDispatch();
  
  const userData = useSelector(state => state.auth.data);

  useEffect(() => {
    dispatch(fetchTickets(userId.userId));
  }, [])


  if(isAuth){
    return (tickets.tickets.status === "loading") ? (<Loader/>) : ( 
        <div className={mainStyles.wrapper}>
            <Navbar/>
            <div className={styles.userInfo}>
                <div className={styles.userData}>
                    <p>Прізвище: {userData.firstName}</p>
                    <p>Ім'я: {userData.secondName}</p>
                    <p>Номер телефону: {userData.phoneNumber}</p>
                </div>
                <div className={styles.Tickets}>
                    <div>
                        <input 
                              className={isActiveTicket ? styles.chosenButton : styles.Button} 
                              type="button" 
                              value="Активні квитки" 
                              onClick={(e) => setIsActiveTicket(true)}/>
                        <input 
                              className={!isActiveTicket ? styles.chosenButton : styles.Button} 
                              type="button" 
                              value="Історія квитків" 
                              onClick={(e) => setIsActiveTicket(false)}/>
                        <div className={styles.activeTickets}>
                            {tickets.tickets.items.map(ticket => (
                              <div className={styles.ticket}>
                                <div className={styles.ticketContainer}>
                                  <p className={styles.date}>Дата: {ticket.date}</p>
                                  <p className={styles.trainNumber}>Номер потяга : {ticket.trainNumber}</p>
                                  <div className={styles.routeInfo}>
                                    <div className={styles.mainTrainInfo}>
                                      <p className={styles.titles}>Станція відправки :</p>
                                      <p className={styles.mainInfo}>{ticket.fromStation}</p>
                                      <p className={styles.titles}> Час відправки :</p>
                                      <p className={styles.mainInfo}>{ticket.fromTime}</p>
                                    </div>
                                    <div className={styles.line}></div>
                                    <div className={styles.mainTrainInfo}>
                                      <p className={styles.titles}>Станція прибуття :</p>
                                      <p className={styles.mainInfo}>{ticket.toStation}</p>
                                      <p className={styles.titles}>Час прибуття :</p>
                                      <p className={styles.mainInfo}>{ticket.toTime}</p>
                                    </div>
                                  </div>

                                  <div className={styles.routeDetails}>
                                    <p>{ticket.passengerName} {ticket.passengerSecondName}</p>
                                    <p>{ticket.wagonNumber}</p>
                                    <p>{ticket.wagonType}</p>
                                    <p>{ticket.seatNumber}</p>
                                    <p>{ticket.seatType}</p>
                                  </div>
                                </div>
                                <QRCode 
                                  style={{ height: "auto", maxWidth: "200px", width: "100%" }}

                                  className={styles.QRCode} 
                                  value={ticket._id}/>
                              </div>
                            ))}
                        </div>
                        <div className={styles.disactiveTickets}>

                        </div>
                    </div>
                </div>
            </div>
          <div className={mainStyles.Footer}><Footer/></div>
        </div>
    )
  }
    
}